import { handleSignOut } from './js/signout';

function init() {
  if (localStorage.getItem('accessToken')) {
    console.log('signed in');
    document.querySelector('#sign-in-btn').classList.toggle('blind');
    document.querySelector('#sign-out-btn').classList.toggle('blind');
    document
      .querySelector('#sign-out-btn')
      .addEventListener('click', handleSignOut);
  }
}

init();
