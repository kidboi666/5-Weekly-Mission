// 이메일 검사
function validateEmail(email) {
    const validate = /\S+@\S+\.\S+/;
    return validate.test(email);
}

document.getElementById('email').addEventListener('focusout', function() {
    const email = this.value.trim();
    const emailError = document.getElementById('email_error');
    if (email === '') {
        emailError.textContent = '이메일을 입력해 주세요.';
    } else if (!validateEmail(email)) {
        emailError.textContent = '올바른 이메일 주소가 아닙니다.';
    } else {
        emailError.textContent = '　';
    }
});

// 비밀번호 검사
document.getElementById('password').addEventListener('focusout', function() {
    const password = this.value.trim();
    const passwordError = document.getElementById('password_error');
    if (password === '') {
        passwordError.textContent = '비밀번호를 입력해 주세요.';
    } else {
        passwordError.textContent = '　';
    }
});

// 비밀번호 확인 검사
document.getElementById('passwordCheck').addEventListener('focusout', function() {
    const password = this.value.trim();
    const passwordCheckError = document.getElementById('passwordCheck_error');
    if (password === '') {
        passwordCheckError.textContent = '비밀번호를 다시 입력해 주세요.';
    } else {
        passwordCheckError.textContent = '　';
    }
});

// password eye toggle
const eyeToggle = document.getElementById('eye_toggle');
const passwordInput = document.getElementById('password');

eyeToggle.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    if (type === 'text') {
        eyeToggle.classList.add('on');
    } else {
        eyeToggle.classList.remove('on');
    }
});

// password check eye toggle
const eyeToggle2 = document.getElementById('eye_toggle2');
const passwordCheckInput = document.getElementById('passwordCheck');

eyeToggle2.addEventListener('click', function() {
    const type = passwordCheckInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordCheckInput.setAttribute('type', type);

    if (type === 'text') {
        eyeToggle2.classList.add('on');
    } else {
        eyeToggle2.classList.remove('on');
    }
});

