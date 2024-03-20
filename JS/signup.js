import { emailInput, emailError, emailCheck } from "./email.js";
import { passwordInput, passwordError } from "./password.js";
const pwConfirmInput = document.querySelector("#password-confirm");
const pwConfirmError = document.querySelector("#password-confirm-errorText");
const btn = document.querySelector(".signup");

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
pwConfirmInput.addEventListener("focusout", checkPassword);

function signUp(e) {
  e.preventDefault();

  const emailChecked = emailCheck(emailInput.value);
  const validPassword = isValidPassword(passwordInput.value);
  const passwordMatch = passwordInput.value === pwConfirmInput.value;
  if (emailChecked && validPassword && passwordMatch) {
    window.location.href = "./folder.html";
  }
  if (!emailChecked) {
    emailError.classList.remove("error");
    emailError.textContent = "이메일을 확인해주세요";
    emailInput.classList.add("error-input");
  }
  if (!validPassword) {
    passwordError.classList.remove("error");
    passwordError.textContent = "비밀번호를 확인해주세요";
    passwordInput.classList.add("error-input");
  }
  if (!passwordMatch) {
    pwConfirmError.classList.remove("error");
    pwConfirmError.textContent = "비밀번호가 다릅니다.";
    pwConfirmInput.classList.add("error-input");
  }
}

btn.addEventListener("click", signUp);
