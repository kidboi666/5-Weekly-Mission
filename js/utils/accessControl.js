document.addEventListener('DOMContentLoaded', () => {
  const accessToken = localStorage.getItem('accessToken');

  if (accessToken && (window.location.pathname === '/login.html' || window.location.pathname ===
    '/signup.html')) {
    window.location.href = '/folder.html';
  }
});