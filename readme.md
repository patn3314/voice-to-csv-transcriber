# 音声文字起こしアプリ

![GitHub license](https://img.shields.io/github/license/YOUR_USERNAME/voice_to_csv_transcriber)
![GitHub issues](https://img.shields.io/github/issues/YOUR_USERNAME/voice_to_csv_transcriber)
![GitHub forks](https://img.shields.io/github/forks/YOUR_USERNAME/voice_to_csv_transcriber)
![GitHub stars](https://img.shields.io/github/stars/YOUR_USERNAME/voice_to_csv_transcriber)

## 概要

**音声文字起こしアプリ**は、ブラウザ上で動作するシンプルなウェブアプリケーションです。ユーザーがマイクを通じて話した内容をリアルタイムで文字起こしし、結果をCSVファイルとしてダウンロードできます。レスポンシブデザインを採用しており、デスクトップおよびスマートフォンなどのモバイルデバイスでも快適に利用できます。

## 主な機能

- **音声文字起こし:** ブラウザのマイクを使用して音声をリアルタイムで文字起こし。
- **CSV出力:** 文字起こしされたテキストをCSVファイルとしてダウンロード可能。
- **レスポンシブデザイン:** デスクトップ、タブレット、スマートフォンなど様々なデバイスで最適な表示。
- **セキュリティ重視:** HTTPS対応およびコンテンツセキュリティポリシー（CSP）の設定で安全な利用環境を提供。
- **直感的なユーザーインターフェイス:** 録音開始・停止、CSVダウンロードのためのわかりやすいボタン配置。

## デモ

[GitHub Pagesでのデモはこちら](https://YOUR_USERNAME.github.io/voice_to_csv_transcriber/)

## スクリーンショット

![デスクトップビュー](./screenshots/desktop_view.png)
*デスクトップでの操作画面*

![モバイルビュー](./screenshots/mobile_view.png)
*スマートフォンでの操作画面*

> **注:** スクリーンショットはプロジェクトフォルダ内の `screenshots`ディレクトリに保存しています。必要に応じて適切な画像ファイルを追加してください。

## 使用技術

- **フロントエンド:**
  - HTML5
  - CSS3
  - JavaScript (ES6+)
- **音声認識:**
  - [Web Speech API](https://developer.mozilla.org/ja/docs/Web/API/Web_Speech_API) (ブラウザ内蔵の無料API)
- **ホスティング:**
  - [GitHub Pages](https://pages.github.com/) (無料)

## インストール

このアプリケーションは静的なウェブアプリケーションであり、特別なサーバーサイドのセットアップは不要です。以下の手順でローカル環境で実行したり、GitHub Pagesを使用して公開できます。

### クローンする

```bash
git clone https://github.com/YOUR_USERNAME/voice_to_csv_transcriber.git
cd voice_to_csv_transcriber
```

### ローカル環境での実行

1. **Visual Studio Code**を開き、プロジェクトフォルダをロードします。
2. **Live Server**拡張機能をインストールしていることを確認します。
3. **index.html**を開き、右下の「Go Live」ボタンをクリックします。
4. ブラウザが自動的に開き、アプリケーションが表示されます。

> **注:** Web Speech APIはHTTPS環境または**localhost**でのみ動作します。HTTPSを設定する場合は、Live Serverの設定を調整してください。

### GitHub Pagesでの公開

1. **GitHubリポジトリ**にコードをプッシュします。
   git add .
   git commit -m "Initial commit"
   git push origin main
2. 

1. **GitHubリポジトリ**の「Settings」タブに移動します。
2. 左側のメニューから「Pages」を選択します。
3. 「Source」セクションでブランチを**main**に設定し、フォルダを**/ (root)**に指定します。
4. 「Save」をクリックします。
5. 数分後、設定ページに表示されるURLでアプリケーションにアクセスできます。

## 使い方

1. **録音開始:** 「録音開始」ボタンをクリックし、ブラウザからマイクへのアクセスを許可します。
2. **音声入力:** マイクに向かって話します。話した内容がリアルタイムでテキストエリアに表示されます。
3. **録音停止:** 「録音停止」ボタンをクリックして録音を停止します。
4. **CSVダウンロード:** 「CSVダウンロード」ボタンをクリックして、文字起こし結果をCSVファイルとしてダウンロードします。

## セキュリティ

* **HTTPS対応:** GitHub Pagesでは自動的にHTTPSが有効化されています。これにより、安全にマイクへのアクセスやデータのやり取りが可能です。
* **コンテンツセキュリティポリシー（CSP）:** **index.html**にCSPヘッダーを設定し、外部リソースの読み込みを制限。XSS攻撃などの脆弱性を低減しています。
* **クライアントサイド処理:** すべての処理がクライアント側で完結し、サーバーにデータを送信しないため、データの漏洩リスクを最小限に抑えています。

## 貢献方法

1. **リポジトリをフォーク**してください。
2. **新しいブランチ**を作成します (**git checkout -b feature/AmazingFeature**)。
3. **変更をコミット**します (**git commit -m 'Add some AmazingFeature'**)。
4. **プッシュ**します (**git push origin feature/AmazingFeature**)。
5. **プルリクエスト**を作成します。

## ライセンス

このプロジェクトはMITライセンスのもとで公開されています。詳細は[LICENSE](https://tenbin.ai/LICENSE)ファイルを参照してください。

## お問い合わせ

* **GitHub:** [@YOUR_USERNAME](https://github.com/YOUR_USERNAME)
* **Email:** [your.email@example.com](mailto:your.email@example.com)

---

<pre><div class="jsx-c50ba4f705a684ac p-ChatCodeBlock"><div class="p-ChatCodeBlock__head"><span class="p-ChatCodeBlock__copy"><button aria-label="コードをコピーする" class="jsx-ff634d50013c9979 size-small color-tertiary"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="copy" class="svg-inline--fa fa-copy " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"></path></svg></button></span></div><pre class="p-ChatCodeBlock__code"><code><span class="linenumber react-syntax-highlighter-line-number">1</span><span>
</span><span class="linenumber react-syntax-highlighter-line-number">2</span>---
<span class="linenumber react-syntax-highlighter-line-number">3</span>
<span class="linenumber react-syntax-highlighter-line-number">4</span>**注:** 上記のREADME.md内容では、以下の部分を**実際の情報**に置き換えてください。
<span class="linenumber react-syntax-highlighter-line-number">5</span>
<span class="linenumber react-syntax-highlighter-line-number">6</span>- `YOUR_USERNAME` を**あなたのGitHubユーザー名**に置き換えます。
<span class="linenumber react-syntax-highlighter-line-number">7</span>- `your.email@example.com` を**あなたの連絡先メールアドレス**に置き換えます。
<span class="linenumber react-syntax-highlighter-line-number">8</span>- `./screenshots/desktop_view.png` や `./screenshots/mobile_view.png` のパスに**実際のスクリーンショット画像**を追加し、そのパスを正しく設定します。
<span class="linenumber react-syntax-highlighter-line-number">9</span>- 必要に応じて、`LICENSE`ファイルをプロジェクトに追加してください。
<span class="linenumber react-syntax-highlighter-line-number">10</span>
<span class="linenumber react-syntax-highlighter-line-number">11</span>このREADMEファイルは、プロジェクトの概要、機能、使用技術、インストール方法、使い方、セキュリティ対策、貢献方法、ライセンス情報、問い合わせ先を包括的にカバーしています。これにより、ユーザーや開発者がプロジェクトを理解し、利用・貢献しやすくなります。
<span class="linenumber react-syntax-highlighter-line-number">12</span>
<span class="linenumber react-syntax-highlighter-line-number">13</span>もしさらに追加や修正が必要な点があれば、お知らせください。喜んでサポートいたします。```markdown
<span class="linenumber react-syntax-highlighter-line-number">14</span># 音声文字起こしアプリ
<span class="linenumber react-syntax-highlighter-line-number">15</span>
<span class="linenumber react-syntax-highlighter-line-number">16</span>![GitHub license](https://img.shields.io/github/license/YOUR_USERNAME/voice_to_csv_transcriber)
<span class="linenumber react-syntax-highlighter-line-number">17</span>![GitHub issues](https://img.shields.io/github/issues/YOUR_USERNAME/voice_to_csv_transcriber)
<span class="linenumber react-syntax-highlighter-line-number">18</span>![GitHub forks](https://img.shields.io/github/forks/YOUR_USERNAME/voice_to_csv_transcriber)
<span class="linenumber react-syntax-highlighter-line-number">19</span>![GitHub stars](https://img.shields.io/github/stars/YOUR_USERNAME/voice_to_csv_transcriber)
<span class="linenumber react-syntax-highlighter-line-number">20</span>
<span class="linenumber react-syntax-highlighter-line-number">21</span>## 概要
<span class="linenumber react-syntax-highlighter-line-number">22</span>
<span class="linenumber react-syntax-highlighter-line-number">23</span>**音声文字起こしアプリ**は、ブラウザ上で動作するシンプルなウェブアプリケーションです。ユーザーがマイクを通じて話した内容をリアルタイムで文字起こしし、結果をCSVファイルとしてダウンロードできます。レスポンシブデザインを採用しており、デスクトップおよびスマートフォンなどのモバイルデバイスでも快適に利用できます。
<span class="linenumber react-syntax-highlighter-line-number">24</span>
<span class="linenumber react-syntax-highlighter-line-number">25</span>## 主な機能
<span class="linenumber react-syntax-highlighter-line-number">26</span>
<span class="linenumber react-syntax-highlighter-line-number">27</span>- **音声文字起こし:** ブラウザのマイクを使用して音声をリアルタイムで文字起こし。
<span class="linenumber react-syntax-highlighter-line-number">28</span>- **CSV出力:** 文字起こしされたテキストをCSVファイルとしてダウンロード可能。
<span class="linenumber react-syntax-highlighter-line-number">29</span>- **レスポンシブデザイン:** デスクトップ、タブレット、スマートフォンなど様々なデバイスで最適な表示。
<span class="linenumber react-syntax-highlighter-line-number">30</span>- **セキュリティ重視:** HTTPS対応およびコンテンツセキュリティポリシー（CSP）の設定で安全な利用環境を提供。
<span class="linenumber react-syntax-highlighter-line-number">31</span>- **直感的なユーザーインターフェイス:** 録音開始・停止、CSVダウンロードのためのわかりやすいボタン配置。
<span class="linenumber react-syntax-highlighter-line-number">32</span>
<span class="linenumber react-syntax-highlighter-line-number">33</span>## デモ
<span class="linenumber react-syntax-highlighter-line-number">34</span>
<span class="linenumber react-syntax-highlighter-line-number">35</span>[GitHub Pagesでのデモはこちら](https://YOUR_USERNAME.github.io/voice_to_csv_transcriber/)
<span class="linenumber react-syntax-highlighter-line-number">36</span>
<span class="linenumber react-syntax-highlighter-line-number">37</span>## スクリーンショット
<span class="linenumber react-syntax-highlighter-line-number">38</span>
<span class="linenumber react-syntax-highlighter-line-number">39</span>![デスクトップビュー](./screenshots/desktop_view.png)
<span class="linenumber react-syntax-highlighter-line-number">40</span>*デスクトップでの操作画面*
<span class="linenumber react-syntax-highlighter-line-number">41</span>
<span class="linenumber react-syntax-highlighter-line-number">42</span>![モバイルビュー](./screenshots/mobile_view.png)
<span class="linenumber react-syntax-highlighter-line-number">43</span>*スマートフォンでの操作画面*
<span class="linenumber react-syntax-highlighter-line-number">44</span>
<span class="linenumber react-syntax-highlighter-line-number">45</span>> **注:** スクリーンショットはプロジェクトフォルダ内の`screenshots`ディレクトリに保存しています。必要に応じて適切な画像ファイルを追加してください。
<span class="linenumber react-syntax-highlighter-line-number">46</span>
<span class="linenumber react-syntax-highlighter-line-number">47</span>## 使用技術
<span class="linenumber react-syntax-highlighter-line-number">48</span>
<span class="linenumber react-syntax-highlighter-line-number">49</span>- **フロントエンド:**
<span class="linenumber react-syntax-highlighter-line-number">50</span>  - HTML5
<span class="linenumber react-syntax-highlighter-line-number">51</span>  - CSS3
<span class="linenumber react-syntax-highlighter-line-number">52</span>  - JavaScript (ES6+)
<span class="linenumber react-syntax-highlighter-line-number">53</span>- **音声認識:**
<span class="linenumber react-syntax-highlighter-line-number">54</span>  - [Web Speech API](https://developer.mozilla.org/ja/docs/Web/API/Web_Speech_API) (ブラウザ内蔵の無料API)
<span class="linenumber react-syntax-highlighter-line-number">55</span>- **ホスティング:**
<span class="linenumber react-syntax-highlighter-line-number">56</span>  - [GitHub Pages](https://pages.github.com/) (無料)
<span class="linenumber react-syntax-highlighter-line-number">57</span>
<span class="linenumber react-syntax-highlighter-line-number">58</span>## インストール
<span class="linenumber react-syntax-highlighter-line-number">59</span>
<span class="linenumber react-syntax-highlighter-line-number">60</span>このアプリケーションは静的なウェブアプリケーションであり、特別なサーバーサイドのセットアップは不要です。以下の手順でローカル環境で実行したり、GitHub Pagesを使用して公開できます。
<span class="linenumber react-syntax-highlighter-line-number">61</span>
<span class="linenumber react-syntax-highlighter-line-number">62</span>### クローンする
<span class="linenumber react-syntax-highlighter-line-number">63</span>
<span class="linenumber react-syntax-highlighter-line-number">64</span>```bash
<span class="linenumber react-syntax-highlighter-line-number">65</span>git clone https://github.com/YOUR_USERNAME/voice_to_csv_transcriber.git
<span class="linenumber react-syntax-highlighter-line-number">66</span>cd voice_to_csv_transcriber</code></pre></div></pre>

### ローカル環境での実行

1. **Visual Studio Code**を開き、プロジェクトフォルダをロードします。
2. **Live Server**拡張機能をインストールしていることを確認します。
3. **index.html**を開き、右下の「Go Live」ボタンをクリックします。
4. ブラウザが自動的に開き、アプリケーションが表示されます。

> **注:** Web Speech APIはHTTPS環境または**localhost**でのみ動作します。HTTPSを設定する場合は、Live Serverの設定を調整してください。

### GitHub Pagesでの公開

1. **GitHubリポジトリ**にコードをプッシュします。
   <pre><div class="jsx-c50ba4f705a684ac p-ChatCodeBlock"><div class="p-ChatCodeBlock__head"><span class="p-ChatCodeBlock__lang">bash</span><span class="p-ChatCodeBlock__copy"><button aria-label="コードをコピーする" class="jsx-ff634d50013c9979 size-small color-tertiary"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="copy" class="svg-inline--fa fa-copy " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"></path></svg></button></span></div><pre class="p-ChatCodeBlock__code"><code class="language-bash"><span class="linenumber react-syntax-highlighter-line-number">1</span><span class="token token">git</span><span></span><span class="token token">add</span><span></span><span class="token token">.</span><span>
   </span><span class="linenumber react-syntax-highlighter-line-number">2</span><span></span><span class="token token">git</span><span> commit -m </span><span class="token token">"Initial commit"</span><span>
   </span><span class="linenumber react-syntax-highlighter-line-number">3</span><span></span><span class="token token">git</span><span> push origin main</span></code></pre></div></pre>
2. **GitHubリポジトリ**の「Settings」タブに移動します。
3. 左側のメニューから「Pages」を選択します。
4. 「Source」セクションでブランチを**main**に設定し、フォルダを**/ (root)**に指定します。
5. 「Save」をクリックします。
6. 数分後、設定ページに表示されるURLでアプリケーションにアクセスできます。

## 使い方

1. **録音開始:** 「録音開始」ボタンをクリックし、ブラウザからマイクへのアクセスを許可します。
2. **音声入力:** マイクに向かって話します。話した内容がリアルタイムでテキストエリアに表示されます。
3. **録音停止:** 「録音停止」ボタンをクリックして録音を停止します。
4. **CSVダウンロード:** 「CSVダウンロード」ボタンをクリックして、文字起こし結果をCSVファイルとしてダウンロードします。

## セキュリティ

* **HTTPS対応:** GitHub Pagesでは自動的にHTTPSが有効化されています。これにより、安全にマイクへのアクセスやデータのやり取りが可能です。
* **コンテンツセキュリティポリシー（CSP）:** **index.html**にCSPヘッダーを設定し、外部リソースの読み込みを制限。XSS攻撃などの脆弱性を低減しています。
* **クライアントサイド処理:** すべての処理がクライアント側で完結し、サーバーにデータを送信しないため、データの漏洩リスクを最小限に抑えています。

## 貢献方法

1. **リポジトリをフォーク**してください。
2. **新しいブランチ**を作成します (**git checkout -b feature/AmazingFeature**)。
3. **変更をコミット**します (**git commit -m 'Add some AmazingFeature'**)。
4. **プッシュ**します (**git push origin feature/AmazingFeature**)。
5. **プルリクエスト**を作成します。

## ライセンス

このプロジェクトはMITライセンスのもとで公開されています。詳細は[LICENSE](https://tenbin.ai/LICENSE)ファイルを参照してください。

## お問い合わせ

* **GitHub:** [@YOUR_USERNAME](https://github.com/YOUR_USERNAME)
* **Email:** [your.email@example.com](mailto:your.email@example.com)
