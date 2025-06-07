const wordDisplay = document.getElementById("wordDisplay");
const textInput = document.getElementById("textInput");
const startButton = document.getElementById("startButton");
const feedbackDisplay = document.getElementById("feedback");
const scoreDisplay = document.getElementById("scoreDisplay");

const words = [
  "apple",
  "banana",
  "orange",
  "grape",
  "pineapple",
  "keyboard",
  "monitor",
  "mouse",
  "computer",
  "javascript",
  "programming",
  "webdevelopment",
  "html",
  "css",
  "application",
];

let currentWordIndex = 0;
let score = 0;
let gameStarted = false;

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

function shuffleWords() {
  for (let i = words.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [words[i], words[j]] = [words[j], words[i]]; // 配列要素を入れ替える
  }
}

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

function checkInput() {
  if (!gameStarted) return;

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
  wordDisplay.innerHTML = coloredWord; // HTMLとして表示

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

startButton.addEventListener("click", startGame);
textInput.addEventListener("input", checkInput); // inputイベントでリアルタイムにチェック

// ページロード時の初期設定
textInput.disabled = true; // 最初は入力欄を無効化
wordDisplay.textContent = "さぁ『ゲーム開始』！";
