const userFoodCount = localStorage.getItem('ふっけい焼き鳥');
const userDrinkCount = localStorage.getItem('ふっけいお酒');
const finalUserPay = localStorage.getItem('ふっけい最終支払い');
const finalComputerPay = localStorage.getItem('ピーポ最終支払い');
const sumPay = localStorage.getItem('２人の合計支払い額');
const computerFoodCount = localStorage.getItem('ピーポ焼き鳥');
const computerDrinkCount = localStorage.getItem('ピーポお酒');
const finalUserWin = localStorage.getItem('ふっけい勝ち数');
const finalComputerWin = localStorage.getItem('ピーポの勝ち数');

const quiz = [
  {
    question: 'ふっけいくんは何本の焼き鳥を食べた？',
    answer: [`${userFoodCount}本`, '5本', '7本', '3本', '6本'],
    correct: `${userFoodCount}本`,
  },
  {
    question: 'ふっけいくんは何杯のお酒を飲んだ？',
    answer: ['3杯', '5杯', '7杯', `${userDrinkCount}杯`, '4杯'],
    correct: `${userDrinkCount}杯`,
  },
  {
    question: 'ピーポくんは何本の焼き鳥を食べた？',
    answer: [`${computerFoodCount}本`, '5本', '7本', '3本', '6本'],
    correct: `${computerFoodCount}本`,
  },
  {
    question: 'ピーポくんは何杯のお酒を飲んだ？',
    answer: ['3杯', '5杯', '7杯', `${computerDrinkCount}杯`, '4杯'],
    correct: `${computerDrinkCount}杯`,
  },
  {
    question: 'ふっけいくんの支払額はいくら？',
    answer: ['3200円', '1400円', `${finalUserPay}円`, '800円', '5500円'],
    correct: `${finalUserPay}円`,
  },
  {
    question: 'ピーポくんの支払額はいくら？',
    answer: ['2350円', '1450円', '4550円', `${finalComputerPay}円`, '3990円'],
    correct: `${finalComputerPay}円`,
  },
  {
    question: 'ふっけいくんは何回勝った？',
    answer: ['8回', `${finalUserWin}回`, '3回', '9回', '4回'],
    correct: `${finalUserWin}回`,
  },
  {
    question: 'ピーポくんは何回勝った？',
    answer: ['7回', '2回', '6回', '8回', `${finalComputerWin}回`],
    correct: `${finalComputerWin}回`,
  },
  {
    question: '２人の合計支払額はいくら？',
    answer: ['5500円', '4300円', '7200円', '6500円', `${sumPay}円`],
    correct: `${sumPay}円`,
  },
];

// クイズの問題文を取得
const $quizText = document.querySelector('.quiz_text');
// クイズの数を取得
const quizLength = quiz.length;
// クイズのインデックス番号を初期化
let quizIndex = 0;
// スコアを初期化
let score = 0;

// ボタンを取得
const $btnItem = document.querySelectorAll('.quiz_item');
// ボタンの数(ここでは５個)を取得
const btnLength = $btnItem.length;

const quizRandomInd = Math.floor(Math.random() * quizLength);

// クイズの問題文と選択肢を表示
const quizSelect = function () {
  // ボタンのインデックス番号(0-4)を取得
  let btnIndex = 0;
  // ボタンの個数(ここでは５個)以下の場合
  while (btnIndex < btnLength) {
    // クイズの問題文にクイズ配列の１個目の問題文を表示
    $quizText.textContent = quiz[quizIndex].question;
    // ボタン1のテキストにクイズ配列の１個目の質面を表示
    $btnItem[btnIndex].textContent = quiz[quizIndex].answer[btnIndex];
    btnIndex++;
  }
};
// １問目を表示
quizSelect();

// クリックの処理
const clickEvent = function (e) {
  // クイズ配列の答えと選択したボタンのテキストを比較
  if (quiz[quizIndex].correct === e.target.textContent) {
    alert('正解!');
    score++;
  } else {
    alert(`不正解!
正解は${quiz[quizIndex].correct}`);
  }
  //   １問目が終われば月にいく
  quizIndex += 1;
  // 今のクイズがクイズ配列の長さ(ここでは５個)より小さいとき
  if (quizIndex < quizLength) {
    // 上の関数を実行
    quizSelect();
  } else {
    alert(`終了! あなたの正解数は${score} / ${quizIndex} です`);
  }
};

// 正解と選択したテキストが合っているか
let eventIndex = 0;
while (eventIndex < btnLength) {
  $btnItem[eventIndex].addEventListener('click', function (e) {
    // 上の処理を実行
    clickEvent(e);
  });
  //   次へ
  eventIndex++;
}

// const $quizContainer = document.querySelector('.quiz_container')

// const textField = document.createComment('div');
// textField.classlist.add('type-text');
// $quizContainer.appendChild(textField);

// const typeArea = document.createComment('textarea');
// typeArea.classlist.add('type-area');
// $quizContainer.appendChild(typeArea);

const typeDisplay = document.querySelector('.type-text');
const typeInput = document.querySelector('.type-area');

// inputにテキスト入力、合っているかどうかの判定
typeInput.addEventListener('input', () => {
  const sentenceArray = typeDisplay.querySelectorAll('span');
  const arrayValue = sentenceArray.value.split('');

  sentenceArray.forEach((characterSpan, index) => {
    if ((arrayValue[index] == null)) {
      characterSpan.classList.remove('correct');
      characterSpan.classList.remove('incorrect');
    } else if (characterSpan.innerText == arrayValue[index]) {
      characterSpan.classList.add('correct');
      characterSpan.classList.remove('incorrect');
    } else {
      characterSpan.classList.add('incorrect');
      characterSpan.classList.remove('correct');
    }
  });
});

const RANDOM_SENTENCE_URL_API = 'https://api.quotable.io/random';
// 非同期でランダムな文章を取得する
function GetRandomSentence() {
  return fetch(RANDOM_SENTENCE_URL_API)
    .then((response) => response.json())
    .then((data) => data.content);
}

// ランダムな文章を取得して、表示する
async function RenderNextSentence() {
  const sentence = await GetRandomSentence();
  typeDisplay.innerText = '';
  // 文章を１文字ずつ分解して、spanタグを表示する
  let oneText = sentence.split('');

  oneText.forEach((character) => {
    const characterSpan = document.createElement('span');
    characterSpan.innerText = character;
    typeDisplay.appendChild(characterSpan);
    // characterSpan.classList.add("correct");
  });

  tyepInput.innerText = '';
}
