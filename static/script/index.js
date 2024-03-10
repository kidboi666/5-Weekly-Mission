// 이메일 input
const email = document.querySelector('.id');
const emailTag = document.querySelector('.emailTag')
// 비밀번호 input
const pw = document.querySelector('.password');
const passwordTag = document.querySelector('.passwordTag')
//focus-out시 이벤트
function idFocusOut(e) {
    const emailCheck = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+$/;
    let emailNotice = document.querySelector('.email-notice');

    if(e.target.value=='') {
        if (!emailNotice){
            const emailInput = document.createElement('p');
            emailInput.className = 'email-notice';
            emailInput.textContent = '이메일을 입력해주세요.';
            emailInput.style.color = 'red';
            emailTag.append(emailInput);
        }
    }
    else if (!emailCheck.test(e.target.value)) {
        if (!emailNotice){
            const emailInput = document.createElement('p');
            emailInput.className = 'email-notice';
            emailInput.textContent = '이메일 형식이 아닙니다.';
            emailInput.style.color = 'red';
            emailTag.append(emailInput)
        }
    }
    else {
        emailNotice.remove();
    }
}

function passwordFocusOut(e) {
    let pwNotice = document.querySelector('.password-notice');
    if (e.target.value=='') {
        if (!pwNotice){
            const passwordInput = document.createElement('p');
            passwordInput.className = 'password-notice';
            passwordInput.textContent = '비밀번호를 입력해주세요.';
            passwordInput.style.color = 'red';
            passwordTag.append(passwordInput);
        }
    }
}

// emailInput focus-out시 이벤트 함수 적용
email.addEventListener('focusout', idFocusOut);

// password focus-out시 이벤트 함수 적용
pw.addEventListener('focusout', passwordFocusOut);