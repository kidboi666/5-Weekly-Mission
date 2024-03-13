const signInEmailInput = document.querySelector('.signin-email-input');
const signInPasswordInput = document.querySelector('.signin-password-input');
const signUpEmailInput = document.querySelector('.signup-email-input');
const signUpPasswordInput = document.querySelector('.signup-password-input');
const emailErrorMsg = document.querySelector('.email-error-msg');
const signUpEmailErrorMsg = document.querySelector('.signup-email-error-msg');
const signUpPasswordCheckInput = document.querySelector('.signup-password-check-input');
const passwordCheckErrorMsg = document.querySelector('.password-check-error-msg');
const passwordErrorMsg = document.querySelector('.password-error-msg');
const signInLogin = document.querySelector('.signin-login');
const passwordImg = document.querySelector('.password-img');
const passwordImgCheck = document.querySelector('.password-img-check');
const MEMBER_ID = "test@codeit.com";
const MEMBER_PASSWORD = "codeit101";

function checkEmailBlank() {
    const signInEmailInputValue = signInEmailInput.value;

    if (!signInEmailInputValue) {
        emailErrorMsg.textContent = "이메일을 입력해주세요.";
        signInEmailInput.style.border = "1px solid red";
    }
}

function checkEmail(emailInput) {
    const emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if (!emailRegex.test(emailInput)) {
        return false;
    } else {
        return true;
    }
}

function checkEmailValid() {
    const signInEmailInputValue = signInEmailInput.value;

    if (!checkEmail(signInEmailInputValue)) {
        emailErrorMsg.textContent = "올바른 이메일 주소가 아닙니다.";
        signInEmailInput.style.border = "1px solid red";
    } else {
        emailErrorMsg.textContent = "";
        signInEmailInput.style.border = "1px solid #9fa6b2";
    }
}

function checkEmailDuplicate() {
    const signUpEmailInputValue = signUpEmailInput.value;

    if (signUpEmailInputValue === MEMBER_ID) {
        signUpEmailErrorMsg.textContent = "이미 사용 중인 이메일입니다.";
    }
}

function checkPasswordBlank() {
    const signInPasswordInputValue = signInPasswordInput.value;

    if (!signInPasswordInputValue) {
        passwordErrorMsg.textContent = "비밀번호를 입력해주세요.";
        signInPasswordInput.style.border = "1px solid red";
    } else {
        passwordErrorMsg.textContent = "";
        signInPasswordInput.style.border = "1px solid #9fa6b2";
    }
}

function checkPassword(passwordInput) {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/;

    if (!passwordRegex.test(passwordInput)) {
        return false;
    } else {
        return true;
    }
}

function checkPasswordValid() {
    const signUpPasswordInputValue = signUpPasswordInput.value;

    if (!checkPassword(signUpPasswordInputValue)) {
        passwordErrorMsg.textContent = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
        signUpPasswordInput.style.border = "1px solid red";
    } else {
        passwordErrorMsg.textContent = "";
        signUpPasswordInput.style.border = "1px solid #9fa6b2";
    }
}

function checkPasswordDuplicate() {
    const signInPasswordInputValue = signInPasswordInput.value;
    const signUpPasswordCheckInputValue = signUpPasswordCheckInput.value;

    if (signInPasswordInputValue !== signUpPasswordCheckInputValue) {
        passwordCheckErrorMsg.textContent = "비밀번호가 일치하지 않아요.";
        signUpPasswordCheckInput.style.border = "1px solid red";
    } else {
        passwordCheckErrorMsg.textContent = "";
        signUpPasswordCheckInput.style.border = "1px solid #9fa6b2";
    }
}

function checkMember() {
    const signInEmailInputValue = signInEmailInput.value;
    const signInPasswordInputValue = signInPasswordInput.value;

    if (signInEmailInputValue === MEMBER_ID && signInPasswordInputValue === MEMBER_PASSWORD) {
        window.location.href = '/folder';
    } else {
        emailErrorMsg.textContent = "이메일을 확인해주세요.";
        signInEmailInput.style.border = "1px solid red";
        passwordErrorMsg.textContent = "비밀번호를 확인해주세요.";
        signInPasswordInput.style.border = "1px solid red";
    }
}

function passwordToggle() {
    if (passwordImg.getAttribute('alt') === "closed-eye") {
        passwordImg.setAttribute('alt', "opened-eye");
        passwordImg.setAttribute('src', "./img/unhidden.svg");
        signInPasswordInput.setAttribute('type', 'text');
    } else if (passwordImg.getAttribute('alt') === "opened-eye") {
        passwordImg.setAttribute('alt', "closed-eye");
        passwordImg.setAttribute('src', "./img/hidden.svg");
        signInPasswordInput.setAttribute('type', 'password');
    }
}

function passwordToggleCheck() {
    if (passwordImgCheck.getAttribute('alt') === "opened-eye-second") {
        passwordImgCheck.setAttribute('alt', "closed-eye-second");
        passwordImgCheck.setAttribute('src', "./img/hidden.svg");
        signUpPasswordCheckInput.setAttribute('type', 'password');
    } else if (passwordImgCheck.getAttribute('alt') === "closed-eye-second") {
        passwordImgCheck.setAttribute('alt', "opened-eye-second");
        passwordImgCheck.setAttribute('src', "./img/unhidden.svg");
        signUpPasswordCheckInput.setAttribute('type', 'text');
    }
}

function pressEnterToLogin(e) {
    if (e.key === 'Enter') {
        checkMember();
    }
}

signInEmailInput.addEventListener('blur', checkEmailValid);
signInEmailInput.addEventListener('input', checkEmailValid);
signInEmailInput.addEventListener('blur', checkEmailBlank);
signInEmailInput.addEventListener('input', checkEmailBlank);
signInEmailInput.addEventListener('keydown', pressEnterToLogin);

signInPasswordInput.addEventListener('blur', checkPasswordBlank);
signInPasswordInput.addEventListener('input', checkPasswordBlank);
signInPasswordInput.addEventListener('keydown', pressEnterToLogin);

signInLogin.addEventListener('click', checkMember);
passwordImg.addEventListener('click', passwordToggle);
passwordImgCheck.addEventListener('click', passwordToggleCheck);

signUpEmailInput.addEventListener('blur', checkEmailDuplicate);
signUpEmailInput.addEventListener('input', checkEmailDuplicate);

signUpPasswordCheckInput.addEventListener('input', checkPasswordDuplicate);
signUpPasswordInput.addEventListener('input', checkPasswordValid);
