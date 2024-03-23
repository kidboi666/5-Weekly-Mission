import {
  inputEmail,
  inputPassword,
  emailErrorMessage,
  pwErrorMessage,
  emailPattern,
} from "./reset.js";

// 형식 검증
export function textCheck() {
  // 이메일
  const email = inputEmail.value;
  const emailLength = email.length > 0;
  const isEmailValid = emailPattern.test(email);
  inputEmail.classList.remove("error-border");
  emailErrorMessage.innerHTML = "";

  if (emailLength) {
    if (!isEmailValid) {
      inputEmail.classList.remove("sign-focus");
      inputEmail.classList.add("error-border");
      emailErrorMessage.innerHTML = "올바른 이메일 주소가 아닙니다.";
    }
  }

  if (!emailLength) {
    inputEmail.classList.add("error-border");
    emailErrorMessage.innerHTML = "이메일을 입력해 주세요.";
  }
}

export function textCheckPw() {
  // 비밀번호
  const password = inputPassword.value;
  const passwordLength = password.length === 0;
  inputPassword.classList.remove("error-border");
  pwErrorMessage.innerHTML = "";

  if (passwordLength) {
    inputPassword.classList.add("error-border");
    pwErrorMessage.innerHTML = "비밀번호를 입력해 주세요.";
  }
}
