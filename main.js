// トグルボタンの操作
$('.toggle_btn_1').on('click', function () {
  $('.toggle_box_1').slideToggle();
});

$('.toggle_btn_2').on('click', function () {
  $('.toggle_box_2').slideToggle();
});

// データの配列を作成
// 焼き鳥の名前配列
const foodName = ['豚バラ', 'ぼんじり', '鶏皮', 'サガリ', 'つくね'];
// 焼き鳥の価格配列
const foodPrice = [200, 220, 150, 400, 300];
// お酒の名前配列
const drinkName = [
  'ビール',
  '赤ワイン',
  '白ワイン',
  'ハイボール',
  'レモンサワー',
];
// お酒の価格配列
const drinkPrice = [500, 650, 650, 450, 400];

// じゃんけんの手の配列
const hands = ['gu', 'choki', 'pa'];

// じゃんけんの回数
let count = 0;

let userFoodCount = 0;
let userDrinkCount = 0;
let computerFoodCount = 0;
let computerDrinkCount = 0;

// ユーザーの勝ち数
let userWin = 0;
// コンピューターの勝ち数
let computerWin = 0;
// ユーザーの支払い額
let userPay = 0;
const $calcUser = function(food, drink) {
      userPay += food;
      userPay += drink;
      return userPay;
}
// コンピューターの支払い額
let computerPay = 0;
const $calcComputer = function(food, drink) {
      computerPay += food;
      computerPay += drink;
      return computerPay;
}
// ユーザーの獲得ポイント
let userPoint = 0;
const $calcUserPoint = function() {
      userPoint += 50;
      return userPoint;
}
// コンピューターの獲得ポイント
let computerPoint = 0;
const $calcComputerPoint = function() {
      computerPoint += 50;
      return computerPoint;
}
// ユーザーの最終支払額を計算
let finalUserPay = 0;
const $calcUserPay = function(user, point) {
      finalUserPay = user - point;
      return finalUserPay;
}

// コンピューターの最終支払額を計算
let finalComputerPay = 0;
const $calcComputerPay = function(computer, point) {
      finalComputerPay = computer - point;
      return finalComputerPay;
}

