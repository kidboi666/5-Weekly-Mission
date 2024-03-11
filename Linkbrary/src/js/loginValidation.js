import { isValidInput, isCorrectInput } from "./formValidation";
import generateErrorMessage from "./errorMessage";

export default function validateLogin(emailInput, passwordInput) {
  if (!isValidInput(emailInput, passwordInput)) {
    return;
  }

  if (!isCorrectInput(emailInput, passwordInput)) {
    generateErrorMessage(emailInput.parentElement, "이메일을 확인해 주세요");
    generateErrorMessage(
      passwordInput.parentElement,
      "비밀번호를 확인해 주세요"
    );
    return;
  }

  window.location.href = "../folder.html";
}
