const $form = document.querySelector("#form__inputForm");

const emailErrorMessage = document.querySelector(".email-error-message");
const pwErrorMessage = document.querySelector(".pw-error-message");
const pwConfirmErrorMessage = document.querySelector(
  ".pw-confirm-error-message"
);

const inputEmail = document.querySelector("#input-email");
const inputPassword = document.querySelector("#input-pw");
const inputPasswordConfirm = document.querySelector("#input-pw-confirm");

const eyeButton = document.querySelector(".sign-pw__eye-btn");
const confirmEyeButton = document.querySelector("#confirm-btn");

// 테스트 데이터
// const data = [
//   {
//     email: "test@codeit.com",
//     password: "codeit101",
//   },
// ];
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
