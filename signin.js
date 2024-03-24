import {
    addErrorSign,
    removeErrorSign,
    checkEmailValid,
    setEyeOff,
    setEyeOn,
} from "./utils.js";

import { signInUrl } from "./api.js";

const emailInput = document.querySelector('.email-input');
const pwdInput = document.querySelector('.pwd-input');
const loginButton = document.querySelector('.button-sign');
const emailError = document.querySelector('.email-error');
const pwdError = document.querySelector('.pwd-error');
const input = document.querySelectorAll('input');
const pwdWrapper = document.querySelector(".pwd-input-wrapper");

async function postIdPwd() {  
    try {
        const res = await fetch(signInUrl, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                "email": emailInput.value,
                "password": pwdInput.value,
            })
        });
        if (!res.ok) {
            throw new Error('bad request');
        } else location.href = 'folder.html';
    } catch {
        addErrorSign(emailInput, emailError);
        emailError.innerText = '이메일 확인 부탁!'
        addErrorSign(pwdInput, pwdError);
        pwdError.innerText = '비밀번호 확인 부탁!'
    }
}

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
            } else postIdPwd();
            if (pwdInput.value === '') {
                pwdError.innerText = '비밀번호를 입력해주세요';
                addErrorSign(pwdInput, pwdError);
            } else postIdPwd();
        }
    });
});

pwdWrapper.addEventListener('mousedown', setEyeOn);

pwdWrapper.addEventListener('mouseup', setEyeOff) ;

loginButton.addEventListener('click', () => {
    if (emailInput.value === '') {
        emailError.innerText = '이메일을 입력해주세요';
        addErrorSign(emailInput, emailError);
    } else postIdPwd();
    if (pwdInput.value === '') {
        pwdError.innerText = '비밀번호를 입력해주세요';
        addErrorSign(pwdInput, pwdError);
    } else postIdPwd();
});
