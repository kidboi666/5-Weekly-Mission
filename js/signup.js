import {
  isEmail,
  togglePasswordVisibility,
  loginInfo,
  errorMessages,
} from "./util.js";

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#confirm-password");
const passwordToggleBtn = document.querySelector(
  ".auth-form__password-toggle-btn"
);
const passwordToggleBtnConfirm = document.querySelector(
  ".auth-form__password-toggle-btn.confirm"
);
const emailErrorMessage = document.querySelector("#auth-form__email-error");
const passwordErrorMessage = document.querySelector(
  "#auth-form__password-error"
);
const passwordConfirmErrorMessage = document.querySelector(
  "#auth-form__password-confirm-error"
);
const authForm = document.querySelector(".auth-form");

export const signupCheck = {
  email: false,
  password: false,
  passwordConfirm: false,
};

/* 이메일 에러체크 */

function emailErrorEvent() {
  if (!email.value) {
    email.classList.add("auth-form__input--invalid");
    emailErrorMessage.textContent = errorMessages.emptyEmail;
  } else if (!isEmail(email.value)) {
    email.classList.add("auth-form__input--invalid");
    emailErrorMessage.textContent = errorMessages.invalidEmail;
  } else if (email.value === loginInfo.email) {
    email.classList.add("auth-form__input--invalid");
    emailErrorMessage.textContent = errorMessages.duplicateEmail;
  } else if (isEmail(email.value)) {
    email.classList.remove("auth-form__input--invalid");
    emailErrorMessage.textContent = "";
    signupCheck.email = true;
  }
}

/* 비밀번호 에러 체크 */

function passwordErrorEvent() {
  if (!password.value) {
    password.classList.add("auth-form__input--invalid");
    passwordErrorMessage.textContent = errorMessages.emptyPassword;
  } else if (
    password.value.length < 8 ||
    !/[A-Za-z]/.test(password.value) ||
    !/[0-9]/.test(password.value)
  ) {
    password.classList.add("auth-form__input--invalid");
    passwordErrorMessage.textContent = errorMessages.invalidPassword;
  } else if (
    password.value.length >= 8 &&
    /[A-Za-z]/.test(password.value) &&
    /\d/.test(password.value)
  ) {
    password.classList.remove("auth-form__input--invalid");
    passwordErrorMessage.textContent = "";
    signupCheck.password = true;
  }
}

/* 비밀번호 확인 에러체크 */

function passwordConfirmErrorEvent() {
  if (!passwordConfirm.value) {
    passwordConfirm.classList.add("auth-form__input--invalid");
    passwordConfirmErrorMessage.textContent = errorMessages.emptyPassword;
  } else if (password.value !== passwordConfirm.value) {
    passwordConfirm.classList.add("auth-form__input--invalid");
    passwordConfirmErrorMessage.textContent = errorMessages.mismatchPassword;
  } else if (password.value === passwordConfirm.value) {
    passwordConfirm.classList.remove("auth-form__input--invalid");
    passwordConfirmErrorMessage.textContent = "";
    signupCheck.passwordConfirm = true;
  }
}

/* 회원가입 에러체크 */

function signupEvent(e) {
  e.preventDefault();

  const { email, password, passwordConfirm } = signupCheck;

  if (email && password && passwordConfirm) {
    window.location.href = "folder.html";
  } else {
    emailErrorEvent();
    passwordErrorEvent();
    passwordConfirmErrorEvent();
  }
}

/* 이벤트 리스너 추가 */

email.addEventListener("mouseout", emailErrorEvent);

email.addEventListener("keyup", emailErrorEvent);

password.addEventListener("mouseout", passwordErrorEvent);

password.addEventListener("keyup", passwordErrorEvent);

passwordConfirm.addEventListener("mouseout", passwordConfirmErrorEvent);

passwordConfirm.addEventListener("keyup", passwordConfirmErrorEvent);

authForm.addEventListener("submit", signupEvent);

authForm.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    signupEvent(e);
  }
});

passwordToggleBtn.addEventListener("click", togglePasswordVisibility);

passwordToggleBtnConfirm.addEventListener("click", togglePasswordVisibility);
