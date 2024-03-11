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
