const signUpEmailInput = document.querySelector('.signup-email-input');
const signUpEmailErrorMsg = document.querySelector('.signup-email-error-msg');
const signUpPasswordInput = document.querySelector('.signup-password-input');
const signUpPasswordCheckInput = document.querySelector('.signup-password-check-input');
const signUpPasswordErrorMsg = document.querySelector('.signup-password-error-msg');
const passwordCheckErrorMsg = document.querySelector('.password-check-error-msg');
const passwordImg = document.querySelector('.password-img');
const passwordImgCheck = document.querySelector('.password-img-check');

const MEMBER_ID = "test@codeit.com";
const MEMBER_PASSWORD = "codeit101";

function signUpCheckEmailBlank() {
    const signUpEmailInputValue = signUpEmailInput.value;
    let isSignUpCheckEmailBlank = false;

    if (!signUpEmailInputValue) {
        signUpEmailErrorMsg.textContent = "이메일을 입력해주세요.";
        signUpEmailInput.style.border = "1px solid red";
        isSignUpCheckEmailBlank = true;
    }

    return isSignUpCheckEmailBlank;
}

function signUpCheckEmail(emailInput) {
    const emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    
    if (!emailRegex.test(emailInput)) {
        return false;
    } else {
        return true;
    }
}

function signUpCheckEmailValid() {
    const signUpEmailInputValue = signUpEmailInput.value;
    let isSignUpEmailValid = false;

    if (!signUpCheckEmail(signUpEmailInputValue)) {
        signUpEmailErrorMsg.textContent = "올바른 이메일 주소가 아닙니다.";
        signUpEmailInput.style.border = "1px solid red";
        isSignUpEmailValid = false;
    } else {
        signUpEmailErrorMsg.textContent = "";
        signUpEmailInput.style.border = "1px solid #9fa6b2";
        isSignUpEmailValid = true;
    }

    return isSignUpEmailValid;
}

function signUpcheckEmailDuplicate() {
    const signUpEmailInputValue = signUpEmailInput.value;
    let isEmailDuplicate = true;

    if (signUpEmailInputValue === MEMBER_ID) {
        signUpEmailErrorMsg.textContent = "이미 사용 중인 이메일입니다.";
        signUpEmailInput.style.border = "1px solid red";
        isEmailDuplicate = true;
    } else {
        isEmailDuplicate = false;
    }

    return isEmailDuplicate;
}

function signUpCheckPasswordBlank() {
    const signUpPasswordInputValue = signUpPasswordInput.value;
    let isSignUpCheckPasswordBlank = false;

    if (!signUpPasswordInputValue) {
        signUpPasswordErrorMsg.textContent = "비밀번호를 입력해주세요.";
        signUpPasswordInput.style.border = "1px solid red";
        isSignUpCheckPasswordBlank = true;
    } else {
        signUpPasswordErrorMsg.textContent = "";
        signUpPasswordInput.style.border = "1px solid #9fa6b2";
        isSignUpCheckPasswordBlank = false;
    }

    return isSignUpCheckPasswordBlank;
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
    let isCheckPasswordValid = false;

    if (!checkPassword(signUpPasswordInputValue)) {
        signUpPasswordErrorMsg.textContent = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
        signUpPasswordInput.style.border = "1px solid red";
        isCheckPasswordValid = false;
    } else {
        signUpPasswordErrorMsg.textContent = "";
        signUpPasswordInput.style.border = "1px solid #9fa6b2";
        isCheckPasswordValid = true;
    }

    return isCheckPasswordValid;

}

function checkPasswordDuplicate() {
    const signUpPasswordInputValue = signUpPasswordInput.value;
    const signUpPasswordCheckInputValue = signUpPasswordCheckInput.value;
    let isCheckPasswordDuplicate = false;

    if (signUpPasswordInputValue !== signUpPasswordCheckInputValue) {
        passwordCheckErrorMsg.textContent = "비밀번호가 일치하지 않아요.";
        signUpPasswordCheckInput.style.border = "1px solid red";
        isCheckPasswordDuplicate = false;
    } else {
        passwordCheckErrorMsg.textContent = "";
        signUpPasswordCheckInput.style.border = "1px solid #9fa6b2";
        isCheckPasswordDuplicate = true;
    }

    return isCheckPasswordDuplicate;
}

