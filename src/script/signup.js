import { email, emailTag, pw, passwordTag, testId, testPassword, emailCheck } from './common.js';
//비밀번호 확인 input
const verifyPassword = document.querySelector('.verify-password');
const verifyTag = document.querySelector('.verifyTag');
// 회원가입 button
const signupBtn = document.querySelector('.signupBtn');
// 비밀번호 눈 아이콘
const passwordEyes = document.querySelector('.password-eyes');
const verifyEyes = document.querySelector('.verify-eyes');

//윈도우 로드시에 localStroge에 accessToken이 있을 때 folder페이지로 이동
window.onload = function () {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        location.href = './folder.html';
    }
};

//emailInput focus-out시 이벤트 함수
function idFocusOut(e) {
    const emailNotice = document.querySelector('.email-notice');

    if (emailNotice) {
        email.style.borderColor = 'gray';
        emailNotice.remove();
    }
    const emailInput = document.createElement('p');
    emailInput.className = 'email-notice';
    emailInput.style.color = 'red';

    if (e.target.value == '') {
        email.style.borderColor = 'red';
        emailInput.textContent = '이메일을 입력해주세요.';
        emailTag.append(emailInput);
    } else if (!emailCheck.test(e.target.value)) {
        email.style.borderColor = 'red';
        emailInput.textContent = '올바른 이메일 주소가 아닙니다.';
        emailTag.append(emailInput);
    }
}

// passwordInput focus-out시 이벤트 함수
function passwordFocusOut(e) {
    const pwCheck = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const pwNotice = document.querySelector('.password-notice');

    if (pwNotice) {
        pw.style.borderColor = 'gray';
        pwNotice.remove();
    }

    if (!pwCheck.test(e.target.value)) {
        const passwordInput = document.createElement('p');
        passwordInput.className = 'password-notice';
        passwordInput.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
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

    if (pw.value != verifyPassword.value) {
        const verifyInput = document.createElement('p');
        verifyInput.className = 'verify-notice';
        verifyInput.textContent = '비밀번호가 일치하지 않아요.';
        verifyInput.style.color = 'red';
        verifyPassword.style.borderColor = 'red';
        verifyTag.append(verifyInput);
    }
}

//이메일 중복체크
const duplicationEmail = async (e) => {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/check-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email.value,
        }),
    });

    if (response.status == 200) {
        signup();
    } else if (response.status == 409) {
        const emailInput = document.createElement('p');
        emailInput.className = 'email-notice';
        emailInput.style.color = 'red';
        email.style.borderColor = 'red';
        emailInput.textContent = '이미 사용중인 아이디입니다.';
        emailTag.append(emailInput);
    }
};

//회원가입
const signup = async (e) => {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-up', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email.value,
            password: pw.value,
        }),
    });

    const data = await response.json();
    localStorage.setItem('accessToken', data.data.accessToken);

    if (response.status == 200) {
        location.href = '../folder.html';
    }
};

function enter(e) {
    if (e.key === 'Enter') {
        duplicationEmail();
    }
}

//눈 아이콘 눌렀을 때 비밀번호 보이기
function showPassword(e) {
    const clickCheck = e.target.alt;
    if (clickCheck == '비밀번호') {
        if (pw.type == 'password') {
            pw.type = 'text';
            passwordEyes.setAttribute('src', '/src/img/eyes.svg');
        } else {
            pw.type = 'password';
            passwordEyes.setAttribute('src', '/src/img/noeyes.svg');
        }
    } else if (clickCheck == '비밀번호 확인') {
        if (verifyPassword.type == 'password') {
            verifyPassword.type = 'text';
            verifyEyes.setAttribute('src', '/src/img/eyes.svg');
        } else {
            verifyPassword.type = 'password';
            verifyEyes.setAttribute('src', '/src/img/noeyes.svg');
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
signupBtn.addEventListener('click', duplicationEmail);

// 회원가입 시 Enter 클릭 이벤트 함수 적용
email.addEventListener('keypress', enter);
pw.addEventListener('keypress', enter);
verifyPassword.addEventListener('keypress', enter);

// 눈 아이콘 클릭 시 password 보이게 만드는 이벤트 함수 적용
passwordEyes.addEventListener('click', showPassword);
verifyEyes.addEventListener('click', showPassword);
