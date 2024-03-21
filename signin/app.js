import { validateEmail, validatePassword, users } from "../js/auth.js";

import {
  showError,
  removeErrorMessage,
  togglePasswordVisibility,
} from "../js/uicontroller.js";

const emailInputEl = document.querySelector(".email-input");
const passwordInputEl = document.querySelector(".password-input");

const signform = document.querySelector(".sign-form");

const passwordInput = document.querySelector(".password-input");
const passwordToggleBtn = document.querySelector(".password-eye-button img");

/*email 유효성 검증*/

emailInputEl.addEventListener("focusout", () => {
  const email = emailInputEl.value;
  const validation = validateEmail(email);

  if (!validation.success) {
    showError(".error-message-email", validation.error);
  }
});

emailInputEl.addEventListener("focus", () =>
  removeErrorMessage(".error-message-email")
);

/*password 유효성 검증*/

passwordInputEl.addEventListener("focusout", () => {
  const password = passwordInputEl.value;
  const validation = validatePassword(password);

  if (!validation.success) {
    showError(".error-message-password", validation.error);
  }
});

passwordInputEl.addEventListener("focus", () =>
  removeErrorMessage(".error-message-password")
);

/*이메일: test@codeit.com 비밀번호: codeit101로 로그인 시, /folder 페이지로 이동
이외의 로그인 시도의 경우, 에러 메세지 출력*/

function login(authInfo) {
  const { email, password } = authInfo;

  const isValidEmail = validateEmail(email);
  const isValidPassword = validatePassword(password);

  if (isValidEmail.error) {
    const errorMessage = isValidEmail.error;
    return showError(".error-message-email", errorMessage);
  }

  if (isValidPassword.error) {
    const errorMessage = isValidPassword.error;
    return showError(".error-message-password", errorMessage);
  }

  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!user) {
    showError(".error-message-email", "이메일 또는 비밀번호를 확인해주세요");
    showError(".error-message-password", "이메일 또는 비밀번호를 확인해주세요");
    return;
  }

  location.href = "./folder.html";
}

signform.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = signform.querySelector(".email-input").value;
  const password = signform.querySelector(".password-input").value;

  login({ email, password });
});

/*Enter키를 눌러도 로그인이 되도록 추가*/

signform.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    login(event);
  }
});

/*눈 모양 아이콘*/

passwordToggleBtn.addEventListener("click", () =>
  togglePasswordVisibility(passwordInput, passwordToggleBtn)
);
