const $form = document.querySelector("#form__inputForm");

// 에러 메시지
const emailErrorMessage = document.querySelector(".email-error-message");
const pwErrorMessage = document.querySelector(".pw-error-message");
const pwConfirmErrorMessage = document.querySelector(
  ".pw-confirm-error-message"
);

// 사용자 입력
const inputEmail = document.querySelector("#input-email");
const inputPassword = document.querySelector("#input-pw");
const inputPasswordConfirm = document.querySelector("#input-pw-confirm");

// 버튼
const eyeButton = document.querySelector(".sign-pw__eye-btn");
const confirmEyeButton = document.querySelector("#confirm-btn");

// 비밀번호 형식
const passwordPattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/;
// 이메일 형식
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

export function reset() {
  // 초기 상태로 리셋
  inputEmail.classList.remove("error-border");
  inputPassword.classList.remove("error-border");
  inputPasswordConfirm.classList.remove("error-border");
  emailErrorMessage.innerHTML = "";
  pwErrorMessage.innerHTML = "";
  pwConfirmErrorMessage.innerHTML = "";
}

export function testSignin() {
  inputEmail.classList.add("error-border");
  inputPassword.classList.add("error-border");
  emailErrorMessage.innerHTML = "이메일을 확인해 주세요.";
  pwErrorMessage.innerHTML = "비밀번호를 확인해 주세요.";
}

export function testEmail() {
  inputEmail.classList.add("error-border");
  emailErrorMessage.innerHTML = "이미 사용 중인 이메일입니다.";
}

export {
  $form,
  inputEmail,
  inputPassword,
  inputPasswordConfirm,
  emailErrorMessage,
  pwErrorMessage,
  pwConfirmErrorMessage,
  passwordPattern,
  emailPattern,
  eyeButton,
  confirmEyeButton,
};
