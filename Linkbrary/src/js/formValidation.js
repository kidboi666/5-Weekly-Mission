import isValidEmail from "./emailValidation";
import isValidPassword from "./passwordValidation";

export function isValidInput(emailInput, passwordInput) {
  return isValidEmail(emailInput) && isValidPassword(passwordInput);
}

export function isCorrectInput(emailInput, passwordInput) {
  const email = "test@codeit.com";
  const password = "codeit101";
  return email === emailInput.value && password === passwordInput.value;
}
