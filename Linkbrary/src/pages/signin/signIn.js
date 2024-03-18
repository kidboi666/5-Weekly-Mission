import {
  handleSubmit,
  handlePasswordToggleClick,
  setFocusInOutListenerById,
} from '/src/js/eventHandler';

function init() {
  document
    .querySelector('.pw-toggle-btn')
    .addEventListener('click', handlePasswordToggleClick);
  setFocusInOutListenerById('#user-email');
  setFocusInOutListenerById('#password');
  document.querySelector('.sign-form').addEventListener('submit', handleSubmit);
}

init();
