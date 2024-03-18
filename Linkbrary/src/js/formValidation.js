import isValidEmail from './emailValidation';
import isValidPassword from './passwordValidation';

export function isValidInput(emailInput, passwordInput) {
  return isValidEmail(emailInput) && isValidPassword(passwordInput);
}
