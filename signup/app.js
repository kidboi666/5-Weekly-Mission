import {
  validateEmail, 
  users, 
} from '../js/auth.js';

import {
  removeErrorMessage,
  togglePasswordVisibility
} from '../js/uicontroller.js';

/* 이메일 유효성 검사*/
const emailInputEl = document.querySelector('.email-input');

emailInputEl.addEventListener('focusout', () => {
  const errorMessageEl = document.querySelector('.error-message-email');
  const emailValue = emailInputEl.value;
  const useremail = users.find(user => user.email === emailValue);

  if (useremail) {
    errorMessageEl.textContent = "이미 사용중인 이메일입니다.";
    emailInputEl.classList.add('wrongsign');
    return false;
  } else {
    validateEmail(); // 다른 유효성 검사 수행
    return true;
  }
});

emailInputEl.addEventListener('focus', () => removeErrorMessage('.error-message-email'));

// 비밀번호 유효성 검사
function validatePassword() {
  const passwordInputEl = document.querySelector('.password-input');
  const passwordValue = passwordInputEl.value;
  const errorMessageEl = document.querySelector('.error-message-password');

  if(!/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/.test(passwordValue)) {
    errorMessageEl.textContent = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    passwordInputEl.classList.add('wrongsign');
    return false;
  } else {
    passwordInputEl.classList.remove('wrongsign');
    return true;
  }
}

const passwordInputEl = document.querySelector('.password-input');
passwordInputEl.addEventListener('focusout', validatePassword);
passwordInputEl.addEventListener('focus', () => removeErrorMessage('.error-message-password'));

// 비밀번호 확인 유효성 검사
function validatePasswordConfirmation() {
  const passwordInputEl = document.querySelector('.password-input');
  const passwordValue = passwordInputEl.value;

  const confirmPasswordValue = confirmPasswordInputEl.value;

  const errorMessageEl = document.querySelector('.error-message-password-confirm');

  if(confirmPasswordValue !== passwordValue) {
    errorMessageEl.textContent = "비밀번호가 일치하지 않아요.";
    confirmPasswordInputEl.classList.add('wrongsign');
    return false;
  } else {
    errorMessageEl.textContent = "";
    confirmPasswordInputEl.classList.remove('wrongsign');
    return true;
  }
}

const confirmPasswordInputEl = document.querySelector('.confirm-password-input');
confirmPasswordInputEl.addEventListener('keyup', validatePasswordConfirmation);

/*폼 제출 동작*/
const signform = document.querySelector('.sign-form');
signform.addEventListener('submit', function(event) {
  event.preventDefault(); // 폼 제출 동작 취소
  
  if (handleFormSubmit()) {
    location.href = '../signin/folder.html'; // '/folder' 페이지로 이동
  }
});

function handleFormSubmit() {
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  const isPasswordConfirmationValid = validatePasswordConfirmation();
  
  return isEmailValid && isPasswordValid && isPasswordConfirmationValid;
}

/*Enter키를 눌러도 로그인이 되도록 추가*/
signform.addEventListener('keydown', (event) => {
  if(event.key === "Enter") {
    handleFormSubmit(event);
  }
});

/*눈 모양 아이콘*/
const passwordInput = document.querySelector('.password-input');
const confirmPasswordInput = document.querySelector('.confirm-password-input');
const passwordToggleBtn = document.querySelector('.password-eye-button');
const confirmPasswordToggleBtn = document.querySelector('.confirm-password-eye-button');

passwordToggleBtn.addEventListener('click', () => togglePasswordVisibility(passwordInput, passwordToggleBtn));
confirmPasswordToggleBtn.addEventListener('click', () => togglePasswordVisibility(confirmPasswordInput, confirmPasswordToggleBtn)); 