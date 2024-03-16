import { inputPassword } from '/assets/js/login.js';
const eyeBtn = document.querySelector('.sign-pw__eye-btn');
const eyeImg = document.querySelector('.eye-change');

function eyeToggle() {
  eyeImg.classList.toggle('eye-on');
  
  if (inputPassword.type === 'password') {
    inputPassword.type = 'text';
  } else {
    inputPassword.type = 'password';
  }
}

eyeBtn.addEventListener('click', eyeToggle);