const emailInput = document.querySelector('.email-input');
const pwdInput = document.querySelector('.pwd-input');
const loginButton = document.querySelector('.button-sign');
const checkPwd = document.querySelector('.check-pwd');
const eyeIcon = document.querySelector('.pwd-eye-off');
const emailError = document.querySelector('.email-error');
const pwdError = document.querySelector('.pwd-error');
const eyeOnoff = document.getElementById("eyeOnOff");
const input = document.querySelectorAll('input');
const VALID_EMAIL = 'test@codeit.com';
const VALID_PASSWORD = 'codeit101';

function checkEmailValid(emailAddress) {		
    const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    return email_regex.test(emailAddress);
}

function addEmailErrorSign() {
    emailError.classList.remove('hide');
    emailInput.classList.add('error-border');
}

function removeEmailErrorSign() {
    emailError.classList.add('hide');
    emailInput.classList.remove('error-border');
}

function addPwdErrorSign() {
    pwdError.classList.remove('hide');
    pwdInput.classList.add('error-border');
}

function removePwdErrorSign() {
    pwdError.classList.add('hide');
    pwdInput.classList.remove('error-border');
}

function loginCheck() {
    if (emailInput.value === VALID_EMAIL && pwdInput.value === VALID_PASSWORD) {
        location.href = 'folder.html';
    } else {
        addEmailErrorSign();
        emailError.innerText = '이메일을 확인해주세요';
        addPwdErrorSign();
        pwdError.innerText = '비밀번호를 확인해주세요';
    }
};

emailInput.addEventListener('focusout', () => {
    if (emailInput.value === '') {
        emailError.innerText = '이메일을 입력해주세요';
        addEmailErrorSign();
    } else {
        removeEmailErrorSign();
        if (!checkEmailValid(emailInput.value)) {
            addEmailErrorSign();
            emailError.innerText = '이메일을 형식을 확인해주세요';
        }
    }
});

pwdInput.addEventListener('focusout', () => {
    if(pwdInput.value === '') {
        addPwdErrorSign();
        pwdError.innerText = '비밀번호를 입력해주세요';
    } else {
        removePwdErrorSign();
    }
});

emailInput.addEventListener('focusin', () => {
    removeEmailErrorSign();
});

pwdInput.addEventListener('focusin', () => {
    removePwdErrorSign();
});

input.forEach(element => {
    element.addEventListener('keyup', (e) => { 
        if (e.keyCode === 13) {
            if (emailInput.value === '') {
                emailError.innerText = '이메일을 입력해주세요';
                addEmailErrorSign();
            } else loginCheck();
            if (pwdInput.value === '') {
                pwdError.innerText = '비밀번호를 입력해주세요';
                addPwdErrorSign();
            } else loginCheck();
        }
    });
});

eyeIcon.addEventListener('mousedown', () => {
    pwdInput.setAttribute('type','text');
    eyeOnoff.setAttribute("src","images/eye-on.svg");
});

eyeIcon.addEventListener('mouseup', () => {
    pwdInput.setAttribute('type','password');
    eyeOnoff.setAttribute("src","images/eye-off.svg");
});

eyeIcon.addEventListener('click', (e) => {
    e.preventDefault();
});

loginButton.addEventListener('click', () => {
    loginCheck();
});

export {checkEmailValid, addEmailErrorSign, addPwdErrorSign, removeEmailErrorSign, removePwdErrorSign} ;
