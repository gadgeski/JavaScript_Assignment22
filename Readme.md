目的：今後 TypeScript や React にスケールする為の準備段階

使用技術： JavaScript/CSS/HTML

<h1>HTML ファイル (index.html) の解説</h1>

この HTML ファイルは、ウェブページの基本的な構造を定義しています。
タイピングゲームの見た目の要素を配置する役割を担っています。

<h3>!DOCTYPE html</h3> これは、このドキュメントがHTML5で書かれていることをブラウザに伝えるおまじないのようなものです。

<h3>html lang="ja"</h3> HTMLドキュメントの始まりを示します。lang="ja"は、このページの言語が日本語であることを示しています。

<h3>head</h3> この部分には、ウェブページには表示されないが、ブラウザにとって重要な情報が書かれています。

<h3>meta charset="UTF-8"</h3> 文字コードをUTF-8に設定しています。これにより、日本語などの様々な文字が正しく表示されます。

<h3>meta name="viewport" content="width=device-width, initial-scale=1.0"</h3> このページが様々なデバイス（スマートフォンやタブレットなど）で適切に表示されるように、表示領域の設定をしています。

<h3><title></h3> ブラウザのタブやウィンドウに表示されるページのタイトルです。

<h3>link rel="stylesheet" href="style.css"</h3> style.cssという名前のCSSファイルを読み込んでいます。このファイルに書かれたルールによって、見た目が装飾されます。

<h3>body</h3> この部分には、実際にウェブページに表示されるすべての内容が含まれます。
       
<h3>div class="box"</h3> タイトルを表示するための箱（div）です。CSSで特別なアニメーションが設定されています。
       
<h3>br</h3> 改行タグです。
       
<h3>div class="game-container"</h3> ゲームの主要な要素をまとめるための大きな箱です。この中にゲームに必要な部品が入っています。
         
<h3>div id="wordDisplay" class="word-display"</h3> 表示される単語が表示される場所です。JavaScriptからこの要素にアクセスするためにid="wordDisplay"が設定されています。
         
<h3>input type="text" id="textInput" class="text-input" placeholder="ここに単語を入力..." autofocus</h3> ユーザーが単語を入力するためのテキスト入力欄です。
         
<h3>type="text"</h3> テキスト入力欄であることを示します。
         
<h3>id="textInput"</h3> JavaScriptからアクセスするための識別子です。
         
<h3>placeholder="ここに単語を入力..."</h3> 入力欄が空のときに表示されるヒントのテキストです。
         
<h3>autofocus</h3> ページが読み込まれたときに、自動的にこの入力欄にカーソルが置かれるようにします。
         
<h3>button id="startButton" class="start-button"></h3> ゲームを開始するためのボタンです。

<h3>div id="feedback" class="feedback"</h3> 入力の正誤などのフィードバックメッセージが表示される場所です。

<h3>div id="scoreDisplay" class="score-display"</h3> 現在のスコアが表示される場所です。

<h3>script src="script.js"</h3> script.jsという名前のJavaScriptファイルを読み込んでいます。このファイルに書かれたコードによって、ゲームの動き（ロジック）が制御されます。

<h1>CSSファイル (style.css) の解説</h1>

この CSS ファイルは、HTML で定義された要素の見た目を装飾（スタイル付け）しています。

色、サイズ、配置などを設定することで、タイピングゲームのデザインを作成しています。

- body:

  - font-family: テキストのフォントを設定しています。タイピングゲームに適した等幅フォントが使われています。

  - display: flex;, flex-direction: column;, align-items: center;: ページ全体のコンテンツを縦方向に中央揃えに配置するために Flexbox を使用しています。

  - min-height: 100vh;: ページの高さがブラウザの表示領域の高さと同じになるように設定しています。

  - margin: 0;, padding-top: 50px;: 余白を調整しています。

  - background-color, color: 背景色と文字色を設定しています。

- .game-container: ゲーム全体のコンテナのスタイルです。

  - background-color, padding, border-radius, box-shadow: 背景色、余白、角の丸み、影を設定して、ゲームエリアが目立つようにしています。

  - text-align: center;: このコンテナ内のテキストを中央揃えにします。

  - width: 100%;, max-width: 600px;: 幅を画面いっぱいに広げつつ、最大幅を 600px に制限しています。

