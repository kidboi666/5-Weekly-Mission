import {
    inputError,
    removeInputError,
    emailPattern,
    USER_INFO
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
    removeInputError({input: emailInput, errorMsg: emailErrorMsg});
}



const pwInput = document.querySelector("#paswword");
const pwErrorMsg = document.querySelector("#pw-error");
pwInput.addEventListener("focusout", (event) => validatePw(event.target.value));
function validatePw(password) {
    if (password === "") {
        inputError({input:pwInput, errorMsg: pwErrorMsg}, "비밀번호를 입력해주세요");
        return;
    }
    removeInputError({input:pwInput, errorMsg: pwErrorMsg});
}

//로그인 시도
const userInfo = emailInput === USER_INFO.email && pwInput === USER_INFO.password
if(userInfo) {
    location.href = "/foler";
    return;
}
