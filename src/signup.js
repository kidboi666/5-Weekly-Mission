import {
    inputError,
    removeInputError,
    emailPattern,
    USER_INFO,
    pwLetter,
    pwNum
} from "./module.js"

const emailInput = document.querySelector("#email");
const emailErrorMsg = document.querySelector("#email-error");
emailInput.addEventListener('focusout', validateEmail());
function validateEmail(email) {
    if(email === "") {
        inputError({input: emailInput, errorMsg: emailErrorMsg}, "이메일을 입력해주세요");
        return;
    }
    if (!emailPattern(email)) {
        inputError({input: emailInput, errorMsg: emailErrorMsg}, "올바른 이메일 주소가 아닙니다");
        return;
    }
    if (emailInput.value === USER_INFO.email) {
        inputError({input: emailInput, errorMsg: emailErrorMsg}, "이미 사용 중인 이메일입니다");
        return;       
    }
    removeInputError({input: emailInput, errorMsg: emailErrorMsg});
}

const pwInput = document.querySelector("#paswword");
const pwErrorMsg = document.querySelector("#pw-error");
pwInput.addEventListener("focusout", (event) => pwRule(event.target.value));
function pwRule(password) {
    if(password.length < 8 || !pwLetter || !pwNum) {
        inputError({input:pwInput, errorMsg: pwErrorMsg}, "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요");
        return;
    }
}

const confirmPwInput = document.querySelector('#idenfity-password');
const confirmPwErrorMsg = document.querySelector('#dentify-pw-error');
confirmPwInput.addEventListener("focusout", (event) => valdateConfirmPw(event.target.value));
function valdateConfirmPw(confirmPassword) {
    if(confirmPwInput !== pwInput) {
        inputError({input:confirmPwInput, errorMsg: confirmPwErrorMsg}, "비밀번호를 입력해주세요");
        return;
    }
}

const signUpForm = document.querySelector('#sign-up-form');
signUpForm.addEventListener("submit", submit);
function submit(event) {
    event.preventDefault();
    location.href = "/folder";
}
