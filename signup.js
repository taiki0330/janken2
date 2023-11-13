const saveBtn = document.querySelector('.save_btn');
const returnBtn = document.querySelector('.return_btn');



function saveData() {
      const savedName = document.querySelector('#id').value;
      const savedMail = document.querySelector('#mail').value;
      const savedPass = document.querySelector('#pass').value;
      
      let userData = {
            name: savedName,
            mail: savedMail,
            pass: savedPass,
      }
      
      localStorage.setItem("userdata", JSON.stringify(userData));
}


// Saveボタンを押した時の処理
saveBtn.addEventListener('click', () => {
      saveData();
})

// Go Topボタンを押した時の処理
returnBtn.addEventListener('click', () => {
      window.location.href = './index.html';
})