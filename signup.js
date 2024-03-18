const emailInput = document.querySelector('.email-input');
const pwdInput = document.querySelector('.pwd-input');
const pwdCheckInput = document.querySelector('.pwd-input-check');
const emailError = document.querySelector('.email-error');
const pwdError = document.querySelector('.pwd-error');
const pwdCheckError = document.querySelector('.pwd-check-error');
const signUpButton = document.querySelector('.button-sign');
const pwdWrapper = document.querySelector(".pwd-input-wrapper");
const pwdCheckWrapper = document.querySelector(".pwd-input-check-wrapper");
const input = document.querySelectorAll('input');
const VALID_EMAIL = 'test@codeit.com';

function checkEmailValid(emailAddress) {		
    const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    return email_regex.test(emailAddress);
}

function checkPwdValid(pwdValue) {	
    const pwd_regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/i;
    return pwd_regex.test(pwdValue);
}

function checkError() {
    if (document.querySelector('.error-border')) return true;
    else return false;
}

emailInput.addEventListener('focusout', () => {
    if (emailInput.value === '') {
        emailError.innerText = '이메일을 입력해주세요';
        emailInput.classList.add('error-border');
        emailError.classList.remove('hide');
    } 
    else {
        emailInput.classList.remove('error-border');
        emailError.classList.add('hide');
        if (!checkEmailValid(emailInput.value)) {
            emailInput.classList.add('error-border');
            emailError.classList.remove('hide');
            emailError.innerText = '이메일을 형식을 확인해주세요';
        }
        if (emailInput.value === VALID_EMAIL) {
            emailError.innerText = '이미 사용중인 이메일입니다';
            emailInput.classList.add('error-border');
            emailError.classList.remove('hide');
        }
    }
});

pwdInput.addEventListener('focusout', () => {
    if (pwdInput.value === '') {
        pwdError.classList.remove('hide'); 
        pwdInput.classList.add('error-border');
        pwdError.innerText = '비밀번호를 입력해주세요';
    }
    else {
        pwdError.classList.add('hide'); 
        pwdInput.classList.remove('error-border');
        if (!checkPwdValid(pwdInput.value)) {
            pwdError.innerText = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
            pwdError.classList.remove('hide'); 
            pwdInput.classList.add('error-border');
        }
    }
});

emailInput.addEventListener('focusin', () => {
    emailError.classList.add('hide'); 
    emailInput.classList.remove('error-border');
});

pwdInput.addEventListener('focusin', () => {
    pwdError.classList.add('hide'); 
    pwdInput.classList.remove('error-border');
});

pwdCheckInput.addEventListener('focusin', () => {
    pwdCheckError.classList.add('hide'); 
    pwdCheckInput.classList.remove('error-border');
});

input.forEach(element => {
    element.addEventListener('keyup', (e) => { 
        if (e.keyCode === 13){
            if (emailInput.value === '') {
                emailError.innerText = '이메일을 입력해주세요';
                emailInput.classList.add('error-border');
                emailError.classList.remove('hide');
            }
            if (pwdInput.value === '') {
                pwdError.innerText = '이메일을 입력해주세요';
                pwdInput.classList.add('error-border');
                pwdError.classList.remove('hide');
            }
            if (pwdCheckInput.value !== pwdInput.value) {
                pwdCheckError.classList.remove('hide'); 
                pwdCheckInput.classList.add('error-border');
                pwdCheckError.innerText = '비밀번호가 일치하지 않아요';
            } else {
                pwdCheckError.classList.add('hide'); 
                pwdCheckInput.classList.remove('error-border');
            }
            if (!checkError()) {
                location.href = 'folder.html';
            }
        }
    });
});

pwdWrapper.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('eyeOnOff')) {
        pwdInput.setAttribute('type','text');
        e.target.setAttribute("src","images/eye-on.svg");
    }
});

pwdWrapper.addEventListener('mouseup', (e) => {
    if (e.target.classList.contains('eyeOnOff')) {
        pwdInput.setAttribute('type','password');
        e.target.setAttribute("src","images/eye-off.svg");
    }
});

pwdCheckWrapper.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('eyeOnOff')) {
        pwdCheckInput.setAttribute('type','text');
        e.target.setAttribute("src","images/eye-on.svg");
    }
});

pwdCheckWrapper.addEventListener('mouseup', (e) => {
    if (e.target.classList.contains('eyeOnOff')) {
        pwdCheckInput.setAttribute('type','password');
        e.target.setAttribute("src","images/eye-off.svg");
    }
});

signUpButton.addEventListener('click', () => {
    if (emailInput.value === '') {
        emailError.innerText = '이메일을 입력해주세요';
        emailInput.classList.add('error-border');
        emailError.classList.remove('hide');
    }
    if (pwdInput.value === '') {
        pwdError.innerText = '이메일을 입력해주세요';
        pwdInput.classList.add('error-border');
        pwdError.classList.remove('hide');
    }
    if (pwdCheckInput.value !== pwdInput.value) {
        pwdCheckError.classList.remove('hide'); 
        pwdCheckInput.classList.add('error-border');
        pwdCheckError.innerText = '비밀번호가 일치하지 않아요';
    } else {
        pwdCheckError.classList.add('hide'); 
        pwdCheckInput.classList.remove('error-border');
    }
    if (!checkError()) {
        location.href = 'folder.html';
    }
});
