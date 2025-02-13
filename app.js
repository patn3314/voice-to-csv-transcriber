// app.js
document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const stopBtn = document.getElementById('stop-btn');
    const downloadBtn = document.getElementById('download-btn');
    const transcriptArea = document.getElementById('transcript');

    // Web Speech APIのサポート確認
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert('このブラウザは音声認識機能をサポートしていません。Google Chromeをお試しください。');
        startBtn.disabled = true;
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'ja-JP';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    let finalTranscript = '';

    startBtn.addEventListener('click', () => {
        recognition.start();
        startBtn.disabled = true;
        stopBtn.disabled = false;
        downloadBtn.disabled = true;
        transcriptArea.value = '';
        finalTranscript = '';
    });

    stopBtn.addEventListener('click', () => {
        recognition.stop();
        startBtn.disabled = false;
        stopBtn.disabled = true;
        downloadBtn.disabled = false;
    });

    recognition.onresult = (event) => {
        const speechResult = event.results[0][0].transcript;
        finalTranscript += speechResult + '\n';
        transcriptArea.value = finalTranscript;
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error detected: ' + event.error);
        alert('音声認識中にエラーが発生しました: ' + event.error);
        startBtn.disabled = false;
        stopBtn.disabled = true;
    };

    downloadBtn.addEventListener('click', () => {
        if (finalTranscript.trim() === '') {
            alert('文字起こしされたテキストがありません。');
            return;
        }

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
    });
});