// じゃんけんボタンクリックの処理
$('#gu, #choki, #pa').on('click', function () {
  const playerHand = $(this).attr('id');
  // ランダムの数を取得
  const i = Math.floor(Math.random() * hands.length);
  // コンピューターの手を決定
  const computerHand = hands[i];
  // ２０回未満のとき
  if (count < 5) {
    // 勝敗の処理
    if (playerHand === computerHand) {
      // 新しいPタグを作成
      let newLine = $('<p>');
      // 上記Pタグに入れるテキストを作成
      newLine.html('あいこ');
      // $('.wrapper').append(newLine);
    } else if (playerHand === 'gu' && computerHand === 'choki') {
      // ランダムな数を確定
      const randomIndex = Math.floor(Math.random() * foodName.length);
      // ランダムな焼き鳥の名前を取得
      const yakitori_1 = foodName[randomIndex];
      // ランダムな焼き鳥の価格を取得
      const yakitori_price_1 = foodPrice[randomIndex];
      // 新しいpタグを作成
      let newP = $('<p>');
      // 上記Pタグに入れる文字を作成
      newP.html(`${yakitori_1} (${yakitori_price_1}円) x 1`);
      // ユーザートグルボックスに上記Pタグを追加
      $('.toggle_box_1').append(newP);
      userFoodCount ++;

      // 回数を１回足す
      count += 1;
      // ユーザーの勝ち数を１足す
      userWin += 1;
      // ゆーざーの支払い額に上記焼き鳥の価格を足す
      $calcUser(yakitori_price_1, 0);
      let newLine = $('<p>');
      newLine.html(
        `第${count}回、ふっけいくん: 👊、 ピーポくん: 🤘、 ふっけいくんの勝ち`
      );
      // 下記クラスの要素に追加
      $('.wrapper').append(newLine);
      console.log;
    } else if (playerHand === 'pa' && computerHand === 'gu') {
      count += 1;
      userWin += 1;
      $calcUserPoint();
      let newLine = $('<p>');
      newLine.html(
        `第${count}回、ふっけいくん: ✋、 ピーポくん: 👊、 ふっけいくんの勝ち`
      );
      $('.wrapper').append(newLine);
    } else if (playerHand === 'choki' && computerHand === 'pa') {
      const randomIndex = Math.floor(Math.random() * drinkName.length);
      const drink_name_1 = drinkName[randomIndex];
      const drink_price_1 = drinkPrice[randomIndex];
      let newDinkP = $('<p>');
      newDinkP.html(`${drink_name_1}(${drink_price_1}円) x 1`);
      $('.toggle_box_1').append(newDinkP);
      userDrinkCount;
      count++;
      userWin++;
      $calcUser(0, drink_price_1)
      let newLine = $('<p>');
      newLine.html(
        `第${count}回、ふっけいくん: 🤘、 ピーポくん: ✋、 ふっけいくんの勝ち`
      );
      console.log(newLine);
      $('.wrapper').append(newLine);
    } else if (playerHand === 'choki' && computerHand === 'gu') {
      const randomIndex = Math.floor(Math.random() * foodName.length);
      const yakitori_2 = foodName[randomIndex];
      const yakitori_price_2 = foodPrice[randomIndex];
      let newP = $('<p>');
      newP.html(`${yakitori_2}(${yakitori_price_2}円) x 1`);
      $('.toggle_box_2').append(newP);
      computerFoodCount++;
      count += 1;
      computerWin += 1;
      $calcComputer(yakitori_price_2, 0);
      let newLine = $('<p>');
      newLine.html(
        `第${count}回、ふっけいくん: 🤘、 ピーポくん: 👊、 コンピューターの勝ち`
      );
      $('.wrapper').append(newLine);
    } else if (playerHand === 'pa' && computerHand === 'choki') {
      const randomIndex = Math.floor(Math.random() * drinkName.length);
      const drink_name_2 = drinkName[randomIndex];
      const drink_price_2 = drinkPrice[randomIndex];
      let newDinkP = $('<p>');
      newDinkP.html(`${drink_name_2}(${drink_price_2}円) x 1`);
      $('.toggle_box_2').append(newDinkP);
      computerDrinkCount++;
      count++;
      computerWin++;
      $calcComputer(0, drink_price_2);
      let newLine = $('<p>');
      newLine.html(
        `第${count}回、ふっけいくん: ✋、 ピーポくん: 🤘、 ピーポくんの勝ち`
      );
      $('.wrapper').append(newLine);
    } else if (playerHand === 'gu' && computerHand === 'pa') {
      count += 1;
      computerWin += 1;
      $calcComputerPoint();
      let newLine = $('<p>');
      newLine.html(
        `第${count}回、ふっけいくん: 👊、 ピーポくん: ✋、 ピーポくんの勝ち`
      );
      $('.wrapper').append(newLine);
    }
  } else {
    // 上の説明文を削除
    $('.hands').empty();
    $('.description').empty();

    // 新しい文を表示
    let newTitle = $('<h1>');
    newTitle.html('このページをできるだけ覚えてください');
    $('.hands').append(newTitle);

    // カウントダウン
    let countDown = $('<span>');
    countDown.addClass('countDownTime');
    $('.description').append(countDown);
    // スタート開始時を空定義
    let startTime;
    // １５秒を定義
    let originTime = 15;
    // クラスを取得の上、表示
    const timer = document.querySelector('.countDownTime');
    function startTimer() {
      timer.innerText = originTime;
      // スタート開始時に今の時間を定義
      startTime = new Date();
      setInterval(function () {
        timer.innerText = originTime - getTimerTime();
        // ０秒になったらtimeUP();を実行
        if (timer.innerHTML <= 0) timeUp();
      }, 1000);
    }
    // 今の時間 - １秒前の時間を引く
    function getTimerTime() {
      return Math.floor((new Date() - startTime) / 1000);
    }
    // 次のページに遷移
    function timeUp() {
      window.location.href = './quiz.html';
    }
    // 関数実行
    startTimer();
    // countDown.html(10);

    //   下のセクションの中身を削除
    $('.wrapper').empty();
    //   FINISHEDのPタグ要素を作成、挿入
    let newLine = $('<h3>');
    newLine.html('FINISHED!!');
    $('.wrapper').append(newLine);



    //   最終的にふっけいくんが勝った数を定義
    const finalUserWin = userWin;
    let userScoreBord = $('<h3>');
    userScoreBord.addClass('left');
    userScoreBord.html(`ふっけいくん: ${finalUserWin}回の勝ち`);
    $('.wrapper').append(userScoreBord);
    console.log(finalUserWin);

    //   最終的にピーポくんが勝った数を定義
    const finalComputerWin = computerWin;
    let computerScoreBord = $('<h3>');
    computerScoreBord.addClass('right');
    computerScoreBord.html(`ピーポくん: ${finalComputerWin}回の勝ち`);
    $('.wrapper').append(computerScoreBord);

    //   ふっけいくんの注文額
    let userPayBord = $('<h3>');
    userPayBord.addClass('left');
    userPayBord.html(`ふっけいくん: ${userPay}円分の飲食`);
    $('.wrapper').append(userPayBord);

    //   ピーポくんの注文額
    let computerPayBord = $('<h3>');
    computerPayBord.addClass('right');
    computerPayBord.html(`ピーポくん: ${computerPay}円分の飲食`);
    $('.wrapper').append(computerPayBord);

    //   ふっけいくんの合計ポイント
    let userPointBord = $('<h3>');
    userPointBord.addClass('left');
    userPointBord.html(`ふっけいくん: ${userPoint}円分のポイント獲得`);
    $('.wrapper').append(userPointBord);

    //   ピーポくんの合計ポイント
    let computerPointBord = $('<h3>');
    computerPointBord.addClass('right');
    computerPointBord.html(`ピーポくん: ${computerPoint}円分のポイント獲得`);
    $('.wrapper').append(computerPointBord);

    //   ふっけいくんの支払額を定義
    $calcUserPay(userPay, userPoint);


    //   ピーポくんの支払額を定義
    $calcComputerPay(computerPay, computerPoint);

    //   ふっけいくんの支払額を挿入
    let finalUserPayBord = $('<h3>');
    finalUserPayBord.addClass('left');
    finalUserPayBord.html(`ふっけいくん: ${finalUserPay}円の支払い額`);
    $('.wrapper').append(finalUserPayBord);

    //   ピーポくんの支払額を
    let finalComputerPayBord = $('<h3>');
    finalComputerPayBord.addClass('right');
    finalComputerPayBord.html(`ピーポくん: ${finalComputerPay}円の支払い額`);
    $('.wrapper').append(finalComputerPayBord);
    localStorage.setItem("ふっけい焼き鳥", userFoodCount);
    localStorage.setItem("ふっけいお酒", userDrinkCount);
    localStorage.setItem("ふっけい最終支払い", finalUserPay);
    localStorage.setItem("ピーポ焼き鳥", computerFoodCount);
    localStorage.setItem("ピーポお酒", computerDrinkCount);
    localStorage.setItem("ピーポ最終支払い", finalComputerPay);
    localStorage.setItem("ふっけい勝ち数", finalUserWin);
    localStorage.setItem("ピーポの勝ち数", finalComputerWin);


    // 双方の合計金額を足す
    const sumPay = finalUserPay + finalComputerPay;
    localStorage.setItem("２人の合計支払い額", sumPay);

    // ユーザーが勝つとき
    if (finalUserWin > finalComputerWin) {
      $('.user_section').css('background-color', 'green');
      $('.computer_section').css('background-color', 'gray');
      $('.computer_stamp').css('display', 'block').html(`${sumPay}円の奢り`);
      // コンピューターが勝つとき
    } else if (finalUserWin < finalComputerWin) {
      $('.computer_section').css('background-color', 'green');
      $('.user_section').css('background-color', 'gray');
      $('.user_stamp').css('display', 'block').html(`${sumPay}円の奢り`);
    } else {
      $('.computer_section').css('background-color', 'gray');
      $('.user_section').css('background-color', 'gray');
    }

  }


});


//     クイズページ

