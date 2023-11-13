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

// クイズの問題文と選択肢を表示
const quizSelect = function () {
  // ボタンのインデックス番号(0-4)を取得
  let btnIndex = 0;
  // ボタンの個数(ここでは５個)以下の場合
  while (btnIndex < btnLength) {
    // クイズの問題文にクイズ配列の１個目の問題文を入れる
    $quizText.textContent = quiz[quizIndex].question;
    // ボタン1のテキストにクイズ配列の１個目の質面を入れる
    $btnItem[btnIndex].textContent = quiz[quizIndex].answer[btnIndex];
    btnIndex++;
  }
};
// １問目を表示
quizSelect();

// quiz_select_boxを取得
const quizSelectBox = document.querySelector('.quiz_select_box');

// // 正解（緑色）と表示する関数
// function answerCorrect() {
//   let h2 = document.createElement('h2');
//   h2.innerText = '正解';
//   h2.classList.add('color_green');
//   quizSelectBox.appendChild(h2)
// }

// function removeAnswer(){
//   if(quizSelectBox.hasChildNodes(h2)) {
//     quizSelectBox.removeChild(quizSelectBox.secondChild);
//   }
// }

// // 不正解（赤色）と表示する関数
// function answerIncorrect() {
//   let h2 = document.createElement('h2');
//   h2.innerText = `不正解!
//   正解は${quiz[quizIndex].correct}`;
//   h2.classList.add('color_red');
//   quizSelectBox.appendChild(h2);
// }

// クリックの処理
const clickEvent = function (e) {
  // クイズ配列の答えと選択したボタンのテキストを比較
  if (quiz[quizIndex].correct === e.target.textContent) {
    alert('正解');
    score++;
  } else {
    alert(`不正解!
   正解は${quiz[quizIndex].correct}`);
  }

  // removeAnswer();
  //   １問目が終われば月にいく
  quizIndex += 1;
  // 今のクイズがクイズ配列の長さ(ここでは５個)より小さいとき
  if (quizIndex < quizLength) {
    // 上の関数を実行
    quizSelect();
  } else {
    alert(`終了! あなたの正解数は${score} / ${quizIndex} です`);
    localStorage.clear();
    window.location.href = './index.html';
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
