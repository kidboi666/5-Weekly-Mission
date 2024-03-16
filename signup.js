// import {
//   emailInput,
//   emailError,
//   passwordInput,
//   passwordError,
// } from "./input.js";
const emailInput = document.querySelector("#email");
const emailError = document.querySelector("#email-errorText");
const passwordInput = document.querySelector("#password");
const passwordError = document.querySelector("#password-errorText");
const pwConfirmInput = document.querySelector("#password-confirm");
const pwConfirmError = document.querySelector("#password-confirm-errorText");
const btn = document.querySelector("#btn");

function emailCheck(email) {
  const emailForm =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return emailForm.test(email);
}

function emailInputFocusOut() {
  if (!emailInput.value) {
    emailError.textContent = "이메일을 입력하세요.";
    emailError.classList.remove("error");
    emailInput.classList.add("error-input");
  } else {
    const emailChecked = emailCheck(emailInput.value);
    if (emailChecked) {
      emailError.classList.add("error");
      emailInput.classList.remove("error-input");
    } else {
      emailError.textContent = "올바른 이메일 주소가 아닙니다.";
      emailError.classList.remove("error");
      emailInput.classList.add("error-input");
    }
  }
}
emailInput.addEventListener("focusout", emailInputFocusOut);

function isEmailAlreadyUse() {
  if (emailInput.value == "test@codeit.kr") {
    emailError.classList.remove("error");
    emailInput.classList.add("error-input");
    emailError.textContent = "이미 사용중인 이메일입니다.";
  }
}
emailInput.addEventListener("focusout", isEmailAlreadyUse);

function isValidPassword(password) {
  const passwordForm = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return passwordForm.test(password);
}

function validatePassword() {
  const validPassword = isValidPassword(passwordInput.value);
  if (validPassword) {
    passwordError.classList.add("error");
    passwordInput.classList.remove("error-input");
  } else {
    if (validPassword !== "") {
      passwordError.classList.remove("error");
      passwordError.textContent =
        "비밀번호는 영문,숫자 조합 8자 이상 입력해 주세요.";
      passwordInput.classList.add("error-input");
    }
  }
}
passwordInput.addEventListener("focusout", validatePassword);

function checkPassword() {
  const password = passwordInput.value;
  const confirmPassword = pwConfirmInput.value;

  if (password == confirmPassword) {
    pwConfirmError.classList.add("error");
    pwConfirmInput.classList.remove("error-input");
  } else {
    pwConfirmError.classList.remove("error");
    pwConfirmError.textContent = "비밀번호가 일치하지 않아요.";
    pwConfirmInput.classList.add("error-input");
  }
}
pwConfirmInput.addEventListener("input", checkPassword);

function signUp(e) {
  const emailChecked = emailCheck(emailInput.value);
  const validPassword = isValidPassword(passwordInput.value);
  const passwordsMatch = passwordInput.value === pwConfirmInput.value;

  if (emailChecked && validPassword && passwordsMatch) {
    window.location.href = "./folder.html";
  } else {
    e.preventDefault();
  }
}

btn.addEventListener("click", signUp);
