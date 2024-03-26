
const EmailForm = document.querySelector('.loginform'); //이메일폼
const PwForm = document.querySelector('.passwordform'); //비밀번호폼
const Emailinput = document.querySelector('.email'); //이메일 input 태그
const PWinput = document.querySelector('.password'); //비밀번호 input 태그

const emailErrorMessage = document.createElement('p'); //이메일 입력 오류 메세지
const pwErrorMessage = document.createElement('p');  //비밀번호 입력 오류 메세지

const login_button = document.querySelector('.login_button'); //로그인 버튼

const MANAGE_ID = "test@codeit.com";
const MANAGE_PW = "sprint101";

window.onload = function () {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        location.href = '../folder.html';
    }
};


function check_email_focusout() { //이메일 유효성 검사
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

function check_pw_focusout() { //비밀번호 유효성 검사
    if (PWinput.value === '') {
        pwErrorMessage.textContent = '비밀번호를 입력해주세요.';
        PWinput.classList.add('input_error');
        PwForm.lastElementChild.append(pwErrorMessage);
    }
    else {
        PWinput.classList.remove('input_error');
    }
}
function check_pw_focusin() {
    PWinput.classList.remove('input_error');
    pwErrorMessage.textContent = '';
}

async function check_to_login(event) {
    // 이메일과 비밀번호 입력 확인
    event.preventDefault();
    if (Emailinput.value === '' && PWinput.value === '') {
        // 이메일 또는 비밀번호가 입력되지 않은 경우
        emailErrorMessage.textContent = '이메일을 입력해주세요.';
        pwErrorMessage.textContent = '비밀번호를 입력해주세요.';
        Emailinput.classList.add('input_error');
        EmailForm.lastElementChild.append(emailErrorMessage);
        PWinput.classList.add('input_error');
        PwForm.lastElementChild.append(pwErrorMessage);
        return;
    }
    else if (Emailinput.value === '') {
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

    // 이메일 형식 확인
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    if (!emailRegex.test(Emailinput.value)) {
        //올바른 이메일 형식이 아닌 경우
        return;
    }

    // 아이디와 비밀번호 확인
    if (Emailinput.value !== MANAGE_ID || PWinput.value !== MANAGE_PW) {
        // 아이디 또는 비밀번호가 일치하지 않는 경우
        emailErrorMessage.textContent = '이메일을 확인해주세요.';
        pwErrorMessage.textContent = '비밀번호를 확인해주세요.';
        Emailinput.classList.add('input_error');
        EmailForm.lastElementChild.append(emailErrorMessage);
        PWinput.classList.add('input_error');
        PwForm.lastElementChild.append(pwErrorMessage);
        return;
    }

    // 로그인 성공 시 페이지 이동 또는 기타 작업 수행
    const url = 'https://bootcamp-api.codeit.kr/api/sign-in';
    const values = { email: Emailinput.value,
         password: PWinput.value
         };
    try {
        console.log(values);
        await signinPost(url, values);
    } catch (error) {
        console.error('Fetch 요청 중 에러가 발생하였습니다:', error);
    }
}

async function signinPost(url, values) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });

        if (response.ok) {
            const data = await response.json();
            if (data && data.data.accessToken) {
                localStorage.setItem('accessToken', data.data.accessToken);
                window.location.href = "folder.html";
            } else {
                console.error('accessToken이 응답에 없습니다.');
            }
        } else {
            console.error('Fetch 요청이 실패하였습니다. HTTP 상태 코드:', response.status);
        }
    } catch (error) {
        console.error('Fetch 요청 처리 중 에러가 발생하였습니다:', error);
    }
}

Emailinput.addEventListener('focusout', check_email_focusout);
Emailinput.addEventListener('focusin', check_email_focusin);
PWinput.addEventListener('focusout', check_pw_focusout);
PWinput.addEventListener('focusin', check_pw_focusin);
login_button.addEventListener('click', check_to_login);

