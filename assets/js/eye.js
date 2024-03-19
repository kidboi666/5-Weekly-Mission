import { inputPassword } from '/assets/js/login.js';
import { inputPasswordConfirm } from '/assets/js/join.js';
const eyeButton = document.querySelector('.sign-pw__eye-btn');
const confirmEyeButton = document.querySelector('#confirm-btn');
const eyeImage = document.querySelector('.eye-change');
const confirmEyeImage= document.querySelector('#confirm-eye-change');

// 비밀번호 
function eyeToggle() {
  eyeImage.classList.toggle('eye-on');
  
  if (inputPassword.type === 'password') {
    inputPassword.type = 'text';
  } else {
    inputPassword.type = 'password';
  }
}

// 비밀번호 확인
function confirmEyeToggle() {
  confirmEyeImage.classList.toggle('eye-on');
  
  if (inputPasswordConfirm.type === 'password') {
    inputPasswordConfirm.type = 'text';
  } else {
    inputPasswordConfirm.type = 'password';
  }
}

eyeButton.addEventListener('click', eyeToggle);
confirmEyeButton.addEventListener('click', confirmEyeToggle);