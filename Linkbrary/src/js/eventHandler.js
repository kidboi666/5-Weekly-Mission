import { removeErrorMessage } from "./errorMessage";
import validateLogin from "./loginValidation";
import { focusOutFunctions } from "./constants";

function handleFocusIn(event) {
  const target = event.target;
  removeErrorMessage(target);
}

function handleFocusOut(event) {
  const focusOutFunction = focusOutFunctions[event.target.id];
  if (focusOutFunction) {
    focusOutFunction(event.target);
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
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
  const imgs = event.currentTarget.querySelectorAll("img");
  imgs.forEach((img) => {
    img.classList.toggle("hidden");
    img.style.opacity = img.classList.contains("hidden") ? 0 : 1;
  });
  console.log(imgs);
}

function setFocusInOutListenerById(targetId) {
  const target = document.querySelector(targetId);
  if (target) {
    target.addEventListener("focus", handleFocusIn);
    target.addEventListener("focusout", handleFocusOut);
  }
}

export {
  handleFocusIn,
  handleFocusOut,
  handleSubmit,
  handlePasswordToggleClick,
  setFocusInOutListenerById,
};
