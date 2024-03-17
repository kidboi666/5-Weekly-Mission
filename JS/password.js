export const passwordInput = document.querySelector("#password");
export const passwordError = document.querySelector("#password-errorText");

function pwInputFocusOut() {
  if (!passwordInput.value) {
    passwordError.classList.remove("error");
    passwordInput.classList.add("error-input");
    passwordError.textContent = "비밀번호를 입력해 주세요.";
  } else {
    passwordError.classList.add("error");
    passwordInput.classList.remove("error-input");
  }
}
passwordInput.addEventListener("focusout", pwInputFocusOut);
