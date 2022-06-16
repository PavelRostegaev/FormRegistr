const signInBtn = document.querySelector('.singin-btn');
const signUpBtn = document.querySelector('.singup-btn');
const formBox = document.querySelector('.form-box');
const body = document.body;

signUpBtn.addEventListener('click', function() {
    formBox.classList.add('active');
    body.classList.add('active');
})

signInBtn.addEventListener('click', function() {
    formBox.classList.remove('active');
    body.classList.remove('active');
})