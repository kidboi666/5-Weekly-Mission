import { 
  loginId,
  emailNone,
  emailFail,
  emailCheck,
  emailResult,
  /* errorMessageEmailReset, */
} from "./email.js"

import { 
  loginPwd,
  passwordNone,
  passwordFail,
  passwordResult,
  /* errorMessagePasswordReset, */
} from "./password.js"

const loginBtn = document.querySelector('.cta');
const eyeBtn = document.querySelector('.password-button')
const eyeOn = document.querySelector('.eye-on')
const eyeOff = document.querySelector('.eye-off')

loginId.addEventListener('focusout', emailResult);
loginPwd.addEventListener('focusout', passwordResult);

loginId.addEventListener('keyup', function(e) {
  if (e.keyCode === 13) {
    if (loginId.value === "test@codeit.com" && loginPwd.value === 'codeit101') {
      location.href = "./folder.html";
    } else {
      emailNone.classList.add("hide");
      emailCheck.classList.add("hide");
      emailFail.classList.remove("hide");
      loginId.classList.add("input-err");
      passwordNone.classList.add("hide");
      passwordFail.classList.remove("hide");
      loginPwd.classList.add("input-err");
    }
  }
}); /* 합칠 수 있나? */

loginPwd.addEventListener('keyup', function(e) {
  if (e.keyCode === 13) {
    if (loginId.value === "test@codeit.com" && loginPwd.value === 'codeit101') {
      location.href = "./folder.html";
    } else {
      emailNone.classList.add("hide");
      emailCheck.classList.add("hide");
      emailFail.classList.remove("hide");
      loginId.classList.add("input-err");
      passwordNone.classList.add("hide");
      passwordFail.classList.remove("hide");
      loginPwd.classList.add("input-err");
    }
  }
}); /* 합칠 수 있나? */

loginBtn.addEventListener('click', function() {
  if (loginId.value === "test@codeit.com" && loginPwd.value === 'codeit101') {
    location.href = "./folder.html";
  } else {
    emailNone.classList.add("hide");
    emailCheck.classList.add("hide");
    emailFail.classList.remove("hide");
    loginId.classList.add("input-err");
    passwordNone.classList.add("hide");
    passwordFail.classList.remove("hide");
    loginPwd.classList.add("input-err");
  }
}); /* 합칠 수 있나? */

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