- .word-display: 表示される単語のスタイルです。

  - font-size, font-weight: フォントサイズと太さを設定して、単語が大きく目立つようにしています。

  - margin-bottom, padding, background-color, border-radius: 下余白、内側の余白、背景色、角の丸みを設定しています。

  - min-height: 60px;: 単語が表示されていないときでも、表示エリアの高さが確保されるようにしています。

  - display: flex;, justify-content: center;, align-items: center;: 単語を垂直方向、水平方向ともに中央に配置するために Flexbox を使用しています。

- .text-input: ユーザーが入力するテキストボックスのスタイルです。

  - width, padding, font-size: 幅、内側の余白、フォントサイズを設定しています。

  - border, border-radius: 枠線と角の丸みを設定しています。

  - background-color, color: 背景色と文字色を設定しています。

  - outline: none;: フォーカスしたときに表示されるブラウザデフォルトの枠線を消しています。

  - transition: border-color 0.3s ease;: 枠線の色が変化するときに、滑らかなアニメーションになるように設定しています。

  - :focus: テキストボックスにフォーカスが当たったときの枠線の色を設定しています。

- .start-button: ゲーム開始ボタンのスタイルです。

  - padding, font-size, cursor: 内側の余白、フォントサイズ、カーソルをポインターにする設定です。

  - background-color, color, border, border-radius: 背景色、文字色、枠線なし、角の丸みを設定しています。

  - transition: ホバー時の背景色の変化を滑らかにします。

  - :hover: マウスカーソルがボタンの上に乗ったときの背景色を設定しています。

- .feedback: フィードバックメッセージのスタイルです。

  - font-size, margin-bottom: フォントサイズと下余白を設定しています。

  - min-height: 25px;: メッセージがないときでも高さが確保されるようにしています。

  - .feedback.correct: 正解時の文字色を設定しています。

  - .feedback.wrong: 間違い時の文字色を設定しています。

- .score-display: スコア表示のスタイルです。

  - font-size, font-weight, color: フォントサイズ、太さ、色を設定して、スコアが目立つようにしています。

- .correct-char: 単語表示で、正しく入力された文字の色です。

- .wrong-char: 単語表示で、間違って入力された文字の色と下線です。

- .box: 「簡易タイピングゲーム」というタイトルが表示される箱のスタイルです。

  - width, height, margin: 幅、高さ、外側の余白を設定しています。

  - display: flex;, align-items: center;, justify-content: center;: テキストを中央に配置するために Flexbox を使用しています。

  - color, font-size, font-weight: 文字色、フォントサイズ、太さを設定しています。

  - position: relative;: 子要素の::before と::after の基準位置を設定しています。

  - transition: ホバー時の変化を滑らかにします。

  - ::before, ::after: これらは擬似要素と呼ばれ、box 要素の前後に追加される仮想的な要素です。このコードでは、box の四隅に装飾的なボーダーを作成し、ホバー時にアニメーションする効果を与えています。

    - content: "";: 擬似要素に内容がないことを示します。

    - width, height, border-top, border-left, border-bottom, border-right: ボーダーの幅、高さ、線のスタイルを設定しています。

    - position: absolute;: 親要素（.box）を基準に配置します。

    - top, left, bottom, right: 配置位置を設定しています。

    - transition, transition-delay: アニメーションの速度と遅延を設定しています。

  - .box:hover:before, .box:hover::after: box 要素にホバーしたときに、擬似要素の幅と高さ、ボーダーの色を変更しています。

  - .box:hover: box 要素にホバーしたときに、背景色を変更し、backdrop-filter: blur(15px);で背景をぼかす効果（すりガラスのような効果）を追加しています。

<h1>JavaScriptファイル (script.js) の解説</h1>

この JavaScript ファイルは、タイピングゲームの実際の動作（ロジック）を制御しています。

HTML 要素を操作し、ユーザーの入力に応じてゲームの状態を変化させます。

