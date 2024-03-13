const signInEmailInput = document.querySelector('.signin-email-input');
const signInPasswordInput = document.querySelector('.signin-password-input');
const emailErrorMsg = document.querySelector('.email-error-msg');
const passwordErrorMsg = document.querySelector('.password-error-msg');
const signInLogin = document.querySelector('.signin-login');
const passwordImg = document.querySelector('.password-img');
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
    const isCheckEmail = checkEmail(signInEmailInputValue);

    // if (!checkEmail(signInEmailInputValue)) {
    //     emailErrorMsg.textContent = "올바른 이메일 주소가 아닙니다.";
    //     signInEmailInput.style.border = "1px solid red";
    // } else {
    //     emailErrorMsg.textContent = "";
    //     signInEmailInput.style.border = "1px solid #9fa6b2";
    // }

    emailErrorMsg.textContent = isCheckEmail ? '' : "올바른 이메일 주소가 아닙니다.";
    signInEmailInput.style.border = `1px solid ${isCheckEmail ? "#9fa6b2" : "red"}`;
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
    if (passwordImg.getAttribute('src') === "./img/hidden.svg") {
        passwordImg.setAttribute('src', "./img/unhidden.svg");
        signInPasswordInput.setAttribute('type', 'text');
    } else {
        passwordImg.setAttribute('src', "./img/hidden.svg");
        signInPasswordInput.setAttribute('type', 'password');
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
