import {
  handlePasswordToggleClick,
  handleSubmit,
  setFocusInOutListenerById,
} from "./eventHandler";

function initSignUp() {
  const pwToggleBtns = document.querySelectorAll(".pw-toggle-btn");

  for (btn of pwToggleBtns) {
    btn.addEventListener("click", handlePasswordToggleClick);
  }

  setFocusInOutListenerById("#user-email");
  setFocusInOutListenerById("#password");
  setFocusInOutListenerById("#password-check");
  document
    .querySelector("#sign-up-form")
    .addEventListener("submit", handleSubmit);
}

initSignUp();
