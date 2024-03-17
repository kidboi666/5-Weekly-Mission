// 이메일 input
const email = document.querySelector('.id');
const emailTag = document.querySelector('.emailTag')
// 비밀번호 input
const pw = document.querySelector('.password');
const passwordTag = document.querySelector('.passwordTag')
// 로그인 button
const loginBtn = document.querySelector('.loginBtn')
// 비밀번호 눈 아이콘
const eyesToggle = document.querySelector('.eyes')

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

// emailInput focus-out시 이벤트 함수 적용
email.addEventListener('focusout', idFocusOut);