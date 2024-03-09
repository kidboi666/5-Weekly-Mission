const pwdInput = document.getElementById('passwordInput');
const togglePwd = document.getElementById('eye-off');

togglePwd.addEventListener('click', function () {
	if (pwdInput.type === 'password') {
		pwdInput.type = 'text';
		togglePwd.src = './image/eye-on.png'; 
	} else {
		pwdInput.type = 'password';
		togglePwd.src = './image/eye-off.svg'; 
	}
});
