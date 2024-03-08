// 이메일에이메일 input에서 focus out 할 때, 값이 없을 경우
// 아래에 “이메일을 입력해 주세요.” 에러 메세지를 보입니다.
const emailInput = document.querySelector("#email");
const emailError = document.querySelector("#email-errorText");

function emailCheck(email) {
  const emailForm =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return emailForm.test(email); //이메일 문자열이 해당 정규식과 일치하는지 여부를 확인
}

function emailInputFocusOut() {
  if (emailInput.value == "") {
    emailError.textContent = "이메일을 입력하세요.";
    emailError.classList.remove("error");
  } else {
    const emailChecked = emailCheck(emailInput.value);
    if (emailChecked) {
      emailError.classList.add("error");
    } else {
      emailError.textContent = "올바른 이메일 주소가 아닙니다.";
      emailError.classList.remove("error");
    }
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
