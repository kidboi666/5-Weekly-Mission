function removeAccessToken() {
  localStorage.removeItem('accessToken');
}

export function handleSignOut() {
  setTimeout(() => {
    console.log('click signout');
  }, 2000);
  if (!localStorage.getItem('accessToken')) {
    console.log('rejected');
    return;
  }
  removeAccessToken();
  window.location.href = '/';
}
