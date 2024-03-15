import {isEmail} from './util.js';

const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordToggleBtn = document.querySelector('.auth-form__password-toggle-btn');
const passwordIcon = document.querySelector('.auth-form__password-icon')
const emailErrorMessage = document.querySelector('#auth-form__wrong-email');
const passwordErrorMessage = document.querySelector('#auth-form__wrong-password');
const authForm = document.querySelector('.auth-form');

/* 이메일 에러체크 */

const emailErrorEvent = function(){
  if (!email.value) {
    email.classList.add('auth-form__input--invalid');
    emailErrorMessage.textContent = "이메일을 입력해주세요.";
  }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){
    email.classList.add('auth-form__input--invalid');
    emailErrorMessage.textContent = "올바른 이메일 주소가 아닙니다.";
  }else{
  email.classList.remove('auth-form__input--invalid');
  emailErrorMessage.textContent = "";
  }
};

/* 비밀번호 에러 체크 */

const passwordErrorEvent = function(){
  if (!password.value) {
    password.classList.add('auth-form__input--invalid');
    passwordErrorMessage.textContent = "비밀번호를 입력해주세요.";
  } else{
    password.classList.remove('auth-form__input--invalid')
    passwordErrorMessage.textContent = "";
  }
};

const confirmPasswordErrorEvent = function(){
  if (!confirmPassword.value) {
    confirmPassword.classList.add('auth-form__input--invalid');
  } else{
    confirmPassword.classList.remove('auth-form__input--invalid')
  }
};

/* 로그인 에러체크 */

const loginEvent = function(e){
  e.preventDefault();
  if(email.value === "test@codeit.com" && password.value === "codeit101"){
    window.location.href = "folder.html";
  } else{
    email.classList.add('auth-form__input--invalid');
    password.classList.add('auth-form__input--invalid');
    emailErrorMessage.textContent = "이메일을 확인해 주세요.";
    passwordErrorMessage.textContent = "비밀번호를 확인해 주세요.";
  }
}

/* 이벤트 리스너 추가 */

email.addEventListener('mouseout', emailErrorEvent);

email.addEventListener('keyup', emailErrorEvent);

password.addEventListener('mouseout', passwordErrorEvent);

password.addEventListener('keyup', passwordErrorEvent);

authForm.addEventListener('submit', loginEvent);

document.addEventListener('keydown', function(e){
  if(e.key === 'Enter'){
    loginEvent(e);
  }
});

/* 비밀번호 보이기/숨기기 기능 구현 */

passwordToggleBtn.addEventListener('click', function(e){
  e.preventDefault();
  const passwordType = password.getAttribute('type');

  if(passwordType === 'password'){
    password.setAttribute('type', 'text');
    passwordIcon.setAttribute('src', '../icons/eye-on.svg');
  } else{
    password.setAttribute('type', 'password');
    passwordIcon.setAttribute('src', '../icons/eye-off.svg');
  };
  
});