1. 要素の取得と初期設定

   const wordDisplay = document.getElementById("wordDisplay");
   const textInput = document.getElementById("textInput");
   const startButton = document.getElementById("startButton");
   const feedbackDisplay = document.getElementById("feedback");
   const scoreDisplay = document.getElementById("scoreDisplay");

   - document.getElementById(): HTML ファイルから指定した id を持つ要素（例: id="wordDisplay"）を取得し、JavaScript で操作できるように変数に格納しています。
     <!-- end list -->

     const words = [
     // ... 単語のリスト ...
     ];

   - words: タイピングゲームで使用する単語のリスト（配列）です。
     <!-- end list -->
     let currentWordIndex = 0;
     let score = 0;
     let gameStarted = false;

- currentWordIndex: 現在表示されている単語が、words 配列の何番目の単語であるかを記録する変数です。

- score: プレイヤーのスコアを記録する変数です。

- gameStarted: ゲームが開始されているかどうかを示す真偽値（true または false）の変数です。

2. ゲーム開始処理 (startGame 関数)

   function startGame() {
   gameStarted = true;
   startButton.disabled = true; // ゲーム開始後はボタンを無効化
   textInput.disabled = false; // 入力欄を有効化
   textInput.value = ""; // 入力欄をクリア
   textInput.focus(); // 入力欄にフォーカス
   score = 0;
   scoreDisplay.textContent = `スコア: ${score}`;
   currentWordIndex = 0;
   shuffleWords(); // 単語リストをシャッフル
   displayWord();
   feedbackDisplay.textContent = ""; // フィードバックをクリア
   }

- ゲームが開始されたことを示す gameStarted を true に設定します。

- スタートボタンを無効化し、入力欄を有効化します。

- 入力欄を空にし、カーソルを合わせます。

- スコアを 0 にリセットし、表示も更新します。

- 現在の単語のインデックスを 0 にリセットします。

- shuffleWords()関数を呼び出して、毎回異なる順番で単語が表示されるように単語リストをシャッフルします。

- displayWord()関数を呼び出して、最初の単語を表示します。

- フィードバックメッセージをクリアします。

3. 単語シャッフル処理 (shuffleWords 関数)

   function shuffleWords() {
   for (let i = words.length - 1; i > 0; i--) {
   const j = Math.floor(Math.random() \* (i + 1));
   [words[i], words[j]] = [words[j], words[i]]; // 配列要素を入れ替える
   }
   }

- フィッシャー-イェーツシャッフルというアルゴリズムを使って、words 配列の単語の並び順をランダムに入れ替えています。

- Math.random()で 0 以上 1 未満の乱数を生成し、Math.floor()で小数点以下を切り捨てることで、ランダムなインデックスを生成しています。

- [words[i], words[j]] = [words[j], words[i]];という書き方は、JavaScript の分割代入という機能を使って、2 つの変数の値を簡単に入れ替える方法です。

4. 単語表示処理 (displayWord 関数)

   function displayWord() {
   if (currentWordIndex < words.length) {
   wordDisplay.textContent = words[currentWordIndex];
   } else {
   wordDisplay.textContent = "ゲーム終了！";
   feedbackDisplay.textContent = `最終スコア: ${score}`;
   textInput.disabled = true;
   startButton.disabled = false;
   gameStarted = false;
   }
   }

- currentWordIndex が words 配列の範囲内であれば、words 配列から現在の単語を取得し、wordDisplay（単語が表示される場所）に表示します。

- すべての単語をタイピングし終えた場合（currentWordIndex が words.length 以上になった場合）は、**「ゲーム終了！」**と表示し、最終スコアを表示します。

- 入力欄を無効化し、スタートボタンを有効化して、ゲームを終了状態に戻します。

