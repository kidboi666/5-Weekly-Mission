import validateLogin from "./loginValidation";
import validateSignUp from "./signUpValidation";
export function signInSubmit() {
  const emailInput = document.querySelector("#user-email");
  const passwordInput = document.querySelector("#password");
  validateLogin(emailInput, passwordInput);
}

export function signUpSubmit() {
  console.log("sign submit");
  const emailInput = document.querySelector("#user-email");
  const passwordInput = document.querySelector("#password");
  const passwordCheck = document.querySelector("#password-check");
  validateSignUp(emailInput, passwordInput, passwordCheck);
}
