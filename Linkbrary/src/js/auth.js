import {
  handleFocusIn,
  handleFocusOut,
  handleSubmit,
  handlePasswordToggleClick,
} from "./eventHandler";

function setFocusInOutListenerById(targetId) {
  const target = document.querySelector(targetId);
  if (target) {
    target.addEventListener("focus", handleFocusIn);
    target.addEventListener("focusout", handleFocusOut);
  }
}

function init() {
  document
    .querySelector(".pw-toggle-btn")
    .addEventListener("click", handlePasswordToggleClick);
  setFocusInOutListenerById("#user-email");
  setFocusInOutListenerById("#password");
  document.querySelector(".sign-form").addEventListener("submit", handleSubmit);
}

init();
