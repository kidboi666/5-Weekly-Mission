// 이메일에이메일 input에서 focus out 할 때, 값이 없을 경우
// 아래에 “이메일을 입력해 주세요.” 에러 메세지를 보입니다.
const emailInput = document.querySelector("#email");
const emailError = document.querySelector("#email-errorText");

function emailInputFocusOut() {
  if (!emailInput.value == "") {
    emailError.classList.add("error");
  } else {
    emailError.classList.remove("error");
  }
}
emailInput.addEventListener("focusout", emailInputFocusOut);

// 비밀번호 input에서 focus out 할 때, 값이 없을 경우
// 아래에 “비밀번호를 입력해 주세요.” 에러 메세지를 보입니다.
const passwordInput = document.querySelector("#password");
const passwordError = document.querySelector("#password-errorText");

function pwInputFocusOut() {
  if (!passwordInput.value == "") {
    passwordError.classList.add("error");
  } else {
    passwordError.classList.remove("error");
  }
}
passwordInput.addEventListener("focusout", pwInputFocusOut);
