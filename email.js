export const emailInput = document.querySelector("#email");
export const emailError = document.querySelector("#email-errorText");

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
