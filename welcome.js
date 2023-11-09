const inputName = localStorage.getItem("id");

const spanName = document.querySelector("span");
spanName.textContent = inputName;

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    window.location.href = './janken.html';
})