// 이메일 input
const email = document.querySelector('.id');
const emailTag = document.querySelector('.emailTag');
// 비밀번호 input
const pw = document.querySelector('.password');
const passwordTag = document.querySelector('.passwordTag');
//비밀번호 확인 input
const verifyPassword = document.querySelector('.verify-password');
const verifyTag = document.querySelector('.verifyTag')
// 회원가입 button
const signupBtn = document.querySelector('.signupBtn');
// 비밀번호 눈 아이콘
const eyesToggle = document.querySelector('.eyes');

const testId = 'test@codeit.com';
const testPassword = 'codeit101';

//emailInput focus-out시 이벤트 함수
function idFocusOut(e) {
    const emailCheck = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+$/;
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
    if (!pwCheck.test(e.target.value)) {
        if (!pwNotice){
            const passwordInput = document.createElement('p');
            passwordInput.className = 'password-notice';
            passwordInput.textContent = '비밀번호를 입력해주세요.';
            passwordInput.style.color = 'red';
            pw.style.borderColor = 'red';
            passwordTag.append(passwordInput);
        }
    } else {
        pw.style.borderColor = 'gray';
        pwNotice.remove();
    }
}

function passwordVerify(e) {
    const verifyNotice = document.querySelector('.verify-notice');

    if (pw.value != verifyPassword.value){
        if(!verifyNotice) {
            const verifyInput = document.createElement('p');
            verifyInput.className = 'verify-notice';
            verifyInput.textContent = '비밀번호가 일치하지 않아요.';
            verifyInput.style.color = 'red';
            verifyPassword.style.borderColor = 'red';
            verifyTag.append(verifyInput);
        }
    } else {
        verifyPassword.style.borderColor = 'gray';
        verifyNotice.remove();
    }
}


// emailInput focus-out시 이벤트 함수 적용
email.addEventListener('focusout', idFocusOut);

// password focus-out시 이벤트 함수 적용
pw.addEventListener('focusout', passwordFocusOut);

// 비밀번호 input와 비밀번호 확인 input 태그의 value값 확인 이벤트 함수 적용
verifyPassword.addEventListener('focusout', passwordVerify)