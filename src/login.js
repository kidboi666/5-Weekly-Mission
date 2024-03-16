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

const signForm = document.querySelector("#sign-form");
signForm.addEventListener("submit", submitForm);
function submitForm(event) {
  event.preventDefault();

  const testUser =
    emailInput.value === USER_INFO.email && pwInput.value === USER_INFO.password;

  if (testUser) {
    location.href = "/folder";
    return;
  }
  inputError({ input: emailInput, errorMsg: emailErrorMsg }, "이메일을 확인해주세요.");
  inputError({ input: passwordInput, errorMsg: pwErrorMsg }, "비밀번호를 확인해주세요.");
}
