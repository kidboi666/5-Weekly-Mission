const EmailForm = document.querySelector('.loginform');
const PasswordForm = document.querySelector('.passwordform');
const CheckPasswordForm = document.querySelector('.check-passwordform');
const Emailinput = document.querySelector('.email');
const PWinput = document.querySelector('.password');
const checkPWinput = document.querySelector('.checkPassword');
const emailErrorMessage = document.createElement('p');
const pwErrorMessage = document.createElement('p');
const checkPwErrorMessage = document.createElement('p');
const signupBtn = document.querySelector('.signup-button');
const MANAGE_ID = "test@codeit.com";
const MANAGE_PW = "codeit101";

function check_email_focusout() { //이메일 유효성 검사
    if (Emailinput.value === '') {
        emailErrorMessage.textContent = '이메일을 입력해주세요.';
        Emailinput.classList.add('input_error');
        EmailForm.lastElementChild.append(emailErrorMessage);
    } else if (Emailinput.value === MANAGE_ID) {
        emailErrorMessage.textContent = '이미 사용중인 이메일입니다.';
        Emailinput.classList.add('input_error');
        EmailForm.lastElementChild.append(emailErrorMessage);
    } else {
        let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
        if (!emailRegex.test(Emailinput.value)) {
            emailErrorMessage.textContent = "올바른 이메일 주소가 아닙니다.";
            Emailinput.classList.add('input_error');
            EmailForm.lastElementChild.append(emailErrorMessage);
        } else {
            Emailinput.classList.remove('input_error');
        }
    }



}

function check_email_focusin() {
    Emailinput.classList.remove('input_error');
    emailErrorMessage.textContent = '';
}

function check_pw_right() { //비밀번호의 형식이 맞는지 검사
    const pwvalue = PWinput.value;
    if (!/^[a-zA-Z]+$/.test(pwvalue) && !/^\d+$/.test(pwvalue) && pwvalue.length >= 8) {
        return true;
    } else {
        return false;
    }
}

function check_pw_focusout() { //비밀번호 유효성 검사
    if (PWinput.value === '') {
        pwErrorMessage.textContent = '비밀번호를 입력해주세요.';
        PWinput.classList.add('input_error');
        PasswordForm.lastElementChild.append(pwErrorMessage);
    } else if (!check_pw_right()) {
        pwErrorMessage.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
        PWinput.classList.add('input_error');
        PasswordForm.lastElementChild.append(pwErrorMessage);
    }
    else {
        PWinput.classList.remove('input_error');
    }
}

function check_pw_focusin() {
    PWinput.classList.remove('input_error');
    pwErrorMessage.textContent = '';
}

function check_checkpw_focusout() {
    if (checkPWinput.value !== PWinput.value) {
        checkPwErrorMessage.textContent = '비밀번호가 일치하지 않아요.';
        checkPWinput.classList.add('input_error');
        CheckPasswordForm.lastElementChild.append(checkPwErrorMessage);
    }
    else {
        PWinput.classList.remove('input_error');
    }
}
function check_checkpw_focusin() {
    checkPWinput.classList.remove('input_error');
    checkPwErrorMessage.textContent = '';
}

function check_to_signup(e) {
    e.preventDefault(); // 기본 이벤트 방지


    // 이메일 유효성 검사
    if (Emailinput.value === '' && PWinput.value === '' ) {
        emailErrorMessage.textContent = '이메일을 입력해주세요.';
        Emailinput.classList.add('input_error');
        EmailForm.lastElementChild.append(emailErrorMessage);
        pwErrorMessage.textContent = '비밀번호를 입력해주세요.';
        PWinput.classList.add('input_error');
        PasswordForm.lastElementChild.append(pwErrorMessage);
        return;
    }
    else if(Emailinput.value === '') {
        emailErrorMessage.textContent = '이메일을 입력해주세요.';
        Emailinput.classList.add('input_error');
        EmailForm.lastElementChild.append(emailErrorMessage);
        return;
    }
    else if (PWinput.value === '') {
        pwErrorMessage.textContent = '비밀번호를 입력해주세요.';
        PWinput.classList.add('input_error');
        PasswordForm.lastElementChild.append(pwErrorMessage);
        return;
    }
    if (Emailinput.value === MANAGE_ID) {
        emailErrorMessage.textContent = '이미 사용중인 이메일입니다.';
        Emailinput.classList.add('input_error');
        EmailForm.lastElementChild.append(emailErrorMessage);
        return;
    }
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    if (!emailRegex.test(Emailinput.value)) {
        emailErrorMessage.textContent = "올바른 이메일 주소가 아닙니다.";
        Emailinput.classList.add('input_error');
        EmailForm.lastElementChild.append(emailErrorMessage);
        return;
    } 
    // else {
    //     Emailinput.classList.remove('input_error');
    // }


    // 비밀번호 유효성 검사
    if (PWinput.value === '') {
        pwErrorMessage.textContent = '비밀번호를 입력해주세요.';
        PWinput.classList.add('input_error');
        PasswordForm.lastElementChild.append(pwErrorMessage);
        return;
    }
    if (!check_pw_right()) {
        errors.push('비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
        return;
    }

    // 비밀번호 확인 일치 여부 확인
    if (checkPWinput.value !== PWinput.value) {
        pwErrorMessage.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
        PWinput.classList.add('input_error');
        PasswordForm.lastElementChild.append(pwErrorMessage);
        return;
    }

    window.location.href = "folder.html";
}



Emailinput.addEventListener('focusout', check_email_focusout);
Emailinput.addEventListener('focusin', check_email_focusin);
PWinput.addEventListener('focusout', check_pw_focusout);
PWinput.addEventListener('focusin', check_pw_focusin);
checkPWinput.addEventListener('focusout', check_checkpw_focusout);
checkPWinput.addEventListener('focusin', check_checkpw_focusin);
signupBtn.addEventListener('click', check_to_signup);