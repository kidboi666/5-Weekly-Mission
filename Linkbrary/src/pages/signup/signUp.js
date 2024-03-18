import {
  handlePasswordToggleClick,
  handleSubmit,
  setFocusInOutListenerById,
} from '/src/js/eventHandler';

function init() {
  const pwToggleBtns = document.querySelectorAll('.pw-toggle-btn');

  for (const btn of pwToggleBtns) {
    btn.addEventListener('click', handlePasswordToggleClick);
  }

  setFocusInOutListenerById('#user-email');
  setFocusInOutListenerById('#password');
  setFocusInOutListenerById('#password-check');
  document
    .querySelector('#sign-up-form')
    .addEventListener('submit', handleSubmit);
}

init();
