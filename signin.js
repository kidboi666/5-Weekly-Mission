import {
    addErrorSign,
    removeErrorSign,
    checkEmailValid,
    VALID_PASSWORD,
    VALID_EMAIL,
    setEyeOff,
    setEyeOn
} from "./utils.js";

const emailInput = document.querySelector('.email-input');
const pwdInput = document.querySelector('.pwd-input');
const loginButton = document.querySelector('.button-sign');
const emailError = document.querySelector('.email-error');
const pwdError = document.querySelector('.pwd-error');
const input = document.querySelectorAll('input');
const pwdWrapper = document.querySelector(".pwd-input-wrapper");

function loginCheck() {
    if (emailInput.value === VALID_EMAIL && pwdInput.value === VALID_PASSWORD) {
        location.href = 'folder.html';
    } else {
        addErrorSign(emailInput, emailError);
        emailError.innerText = '이메일을 확인해주세요';
        addErrorSign(pwdInput, pwdError);
        pwdError.innerText = '비밀번호를 확인해주세요';
    }
};

emailInput.addEventListener('focusout', () => {
    if (emailInput.value === '') {
        emailError.innerText = '이메일을 입력해주세요';
        addErrorSign(emailInput, emailError);
    } else {
        removeErrorSign(emailInput, emailError);
        if (!checkEmailValid(emailInput.value)) {
            addErrorSign(emailInput, emailError);
            emailError.innerText = '이메일을 형식을 확인해주세요';
        }
    }
});

pwdInput.addEventListener('focusout', () => {
    if (pwdInput.value === '') {
        addErrorSign(pwdInput, pwdError);
        pwdError.innerText = '비밀번호를 입력해주세요';
    } else {
        removeErrorSign(pwdInput, pwdError);
    }
});

emailInput.addEventListener('focusin', () => {
    removeErrorSign(emailInput, emailError);
});

pwdInput.addEventListener('focusin', () => {
    removeErrorSign(pwdInput, pwdError);
});

input.forEach(element => {
    element.addEventListener('keyup', (e) => { 
        if (e.keyCode === 13) {
            if (emailInput.value === '') {
                emailError.innerText = '이메일을 입력해주세요';
                addErrorSign(emailInput, emailError);
            } else loginCheck();
            if (pwdInput.value === '') {
                pwdError.innerText = '비밀번호를 입력해주세요';
                addErrorSign(pwdInput, pwdError);
            } else loginCheck();
        }
    });
});

pwdWrapper.addEventListener('mousedown', setEyeOn);

pwdWrapper.addEventListener('mouseup', setEyeOff) ;

loginButton.addEventListener('click', () => {
    loginCheck();
});
