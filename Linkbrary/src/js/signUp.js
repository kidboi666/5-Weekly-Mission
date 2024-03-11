import {
  handlePasswordToggleClick,
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
}

initSignUp();
