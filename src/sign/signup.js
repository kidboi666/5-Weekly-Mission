// 이메일 검사
function validateEmail(email) {
    const validate = /\S+@\S+\.\S+/;
    return validate.test(email);
}

// 이메일 및 비밀번호 검사 함수
function validateInput(inputValue, errorElement, errorMessage) {
    const trimmedValue = inputValue.trim();
    if (!trimmedValue) {
        errorElement.textContent = errorMessage;
        return false;
    }
    
    errorElement.textContent = '　';
    return true;
}

// 이메일 검사
document.getElementById('email').addEventListener('focusout', function() {
    const email = this.value.trim();
    const emailError = document.getElementById('email_error');
    if (!validateInput(email, emailError, '이메일을 입력해 주세요.')) {
        return;
    }
    
    if (!validateEmail(email)) {
        emailError.textContent = '올바른 이메일 주소가 아닙니다.';
        return;
    }
});

// 비밀번호 검사
document.getElementById('password').addEventListener('focusout', function() {
    const password = this.value.trim();
    const passwordError = document.getElementById('password_error');
    validateInput(password, passwordError, '비밀번호를 입력해 주세요.');
});

// 비밀번호 확인 검사
document.getElementById('passwordCheck').addEventListener('focusout', function() {
    const password = this.value.trim();
    const passwordCheck_error = document.getElementById('passwordCheck_error');
    validateInput(password, passwordCheck_error, '비밀번호를 입력해 주세요.');
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

