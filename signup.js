import {
    addErrorSign,
    removeErrorSign,
    checkEmailValid,
    checkPwdValid,
    checkError,
    setEyeOff,
    setEyeOn
} from "./utils.js";

import { signUpUrl, checkEmailUrl } from "./api.js"

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

function checkSignUpValid() {
    checkEmailDuplicated();
    if (emailInput.value === '') {
        emailError.innerText = '이메일을 입력해주세요';
        addErrorSign(emailInput,emailError);
    }
    if (pwdInput.value === '') {
        pwdError.innerText = '이메일을 입력해주세요';
        addErrorSign(pwdInput,pwdError);
    }
    if (pwdCheckInput.value !== pwdInput.value) {
        pwdCheckError.classList.remove('hide'); 
        addErrorSign(pwdCheckInput,pwdCheckError);
        pwdCheckError.innerText = '비밀번호가 맞지 않습니다.';
    } else {
        removeErrorSign(pwdCheckInput,pwdCheckError);
    }
    if (!checkError()) {
        postIdPwd();
    }
}

async function checkEmailDuplicated() {  
    try {
        const res = await fetch(checkEmailUrl, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                "email": emailInput.value,
            })
        });
        if (!res.ok) {
            throw new Error('Email already exists');
        } 
    } catch {
        addErrorSign(emailInput, emailError);
        emailError.innerText = '중복된 이메일입니다.'
    }
}

async function postIdPwd() {  
    const res = await fetch(signUpUrl, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            "email": emailInput.value,
            "password": pwdInput.value,
        })
    });
    location.href = 'folder.html';
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
        if (!checkPwdValid(pwdInput.value)) {
            pwdError.innerText = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
            addErrorSign(pwdInput, pwdError);
        }
    }
});

emailInput.addEventListener('focusin', () => {
    removeErrorSign(emailInput, emailError);
});

pwdInput.addEventListener('focusin', () => {
    removeErrorSign(pwdInput, pwdError);
});

pwdCheckInput.addEventListener('focusin', () => {
    removeErrorSign(pwdCheckInput, pwdCheckError);
});

input.forEach(element => {
    element.addEventListener('keyup', (e) => { 
        if (e.keyCode === 13) checkSignUpValid();
    });
});

signUpButton.addEventListener('click', checkSignUpValid);

pwdWrapper.addEventListener('mousedown', setEyeOn);

pwdWrapper.addEventListener('mouseup', setEyeOff) ;

pwdCheckWrapper.addEventListener('mousedown', setEyeOn);

pwdCheckWrapper.addEventListener('mouseup', setEyeOff) ;
