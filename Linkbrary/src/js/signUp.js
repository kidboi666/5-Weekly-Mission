import { handlePasswordToggleClick } from "./eventHandler";

function initSignUp() {
  const pwToggleBtns = document.querySelectorAll(".pw-toggle-btn");
  for (btn of pwToggleBtns) {
    btn.addEventListener("click", handlePasswordToggleClick);
  }
}

initSignUp();
