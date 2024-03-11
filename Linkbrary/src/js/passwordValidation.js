import generateErrorMessage from "./errorMessage.js";
export default function isValidPassword(passwordInput) {
  const inputValue = passwordInput.value;
  if (inputValue.length === 0) {
    generateErrorMessage(
      passwordInput.parentElement,
      "비밀번호를 입력해주세요"
    );
    return false;
  }
  return true;
}

export function isSamePassword(passwordCheck) {
  const pwValue = document.querySelector("#password").value;
  const pwCheckValue = document.querySelector("#password-check").value;
  if (pwValue !== pwCheckValue) {
    generateErrorMessage(
      passwordCheck.parentElement,
      "비밀번호가 일치하지 않아요"
    );
    return false;
  }
  return true;
}
