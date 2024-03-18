import {
  handleSubmit,
  handlePasswordToggleClick,
  setFocusInOutListenerById,
} from '/src/js/eventHandler';

function init() {
  console.log(localStorage.getItem('accessToken'));
  if (localStorage.getItem('accessToken')) {
    window.location.href = '/folder';
    return;
  }

  document
    .querySelector('.pw-toggle-btn')
    .addEventListener('click', handlePasswordToggleClick);
  setFocusInOutListenerById('#user-email');
  setFocusInOutListenerById('#password');
  document.querySelector('.sign-form').addEventListener('submit', handleSubmit);
}

init();
