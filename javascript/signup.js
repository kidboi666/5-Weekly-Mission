import { 
  loginId,
  emailErr,
  emailSignUp,
} from "./email.js"

import { 
  loginPwd,
  loginPwdCheck,
  passwordErrSignUp,
  passwordErrSignUpCheck,
  passwordSignUp,
} from "./password.js"

const CORRECT_EMAIL = "test@codeit.com"

const form = document.querySelector('#form');
const eyeBtn = document.querySelector('.password-button');
const eyeOn = document.querySelector('.eye-on');
const eyeOff = document.querySelector('.eye-off');

loginId.addEventListener('focusout', emailSignUp);
loginPwd.addEventListener('focusout', passwordSignUp);

form.addEventListener('submit', function(e) {
  e.preventDefault();

  if (loginId.value !== CORRECT_EMAIL && loginPwd.value === loginPwdCheck.value) {
    location.href = "./folder.html";
  } else if (loginPwd.value !== loginPwdCheck.value) {
    emailErr.classList.add("hide");
    loginId.classList.remove("input-err");
    passwordErrSignUpCheck.textContent = '비밀번호가 일치하지 않아요.';
    passwordErrSignUpCheck.classList.remove("hide");
    loginPwdCheck.classList.add("input-err");
  } else {
    /* 문제가 있는 input에 에러 메세지로 알리기 */
  }
});

eyeBtn.addEventListener('click', function() {
  if (loginPwd.type === 'password') {
    loginPwd.type = 'text'
    eyeOn.classList.remove('hide')
    eyeOff.classList.add('hide')
  } else {
    loginPwd.type = 'password'
    eyeOn.classList.add('hide')
    eyeOff.classList.remove('hide')
  }
});
