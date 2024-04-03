import {
    addErrorSign,
    removeErrorSign,
    checkEmailValid,
    setEyeOff,
    setEyeOn,
} from "./utils.js";
import { signInUrl, postData, checkAccessToken, saveAccessTokenToLocalStorage } from './api.js'

const emailInput = document.querySelector('.email-input');
const pwdInput = document.querySelector('.pwd-input');
const loginButton = document.querySelector('.button-sign');
const emailError = document.querySelector('.email-error');
const pwdError = document.querySelector('.pwd-error');
const input = document.querySelectorAll('input');
const pwdWrapper = document.querySelector(".pwd-input-wrapper");

checkAccessToken('signInToken');

async function postIdPwd() {
    const signinInputData = {
        "email": emailInput.value,
        "password": pwdInput.value,
    }
    try {
        const res = await postData(signInUrl, signinInputData);
        if (!res.ok) {
            throw new Error('bad request');
        } 

        const result = await res.json();
        saveAccessTokenToLocalStorage(result, 'signInToken')

        location.href = 'folder.html';
    } catch {
        addErrorSign(emailInput, emailError, '이메일 확인 부탁!');
        addErrorSign(pwdInput, pwdError, '비밀번호 확인 부탁!');
    }
}

emailInput.addEventListener('focusout', () => {
    if (emailInput.value === '') {
        addErrorSign(emailInput, emailError, '이메일을 입력해주세요');
    } else {
        removeErrorSign(emailInput, emailError);
        if (!checkEmailValid(emailInput.value)) {
            addErrorSign(emailInput, emailError, '이메일을 형식을 확인해주세요');
        }
    }
});

pwdInput.addEventListener('focusout', () => {
    if (pwdInput.value === '') {
        addErrorSign(pwdInput, pwdError, '비밀번호를 입력해주세요');
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

pwdWrapper.addEventListener('mousedown', setEyeOn);

pwdWrapper.addEventListener('mouseup', setEyeOff) ;

input.forEach(element => {
    element.addEventListener('keyup', (e) => { 
        if (e.keyCode === 13) {
            postIdPwd();
        }
    });
});

loginButton.addEventListener('click', () => {
    postIdPwd();
});
