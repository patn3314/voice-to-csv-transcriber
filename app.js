// app.js
document.addEventListener('DOMContentLoaded', () => {
    // 要素の取得
    const startBtn = document.getElementById('start-btn');
    const stopBtn = document.getElementById('stop-btn');
    const downloadBtn = document.getElementById('download-btn');
    const copyBtn = document.getElementById('copy-btn');
    const clearBtn = document.getElementById('clear-btn');
    const transcriptArea = document.getElementById('transcript');
    const characterCount = document.getElementById('character-count');
    const statusText = document.getElementById('status-text');
    const statusDot = document.querySelector('.status-dot');
    const themeToggle = document.getElementById('theme-toggle');
    const toast = document.getElementById('toast');

    // テーマ設定の初期化
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // テーマ切り替え機能
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        showToast(`${newTheme === 'dark' ? 'ダーク' : 'ライト'}モードに切り替えました`);
    });

    // Web Speech APIのサポート確認
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        showToast('このブラウザは音声認識機能をサポートしていません。Google Chromeをお試しください。', 'error');
        startBtn.disabled = true;
        updateStatus('未対応', 'error');
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'ja-JP';
    recognition.interimResults = true;
    recognition.continuous = true;
    recognition.maxAlternatives = 1;

    let finalTranscript = '';
    let interimTranscript = '';
    let isRecording = false;

    // 録音開始
    startBtn.addEventListener('click', () => {
        try {
            recognition.start();
            isRecording = true;
            startBtn.disabled = true;
            stopBtn.disabled = false;
            clearBtn.disabled = false;
            updateStatus('録音中', 'recording');
            showToast('録音を開始しました');
        } catch (error) {
            console.error('録音開始エラー:', error);
            showToast('録音の開始に失敗しました', 'error');
        }
    });

    // 録音停止
    stopBtn.addEventListener('click', () => {
        recognition.stop();
        isRecording = false;
        startBtn.disabled = false;
        stopBtn.disabled = true;
        downloadBtn.disabled = finalTranscript.trim() === '';
        copyBtn.disabled = finalTranscript.trim() === '';
        updateStatus('停止中', 'idle');
        showToast('録音を停止しました');
    });

    // 文字起こし結果のイベントハンドラ
    recognition.onresult = (event) => {
        interimTranscript = '';
        
        for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                finalTranscript += event.results[i][0].transcript + '\n';
            } else {
                interimTranscript += event.results[i][0].transcript;
            }
        }

        transcriptArea.value = finalTranscript + interimTranscript;
        transcriptArea.scrollTop = transcriptArea.scrollHeight; // 自動スクロール
        updateCharacterCount();
        
        // 結果が出たらダウンロードとコピーボタンを有効化
        if (finalTranscript.trim() !== '') {
            downloadBtn.disabled = false;
            copyBtn.disabled = false;
        }
    };

    // エラーハンドリング
    recognition.onerror = (event) => {
        console.error('Speech recognition error detected: ' + event.error);
        showToast('音声認識中にエラーが発生しました: ' + event.error, 'error');
        isRecording = false;
        startBtn.disabled = false;
        stopBtn.disabled = true;
        updateStatus('エラー', 'error');
    };

    // 音声認識終了時の処理
    recognition.onend = () => {
        if (isRecording) {
            // 音声認識が停止した場合でも自動的に録音を再開
            try {
                recognition.start();
                showToast('音声認識を再開しました', 'info');
            } catch (error) {
                console.error('音声認識再開エラー:', error);
                isRecording = false;
                startBtn.disabled = false;
                stopBtn.disabled = true;
                updateStatus('エラー', 'error');
                showToast('音声認識の再開に失敗しました', 'error');
            }
        }
    };

    // CSVダウンロード
    downloadBtn.addEventListener('click', () => {
        if (finalTranscript.trim() === '') {
            showToast('文字起こしされたテキストがありません', 'warning');
            return;
        }

        try {
            const csvContent = "data:text/csv;charset=utf-8," + 
                finalTranscript.split('\n').map(line => `"${line.replace(/"/g, '""')}"`).join('\n');

            const encodedUri = encodeURI(csvContent);
            const link = document.createElement('a');
            link.setAttribute('href', encodedUri);
            const currentDate = new Date().toISOString().slice(0,19).replace(/[:T]/g, "-");
            link.setAttribute('download', `transcript_${currentDate}.csv`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            showToast('CSVファイルをダウンロードしました');
        } catch (error) {
            console.error('ダウンロードエラー:', error);
            showToast('ダウンロード中にエラーが発生しました', 'error');
        }
    });

    // クリップボードにコピー
    copyBtn.addEventListener('click', () => {
        if (finalTranscript.trim() === '') {
            showToast('コピーするテキストがありません', 'warning');
            return;
        }

        try {
            navigator.clipboard.writeText(transcriptArea.value).then(() => {
                showToast('テキストをクリップボードにコピーしました');
            }, () => {
                showToast('コピーに失敗しました', 'error');
            });
        } catch (error) {
            console.error('コピーエラー:', error);
            // Fallback for older browsers
            transcriptArea.select();
            document.execCommand('copy');
            showToast('テキストをクリップボードにコピーしました');
        }
    });

    // テキストクリア
    clearBtn.addEventListener('click', () => {
        if (transcriptArea.value.trim() === '') {
            showToast('クリアするテキストがありません', 'warning');
            return;
        }

        const confirmClear = confirm('文字起こしテキストをクリアしますか？');
        if (confirmClear) {
            transcriptArea.value = '';
            finalTranscript = '';
            interimTranscript = '';
            downloadBtn.disabled = true;
            copyBtn.disabled = true;
            clearBtn.disabled = true;
            updateCharacterCount();
            showToast('テキストをクリアしました');
        }
    });

    // ステータス表示の更新
    function updateStatus(text, state) {
        statusText.textContent = text;
        statusDot.className = 'status-dot';
        statusDot.classList.add(`status-${state}`);
    }

    // 文字数カウントの更新
    function updateCharacterCount() {
        const count = transcriptArea.value.length;
        characterCount.textContent = count;
    }

    // トースト通知の表示
    function showToast(message, type = 'success') {
        toast.textContent = message;
        toast.className = 'toast';
        toast.classList.add(`toast-${type}`, 'show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    // 初期状態の設定
    updateStatus('待機中', 'idle');
});