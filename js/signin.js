import {
  isEmail,
  togglePasswordVisibility,
  loginInfo,
  errorMessages,
} from "./util.js";

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordToggleBtn = document.querySelector(
  ".auth-form__password-toggle-btn"
);
const emailErrorMessage = document.querySelector("#auth-form__email-error");
const passwordErrorMessage = document.querySelector(
  "#auth-form__password-error"
);
const authForm = document.querySelector(".auth-form");

/* 이메일 에러체크 */

function emailErrorEvent() {
  if (!email.value) {
    email.classList.add("auth-form__input--invalid");
    emailErrorMessage.textContent = errorMessages.emptyEmail;
  } else if (!isEmail(email.value)) {
    email.classList.add("auth-form__input--invalid");
    emailErrorMessage.textContent = errorMessages.invalidEmail;
  } else {
    email.classList.remove("auth-form__input--invalid");
    emailErrorMessage.textContent = "";
  }
}

/* 비밀번호 에러 체크 */

function passwordErrorEvent() {
  if (!password.value) {
    password.classList.add("auth-form__input--invalid");
    passwordErrorMessage.textContent = errorMessages.emptyPassword;
  } else {
    password.classList.remove("auth-form__input--invalid");
    passwordErrorMessage.textContent = "";
  }
}

/* 로그인 에러체크 */

function loginEvent(e) {
  e.preventDefault();

  if (
    email.value === loginInfo["email"] &&
    password.value === loginInfo["password"]
  ) {
    window.location.href = "folder.html";
  } else {
    email.classList.add("auth-form__input--invalid");
    emailErrorMessage.textContent = errorMessages.confirmEmail;
    password.classList.add("auth-form__input--invalid");
    passwordErrorMessage.textContent = errorMessages.confirmPassword;
  }
}

/* 이벤트 리스너 추가 */

email.addEventListener("mouseout", emailErrorEvent);

email.addEventListener("keyup", emailErrorEvent);

password.addEventListener("mouseout", passwordErrorEvent);

password.addEventListener("keyup", passwordErrorEvent);

authForm.addEventListener("submit", loginEvent);

authForm.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    loginEvent(e);
  }
});

passwordToggleBtn.addEventListener("click", togglePasswordVisibility);
