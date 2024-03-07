import { removeErrorMessage } from "./errorMessage";
import isValidEmail from "./emailValidation";
import isValidPassword from "./passwordValidation";
import validateLogin from "./loginValidation";

function handleFocusIn(event) {
  const target = event.target;
  removeErrorMessage(target);
}

function handleFocusOut(event) {
  switch (event.target.id) {
    case "user-email":
      isValidEmail(event.target);
      break;
    case "password":
      isValidPassword(event.target);
      break;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const emailInput = document.querySelector("#user-email");
  const passwordInput = document.querySelector("#password");
  validateLogin(emailInput, passwordInput);
}

function handlePasswordToggleClick(event) {
  event.preventDefault();
  const passwordInput = event.currentTarget.previousElementSibling;
  console.log(event.currentTarget);
  console.log(passwordInput);
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
}

export {
  handleFocusIn,
  handleFocusOut,
  handleSubmit,
  handlePasswordToggleClick,
};