function passwordToggle() {
    if (passwordImg.getAttribute('alt') === "closed-eye") {
        passwordImg.setAttribute('alt', "opened-eye");
        passwordImg.setAttribute('src', "./img/unhidden.svg");
        signUpPasswordInput.setAttribute('type', 'text');
    } else if (passwordImg.getAttribute('alt') === "opened-eye") {
        passwordImg.setAttribute('alt', "closed-eye");
        passwordImg.setAttribute('src', "./img/hidden.svg");
        signUpPasswordInput.setAttribute('type', 'password');
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

// 유효한 비밀번호인지 확인하는 조건들
// 이메일이 빈칸인 경우 => O
// 이메일이 중복인 경우 => O
// 이메일이 유효하지 않은 경우 => O
// 비밀번호가 빈칸인 경우 => O
// 비밀번호가 유효하지 않은 경우 => O
// 비밀번호 확인이 빈칸인 경우 => O
// 비밀번호 확인이 일치하지 않은 경우 => O

function checkMemberValid() {
    if (signUpCheckEmailBlank() === true) {
        signUpEmailErrorMsg.textContent = "이메일을 입력해주세요.";
        signUpEmailInput.style.border = "1px solid red";
        
        return
    }

    if (signUpcheckEmailDuplicate() === true) {
        signUpEmailErrorMsg.textContent = "이미 사용 중인 이메일입니다.";
        signUpEmailInput.style.border = "1px solid red";

        return
    }

    if (signUpCheckEmailValid() === false) {
        signUpEmailErrorMsg.textContent = "올바른 이메일 주소가 아닙니다.";
        signUpEmailInput.style.border = "1px solid red";

        return
    }

    if (signUpCheckPasswordBlank() === true) {
        signUpPasswordErrorMsg.textContent = "비밀번호를 입력해주세요.";
        signUpPasswordInput.style.border = "1px solid red";
        
        return
    }

    if (checkPasswordValid() === false) {
        signUpPasswordErrorMsg.textContent = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
        signUpPasswordInput.style.border = "1px solid red";
        console.log('checkpasswordvalid');
        return
    }

    if (checkPasswordDuplicate() === false) {
        passwordCheckErrorMsg.textContent = "비밀번호가 일치하지 않아요.";
        signUpPasswordCheckInput.style.border = "1px solid red";
        
        return
    } 

    window.location.href = '/folder';
}

function pressEnterToSignUp(e) {
    if (e.key === 'Enter') {
        checkMemberValid();
    }
}

signUpEmailInput.addEventListener('blur', signUpCheckEmailValid);
signUpEmailInput.addEventListener('input', signUpCheckEmailValid);
signUpEmailInput.addEventListener('blur', signUpCheckEmailBlank);
signUpEmailInput.addEventListener('input', signUpCheckEmailBlank);
signUpEmailInput.addEventListener('keydown', pressEnterToSignUp);

signUpPasswordInput.addEventListener('blur', signUpCheckPasswordBlank);
signUpPasswordInput.addEventListener('input', signUpCheckPasswordBlank);
signUpPasswordInput.addEventListener('keydown', pressEnterToSignUp);

signUpEmailInput.addEventListener('blur', signUpcheckEmailDuplicate);
signUpEmailInput.addEventListener('input', signUpcheckEmailDuplicate);

signUpPasswordInput.addEventListener('input', checkPasswordValid);
signUpPasswordCheckInput.addEventListener('input', checkPasswordDuplicate);
signUpPasswordCheckInput.addEventListener('keydown', pressEnterToSignUp);

passwordImg.addEventListener('click', passwordToggle);
passwordImgCheck.addEventListener('click', passwordToggleCheck);