5. 入力チェック処理 (checkInput 関数)

   function checkInput() {
   if (!gameStarted) return; // ゲームが開始されていなければ何もしない

   const typedText = textInput.value;
   const currentTargetWord = words[currentWordIndex];

   // 文字ごとの正誤判定（色付け）
   let coloredWord = "";
   let isCorrectPartial = true;
   for (let i = 0; i < currentTargetWord.length; i++) {
   if (i < typedText.length) {
   if (typedText[i] === currentTargetWord[i]) {
   coloredWord += `<span class="correct-char">${currentTargetWord[i]}</span>`;
   } else {
   coloredWord += `<span class="wrong-char">${currentTargetWord[i]}</span>`;
   isCorrectPartial = false; // どこかに間違いがあれば部分一致ではない
   }
   } else {
   coloredWord += currentTargetWord[i]; // まだ入力されていない文字
   }
   }
   wordDisplay.innerHTML = coloredWord; // HTML として表示

   // 完全一致した場合
   if (typedText === currentTargetWord) {
   feedbackDisplay.textContent = "正解！";
   feedbackDisplay.classList.remove("wrong");
   feedbackDisplay.classList.add("correct");
   score++;
   scoreDisplay.textContent = `スコア: ${score}`;
   currentWordIndex++;
   textInput.value = ""; // 入力欄をクリア
   setTimeout(displayWord, 500); // 少し間を置いて次の単語を表示
   } else if (currentTargetWord.startsWith(typedText) && typedText.length > 0) {
   // 部分的に正しいが、まだ完全ではない場合
   feedbackDisplay.textContent = ""; // フィードバックなし
   feedbackDisplay.classList.remove("wrong", "correct");
   } else if (typedText.length > 0) {
   // 間違いがある場合
   feedbackDisplay.textContent = "間違いです！";
   feedbackDisplay.classList.remove("correct");
   feedbackDisplay.classList.add("wrong");
   } else {
   // 入力がない場合
   feedbackDisplay.textContent = "";
   feedbackDisplay.classList.remove("wrong", "correct");
   }
   }

- この関数は、ユーザーが入力するたびに呼び出されます。

- if (!gameStarted) return; : ゲームが開始されていない場合は、これ以降の処理を行いません。

- ユーザーが入力したテキスト(typedText)と、現在表示されている単語(currentTargetWord)を取得します。

- 文字ごとの正誤判定と色付け:

  - ループを使って、currentTargetWord の各文字と typedText の各文字を比較します。

  - もし文字が一致すれば、その文字を<span class="correct-char">で囲み、CSS で緑色になります。

  - 一致しなければ、<span class="wrong-char">で囲み、CSS で赤色＋下線になります。

  - まだ入力されていない文字はそのまま表示されます。

  - 最後に wordDisplay.innerHTML = coloredWord;で、色付けされた単語を HTML として表示します。

- 完全一致した場合:

  - 入力されたテキストが現在の単語と完全に一致したら、「正解！」と表示し、フィードバックの色を緑にします。

  - スコアを 1 増やし、表示を更新します。

  - 次の単語に進むために currentWordIndex を増やします。

  - 入力欄をクリアします。

  - setTimeout(displayWord, 500);を使って、0.5 秒後に次の単語を表示します。これは、ユーザーが正解したことを確認する時間を与えるためです。

- 部分的に正しい場合:

  - 入力されたテキストが現在の単語の先頭部分と一致しているが、まだ完全ではない場合（例: 表示 apple、入力 ap）は、特にフィードバックメッセージは表示しません。

- 間違いがある場合:

  - 入力されたテキストが単語と一致せず、かつ何らかの文字が入力されている場合（例: 表示 apple、入力 apx）は、「間違いです！」と表示し、フィードバックの色を赤にします。

<h4>入力がない場合</h4>
  - 入力欄が空の場合は、フィードバックメッセージをクリアします。

<h3>6. イベントリスナー</h3>

    startButton.addEventListener("click", startGame);
    textInput.addEventListener("input", checkInput); // input イベントでリアルタイムにチェック

- startButton.addEventListener("click", startGame);: スタートボタンがクリックされたときに、startGame 関数が実行されるように設定しています。

- textInput.addEventListener("input", checkInput);: テキスト入力欄に何か文字が入力されるたび（または削除されるたび）に、checkInput 関数が実行されるように設定しています。これにより、ユーザーの入力と同時に単語の正誤判定や色付けがリアルタイムに行われます。

<h3>7. ページロード時の初期設定</h3>

    textInput.disabled = true; // 最初は入力欄を無効化
    wordDisplay.textContent = "さぁ『ゲーム開始』！";

- ページが読み込まれたとき、最初は入力欄を無効にしています。これは、ゲームを開始ボタンを押すまで入力できないようにするためです。

- wordDisplay に「さぁ『ゲーム開始』！」というメッセージを表示し、ユーザーにゲームの開始を促しています。
