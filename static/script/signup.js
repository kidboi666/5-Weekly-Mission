import { email, emailTag, pw, passwordTag, testId, testPassword, emailCheck } from './common.js';
//비밀번호 확인 input
const verifyPassword = document.querySelector('.verify-password');
const verifyTag = document.querySelector('.verifyTag')
// 회원가입 button
const signupBtn = document.querySelector('.signupBtn');
// 비밀번호 눈 아이콘
const passwordEyes = document.querySelector('.password-eyes');
const verifyEyes = document.querySelector(".verify-eyes");



//emailInput focus-out시 이벤트 함수
function idFocusOut(e) {
    let emailNotice = document.querySelector('.email-notice');

    if (emailNotice) {
        email.style.borderColor = 'gray';
        emailNotice.remove();
    }
    const emailInput = document.createElement('p');
    emailInput.className = 'email-notice';
    emailInput.style.color = 'red';

    if(e.target.value == '') {
        email.style.borderColor = 'red';
        emailInput.textContent = '이메일을 입력해주세요.';
        emailTag.append(emailInput);
    } else if (!emailCheck.test(e.target.value)) {
        email.style.borderColor = 'red';
        emailInput.textContent = '올바른 이메일 주소가 아닙니다.';
        emailTag.append(emailInput);
    } else if (email.value == testId) {
        email.style.borderColor = 'red';
        emailInput.textContent = '이미 사용중인 이메일입니다.';
        emailTag.append(emailInput);
    }
}

// passwordInput focus-out시 이벤트 함수
function passwordFocusOut(e) {
    const pwCheck = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    let pwNotice = document.querySelector('.password-notice');

    if (pwNotice) {
        pw.style.borderColor = 'gray';
        pwNotice.remove();
    }

    if (!pwCheck.test(e.target.value)) {
        const passwordInput = document.createElement('p');
        passwordInput.className = 'password-notice';
        passwordInput.textContent = '비밀번호를 입력해주세요.';
        passwordInput.style.color = 'red';
        pw.style.borderColor = 'red';
        passwordTag.append(passwordInput);
    }
}

function passwordVerify(e) {
    const verifyNotice = document.querySelector('.verify-notice');
    if (verifyNotice) {
        verifyPassword.style.borderColor = 'gray';
        verifyNotice.remove();
    }

    if (pw.value != verifyPassword.value){
        const verifyInput = document.createElement('p');
        verifyInput.className = 'verify-notice';
        verifyInput.textContent = '비밀번호가 일치하지 않아요.';
        verifyInput.style.color = 'red';
        verifyPassword.style.borderColor = 'red';
        verifyTag.append(verifyInput);
    }
}

function signup(e) {
    const findNotice = document.querySelectorAll('.email-notice, .password-notice, .verify-notice');
    if (findNotice.length === 0) {
        location.href='../folder.html';
    }
}

function enter (e) {
    if (e.key === 'Enter') {
        signup();
    }
}

//눈 아이콘 눌렀을 때 비밀번호 보이기
function showPassword(e) {
    let inputField;
    if(e.target === passwordEyes) {
        inputField = pw;
    } else if(e.target === verifyEyes) {
        inputField = verifyPassword;
    }

    if(inputField) {
        if(e.target.getAttribute('src') == '/static/img/noeyes.svg') {
            e.target.setAttribute('src', '/static/img/eyes.svg');
            inputField.setAttribute('type', 'text');
        } else {
            e.target.setAttribute('src', '/static/img/noeyes.svg'); 
            inputField.setAttribute('type', 'password');
        }
    }
}


// emailInput focus-out시 이벤트 함수 적용
email.addEventListener('focusout', idFocusOut);

// password focus-out시 이벤트 함수 적용
pw.addEventListener('focusout', passwordFocusOut);

// 비밀번호 input와 비밀번호 확인 input 태그의 value값 확인 이벤트 함수 적용
verifyPassword.addEventListener('focusout', passwordVerify);

// 회원가입 시 문제가 있는 input태그에 알림 기능
signupBtn.addEventListener('click', signup);

// 회원가입 시 Enter 클릭 이벤트 함수 적용
email.addEventListener('keypress', enter);
pw.addEventListener('keypress', enter);
verifyPassword.addEventListener('keypress', enter);

// 눈 아이콘 클릭 시 password 보이게 만드는 이벤트 함수 적용
passwordEyes.addEventListener('click', showPassword);
verifyEyes.addEventListener('click', showPassword);