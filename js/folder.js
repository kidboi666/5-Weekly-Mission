const logout_btn = document.querySelector('.logout_btn');

function logout() {
    localStorage.clear();
    location.href = 'index.html';
}

logout_btn.addEventListener('click', logout);