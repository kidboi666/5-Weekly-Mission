import isValidEmail from "./emailValidation";
import isValidPassword from "./passwordValidation";
import { EMAIL, PASSWORD } from "./constants";

export function isValidInput(emailInput, passwordInput) {
  return isValidEmail(emailInput) && isValidPassword(passwordInput);
}

export function isCorrectInput(emailInput, passwordInput) {
  return EMAIL === emailInput.value && PASSWORD === passwordInput.value;
}
