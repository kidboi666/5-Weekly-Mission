import { email, emailTag, pw, passwordTag, testId, testPassword, emailCheck } from './common.js';

// 로그인 button
const loginBtn = document.querySelector('.loginBtn');
// 비밀번호 눈 아이콘
const passwordEyes = document.querySelector('.password-eyes');

//emailInput focus-out시 이벤트 함수
function idFocusOut(e) {
    let emailNotice = document.querySelector('.email-notice');

    if(emailNotice) {
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
    }
}

// passwordInput focus-out시 이벤트 함수
function passwordFocusOut(e) {
    let pwNotice = document.querySelector('.password-notice');
    if(pwNotice) {
        pw.style.borderColor = 'gray';
        pwNotice.remove();
    }

    if (e.target.value=='') {
        const passwordInput = document.createElement('p');
        passwordInput.className = 'password-notice';
        passwordInput.textContent = '비밀번호를 입력해주세요.';
        passwordInput.style.color = 'red';
        pw.style.borderColor = 'red';
        passwordTag.append(passwordInput);
    }
}

// 로그인 함수
function login(e) {
    if (email.value == testId && pw.value == testPassword) {
        location.href='../folder.html';
    } else {
        const loginCheck = document.querySelector('.login-check');

        if(!loginCheck){
            const notEmail = document.createElement('p');
            const notPassword = document.createElement('p');
    
            notEmail.className = 'login-check';
            notEmail.style.color = 'red';
            notEmail.textContent = '이메일을 확인해주세요.';
            emailTag.append(notEmail);
    
            notPassword.className = 'login-check';
            notPassword.style.color = 'red';
            notPassword.textContent = '비밀번호를 확인해주세요.';
            passwordTag.append(notPassword);
        }
    }
}

//로그인 버튼 Enter키 적용
function enterLogin (e) {
    if (e.key === 'Enter') {
      login();
    }
}
  
//눈 아이콘 눌렀을 때 비밀번호 보이기
function showPassword(e) {
    if(e.target.getAttribute('src') == '/static/img/noeyes.svg') {
        e.target.setAttribute('src', '/static/img/eyes.svg');
        pw.setAttribute('type', 'text')
    } else {
        e.target.setAttribute('src', '/static/img/noeyes.svg'); 
        pw.setAttribute('type', 'password')
    }
}

// emailInput focus-out시 이벤트 함수 적용
email.addEventListener('focusout', idFocusOut);
// password focus-out시 이벤트 함수 적용
pw.addEventListener('focusout', passwordFocusOut);
// 로그인 이벤트 함수 적용
loginBtn.addEventListener('click', login);
// 로그인 시 Enter키 이벤트 함수 적용
email.addEventListener('keypress', enterLogin);
pw.addEventListener('keypress', enterLogin);
// 눈 아이콘 클릭 시 password 보이게 만드는 이벤트 함수 적용
passwordEyes.addEventListener('click', showPassword)