import {
  removeErrorMessage, 
  validateEmail, 
  users, 
  togglePasswordVisibility
} from '../common.js';

/*let isEmailValid = false;
let isPasswordValid = false;

/*email 유효성 검증

const emailInputEl = document.querySelector('.email-input');

emailInputEl.addEventListener('focusout', (event) =>{
  validateEmail(event);

  const errorMessageEl = document.querySelector('.error-message-email');
  const emailValue = emailInputEl.value;
  const useremail = users.find(user => user.email === emailValue);
  if(useremail) {
    errorMessageEl.textContent = "이미 사용중인 이메일입니다.";
    emailInputEl.classList.add('wrongsign');
  } else {
    isEmailValid = true;
  }
});

emailInputEl.addEventListener('focus', removeErrorMessage);

/*password 유효성 검증

function validatePassword(event) {
  const passwordInputEl = event.target;
  const passwordValue = passwordInputEl.value;

  const errorMessageEl = document.querySelector('.error-message-password');

  if(!/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/.test(passwordValue)) {
    errorMessageEl.textContent = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    passwordInputEl.classList.add('wrongsign');
  } else {
    passwordInputEl.classList.remove('wrongsign');
    isPasswordValid = true;
  }
}

const passwordInputEl = document.querySelector('.password-input');
passwordInputEl.addEventListener('focusout', validatePassword);
passwordInputEl.addEventListener('focus', removeErrorMessage);

/*비밀번호 input과 비밀번호 확인 input 값이 다를 때 에러메시지

function validatePasswordConfirmation(event) {
  const passwordInputEl = document.querySelector('.password-input');
  const passwordValue = passwordInputEl.value;

  const confirmPasswordInputEl = event.target;
  const confirmPasswordValue = confirmPasswordInputEl.value;

  const errorMessageEl = document.querySelector('.error-message-password-confirm');

  if(confirmPasswordValue !== passwordValue) {
    errorMessageEl.textContent = "비밀번호가 일치하지 않아요.";
    confirmPasswordInputEl.classList.add('wrongsign');
  } else {
    errorMessageEl.textContent = "";
    confirmPasswordInputEl.classList.remove('wrongsign');
  }
}

const confirmPasswordInputEl = document.querySelector('.confirm-password-input');
confirmPasswordInputEl.addEventListener('keyup', validatePasswordConfirmation);

/*유효한 회원가입 시도시 /folder 페이지로 이동

function handleFormSubmit(event) {
  event.preventDefault();

  if (isEmailValid && isPasswordValid) {
    location.href = "./folder.html";
  } else {
    //이메일 또는 비밀번호 유효성 검증이 실패한 경우
    if (!isEmailValid) {
      const errorMessageEl = document.querySelector('.error-message-email');
      errorMessageEl.textContent = "올바른 이메일을 입력해 주세요.";
      emailInputEl.classList.add('wrongsign');
    }
    if (!isPasswordValid) {
      const errorMessageEl = document.querySelector('.error-message-password');
      errorMessageEl.textContent = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
      passwordInputEl.classList.add('wrongsign');
    }
  }
}

const signform = document.querySelector('.sign-form');
  signform.addEventListener('submit', handleFormSubmit);

/*Enter키를 눌러도 로그인이 되도록 추가
signform.addEventListener('keydown', (event) => {
  if(event.key === "Enter") {
    handleFormSubmit(event);
  }
});

/*눈 모양 아이콘

document.querySelectorAll('.eye-button').forEach(eyeButton => {
  eyeButton.addEventListener('click', () => {
    togglePasswordVisibility();
  });
});*/

// 이메일 유효성 검사
const emailInputEl = document.querySelector('.email-input');

emailInputEl.addEventListener('focusout', (event) => {
  validateEmail(event); 

  const errorMessageEl = document.querySelector('.error-message-email');
  const emailValue = emailInputEl.value;
  const useremail = users.find(user => user.email === emailValue);

  if (useremail) {
    errorMessageEl.textContent = "이미 사용중인 이메일입니다.";
    emailInputEl.classList.add('wrongsign');
    return false;
  } else {
    return true;
  }
});

emailInputEl.addEventListener('focus', removeErrorMessage);

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
passwordInputEl.addEventListener('focus', removeErrorMessage);

// 비밀번호 확인 유효성 검사
function validatePasswordConfirmation() {
  const passwordInputEl = document.querySelector('.password-input');
  const passwordValue = passwordInputEl.value;
  const confirmPasswordInputEl = document.querySelector('.confirm-password-input');
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

// 폼 제출 핸들러
function handleFormSubmit(event) {
  event.preventDefault();

  const isEmailValid = validateEmail(event);
  const isPasswordValid = validatePassword(event);
  const isPasswordConfirmationValid = validatePasswordConfirmation(event);

  // 모든 유효성 검사가 통과했는지 확인
  if (isEmailValid && isPasswordValid && isPasswordConfirmationValid) {
    location.href = "../signin/folder.html";
  }
}

const signform = document.querySelector('.sign-form');
signform.addEventListener('submit', handleFormSubmit);

/*Enter키를 눌러도 로그인이 되도록 추가*/
signform.addEventListener('keydown', (event) => {
  if(event.key === "Enter") {
    handleFormSubmit(event);
  }
});

