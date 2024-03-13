const EmailForm = document.querySelector('.loginform'); //이메일폼
const PwForm = document.querySelector('.passwordform'); //비밀번호폼
const Emailinput = document.querySelector('.email'); //이메일 input 태그
const PWinput = document.querySelector('.password'); //비밀번호 input 태그

const emailErrorMessage = document.createElement('p'); //이메일 입력 오류 메세지
const pwErrorMessage = document.createElement('p');  //비밀번호 입력 오류 메세지

const login_button = document.querySelector('.login_button'); //로그인 버튼

const Manage_ID = "test@codeit.com";
const Manage_PW = "codeit101"; 

function check_email_focusout() {
    if (Emailinput.value === '') {
        emailErrorMessage.textContent = '이메일을 입력해주세요.';
        Emailinput.classList.add('input_error');
        EmailForm.lastElementChild.append(emailErrorMessage);
    }
    else {
        let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
        if (!emailRegex.test(Emailinput.value)) {
            emailErrorMessage.textContent = "올바른 이메일 주소가 아닙니다.";
            Emailinput.classList.add('input_error');
            EmailForm.lastElementChild.append(emailErrorMessage);
        }
        else {
            Emailinput.classList.remove('input_error');
        }
    }
}

function check_email_focusin() {
    Emailinput.classList.remove('input_error');
    emailErrorMessage.textContent = '';
}

function check_pw_focusout() {
    if (PWinput.value === '') {
        pwErrorMessage.textContent = '비밀번호를 입력해주세요.';
        PWinput.classList.add('input_error');
        PwForm.lastElementChild.append(pwErrorMessage);
    }
    else {
        PWinputinput.classList.remove('input_error');
    }
}
function check_pw_focusin() {
    PWinput.classList.remove('input_error');
    pwErrorMessage.textContent = '';
}

function check_to_login(event) {
    // 이메일과 비밀번호 입력 확인
    if (Emailinput.value === '' || PWinput.value === '') {
        // 이메일 또는 비밀번호가 입력되지 않은 경우
        emailErrorMessage.textContent = '이메일을 입력해주세요.';
        pwErrorMessage.textContent = '비밀번호를 입력해주세요.';
        Emailinput.classList.add('input_error');
        EmailForm.lastElementChild.append(emailErrorMessage);
        PWinput.classList.add('input_error');
        PwForm.lastElementChild.append(pwErrorMessage);
        event.preventDefault();
        return;
    }

    // 이메일 형식 확인
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    if (!emailRegex.test(Emailinput.value)) {
        //올바른 이메일 형식이 아닌 경우
        event.preventDefault();
        return;
    }

    // 아이디와 비밀번호 확인
    if (Emailinput.value !== Manage_ID || PWinput.value !== Manage_PW) {
        // 아이디 또는 비밀번호가 일치하지 않는 경우
        emailErrorMessage.textContent = '이메일을 확인해주세요.';
        pwErrorMessage.textContent = '비밀번호를 확인해주세요.';
        Emailinput.classList.add('input_error');
        EmailForm.lastElementChild.append(emailErrorMessage);
        PWinput.classList.add('input_error');
        PwForm.lastElementChild.append(pwErrorMessage);
        event.preventDefault();
        return;
    }

    // 로그인 성공 시 페이지 이동 또는 기타 작업 수행
    window.location.href = "./folder.html";
}


Emailinput.addEventListener('focusout', check_email_focusout);
Emailinput.addEventListener('focusin', check_email_focusin);
PWinput.addEventListener('focusout', check_pw_focusout);
PWinput.addEventListener('focusin', check_pw_focusin);
login_button.addEventListener('click', check_to_login);
