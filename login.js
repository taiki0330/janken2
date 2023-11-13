const loginContainer = document.querySelector('.login_container');
const titelH1 = document.querySelector('h1');
const formName = document.querySelector('.form_name');
const formPass = document.querySelector('.form_pass');
const loginName = '太郎';
const loginPass = 'taro';
const inputName = document.querySelector('#id');
const inputPass = document.querySelector('#pass');
const enterBtn = document.querySelector('.enter');
const signupBtn = document.querySelector('.sign_up');
const firstSignup = document.querySelector('.first_sign');

// ７秒後に次のページに遷移
let startTIme;
let time = 7;
function startTimer() {
  startTIme = new Date();
  setInterval(function() {
    const currentTime = time - getTimerTime();
    if(currentTime <= 0) timeUp();
  }, 1000);
}
function getTimerTime() {
  return Math.floor((new Date() - startTIme) / 1000);
}
function timeUp() {
  window.location.href = './welcom.html';
}

// loadingの要素を生成(login_conainer>div>span*3+h2)
function makingLoader() {
  const div = document.createElement('div');
  div.classList.add('loader')
  const fragment = document.createDocumentFragment();
  for (let span = 0; span < 3; span++){
    const span = document.createElement('span');
    fragment.appendChild(span);
  }
  div.appendChild(fragment);
  const h2 = document.createElement('h2');
  h2.innerText = "Now Loading..."
  div.appendChild(h2);
  loginContainer.appendChild(div);
  // 上の関数をここで発火
  startTimer();
}

// ログイン成功時に発火する関数
function success(){
  titelH1.innerText = "Success!!";
  titelH1.style.color ="rgb(29, 182, 21)";
  formName.remove();
  formPass.remove();
  enterBtn.remove();
  signupBtn.remove();
  firstSignup.remove();
  // 上の関数をここで発火
  makingLoader();
}

// IDが違う時に発火する関数
function confirmId(){
  const idP = document.createElement("p");
  idP.innerText = "IDが違います";
  idP.classList.add("color_red");
  formName.appendChild(idP);
}

// パスワードが違う時に発火する関数
function confirmPass(){
  const idPass = document.createElement("p");
  idPass.innerText = "パスワードが違います";
  idPass.classList.add("color_red");
  formPass.appendChild(idPass);
}


// 登録されたデータを取得
let getName = "";
let getPass = "";
const getData = JSON.parse(localStorage.getItem("userdata") || "[]");
  getName = getData.name;
  getPass = getData.pass; 





// ENTERボタンを押した時の処理
enterBtn.addEventListener('click', () => {
  if (getName === inputName.value && getPass === inputPass.value) {
    // localStorage.setItem("id", inputName.value);
    // localStorage.setItem("pass", inputPass.value);
    // 上の関数をここで発火
    success();
  } else if (getName !== inputName.value) {
    // 上の関数をここで発火
      confirmId();
  } else {
    // 上の関数をここで発火
      confirmPass();
  }


});

// SIGN UPボタンを押した時の処理
signupBtn.addEventListener('click', () => {
  window.location.href = "./signup.html"
})