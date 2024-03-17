const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const ctaSignInBtn = document.getElementById('ctaSignIn');
const errorEmail = document.getElementById('errorEmail');
const errorPassword = document.getElementById('errorPassword');

const eyeButtons = document.getElementsByClassName('eye-button');
const eyeOffs = document.getElementsByClassName('eyeOff');

const EMAIL_CHECK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TEST_EMAIL = 'test@codeit.com'
const TEST_PASSWORD = 'codeit101'

const emailValidChecker =(email) => {
    if(EMAIL_CHECK.test(email) === false) return false;
    else return true;
}

const addWarningMessage = function (message, messageType) {
    messageType.textContent = message;
    this.classList.add('invalid'); 
}

emailInput.addEventListener('focusout', () => {
    if(emailInput.value === ''){
        addWarningMessage.call(emailInput, '이메일을 입력해 주세요.', errorEmail) 
        return
    }
    if(!(emailValidChecker(emailInput.value))){
        addWarningMessage.call(emailInput, '올바른 이메일 주소가 아닙니다.', errorEmail)
    }
});

passwordInput.addEventListener('focusout', () => {
    if(passwordInput.value === ''){
        addWarningMessage.call(passwordInput, '비밀번호를 입력해 주세요.',errorPassword) 
    }
});

emailInput.addEventListener('keydown', () => {
    errorEmail.textContent = '';
    emailInput.classList.remove('invalid');     //입력 중 에러메세지 초기화
});
passwordInput.addEventListener('keydown', () => {
    errorPassword.textContent = '';
    passwordInput.classList.remove('invalid');  //입력 중 에러메세지 초기화
});

Array.from(eyeButtons).forEach(eyeButton => {
    eyeButton.addEventListener('mousedown', () => {
        Array.from(eyeOffs).forEach(eyeOff => eyeOff.classList.add('seePassword'));
        passwordInput.setAttribute('type', 'text')
    });
    eyeButton.addEventListener('mouseup', () => {
        Array.from(eyeOffs).forEach(eyeOff => eyeOff.classList.remove('seePassword'));
        passwordInput.setAttribute('type', 'password')
    });
});

ctaSignInBtn.addEventListener('click', (e) => {
    e.preventDefault()
    LoginTest(emailInput.value,passwordInput.value);
    })

const sendWithEnter = (e) => {
    if(e.key === 'Enter'){
        e.preventDefault()
        LoginTest(emailInput.value,passwordInput.value);
    }
  }
ctaSignInBtn.addEventListener('keypress', sendWithEnter);

const LoginTest = (Email,PW) => {
    if (Email == TEST_EMAIL&& PW == TEST_PASSWORD) window.location.href = '/folder';
    else if (Email != TEST_EMAIL)errorEmail.textContent = '이메일을 확인해주세요.'; 
    else if (PW != TEST_PASSWORD) errorPassword.textContent = '비밀번호를 확인해주세요.';
}