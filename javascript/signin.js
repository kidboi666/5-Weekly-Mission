import { loginId, emailErr, emailSignIn } from "./email.js";

import { loginPwd, passwordErrSignIn, passwordSignIn } from "./password.js";

const CORRECT_EMAIL = "test@codeit.com";
const CORRECT_PASSWORD = "codeit101";

const form = document.querySelector("#form");
const eyeBtn = document.querySelector(".password-button");
const eyeOn = document.querySelector(".eye-on");
const eyeOff = document.querySelector(".eye-off");

loginId.addEventListener("focusout", emailSignIn);
loginPwd.addEventListener("focusout", passwordSignIn);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (loginId.value === CORRECT_EMAIL && loginPwd.value === CORRECT_PASSWORD) {
    location.href = "./folder.html";
  } else if (
    loginId.value === CORRECT_EMAIL &&
    loginPwd.value !== CORRECT_PASSWORD
  ) {
    emailErr.classList.add("hide");
    loginId.classList.remove("input-err");
    passwordErrSignIn.textContent = "비밀번호를 확인해 주세요.";
    passwordErrSignIn.classList.remove("hide");
    loginPwd.classList.add("input-err");
  } else if (
    loginId.value !== CORRECT_EMAIL &&
    loginPwd.value === CORRECT_PASSWORD
  ) {
    emailErr.textContent = "이메일을 확인해 주세요.";
    emailErr.classList.remove("hide");
    loginId.classList.add("input-err");
    passwordErrSignIn.classList.add("hide");
    loginPwd.classList.remove("input-err");
  } else {
    emailErr.textContent = "이메일을 확인해 주세요.";
    emailErr.classList.remove("hide");
    loginId.classList.add("input-err");
    passwordErrSignIn.textContent = "비밀번호를 확인해 주세요.";
    passwordErrSignIn.classList.remove("hide");
    loginPwd.classList.add("input-err");
  }
});

eyeBtn.addEventListener("click", function () {
  if (loginPwd.type === "password") {
    loginPwd.type = "text";
    eyeOn.classList.remove("hide");
    eyeOff.classList.add("hide");
  } else {
    loginPwd.type = "password";
    eyeOn.classList.add("hide");
    eyeOff.classList.remove("hide");
  }
});
