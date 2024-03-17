const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const passwordRepeatInput = document.getElementById('passwordRepeatInput');
const errorEmail = document.getElementById('errorEmail');
const errorPassword = document.getElementById('errorPassword');
const errorPasswordRepeat = document.getElementById('errorPasswordRepeat');

const ctaSignUpBtn = document.getElementById('ctaSignUp');
const eyeButtons = document.getElementsByClassName('eye-button');
const eyeOffs = document.getElementsByClassName('eyeOff');

const EMAIL_CHECK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_CHECK = /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/
const TEST_EMAIL = 'test@codeit.com'
const TEST_PASSWORD = 'codeit101'

const emailValidChecker = (email) => {
    return EMAIL_CHECK.test(email) 
}
const passwordValidChecker = (pw) => {
    return PASSWORD_CHECK.test(pw) 
}

const addWarningMessage = function (message, messageType) {
    messageType.textContent = message;
    this.classList.add('invalid'); 
}

emailInput.addEventListener('focusout', () => emailChecker());
const emailChecker=()=>{
        if(emailInput.value === ''){
            addWarningMessage.call(emailInput, '이메일을 입력해 주세요.', errorEmail) 
            return false
        }
        if(!(emailValidChecker(emailInput.value))){
            addWarningMessage.call(emailInput, '올바른 이메일 주소가 아닙니다.', errorEmail)
            return false
        }
        if(emailInput.value === TEST_EMAIL){
            addWarningMessage.call(emailInput, '이미 사용 중인 이메일입니다.', errorEmail)
            return false
        }
        return true
}

passwordInput.addEventListener('focusout', () => passwordChecker());
const passwordChecker=()=>{
    if(!(passwordValidChecker(passwordInput.value))){
        addWarningMessage.call(passwordInput, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',errorPassword) 
        return false
    }
    return true
}

passwordRepeatInput.addEventListener('focusout', () => passwordRepeatChecker());
const passwordRepeatChecker=()=>{
    if(passwordInput.value !== passwordRepeatInput.value){
        addWarningMessage.call(passwordRepeatInput, '비밀번호가 일치하지 않아요.',errorPasswordRepeat) 
        return false
    }
    return true
}

emailInput.addEventListener('keydown', () => {
    errorEmail.textContent = '';
    emailInput.classList.remove('invalid');          //입력 중 에러메세지 초기화
});
passwordInput.addEventListener('keydown', () => {
    errorPassword.textContent = '';
    passwordInput.classList.remove('invalid');       //입력 중 에러메세지 초기화
});
passwordRepeatInput.addEventListener('keydown', () => {
    errorPasswordRepeat.textContent = '';
    passwordRepeatInput.classList.remove('invalid'); //입력 중 에러메세지 초기화
});

Array.from(eyeButtons).forEach(eyeButton => {
    eyeButton.addEventListener('mousedown', () => {
        Array.from(eyeOffs).forEach(eyeOff => eyeOff.classList.add('seePassword'));
        passwordInput.setAttribute('type', 'text')
        passwordRepeatInput.setAttribute('type', 'text')
    });
    eyeButton.addEventListener('mouseup', () => {
        Array.from(eyeOffs).forEach(eyeOff => eyeOff.classList.remove('seePassword'));
        passwordInput.setAttribute('type', 'password')
        passwordRepeatInput.setAttribute('type', 'password')
    });
});

ctaSignUpBtn.addEventListener('click', (e) => {
    e.preventDefault()
    signUpTest();
    })

const sendWithEnter = (e) => {
    if(e.key === 'Enter'){
        e.preventDefault()
        signUpTest();
    }
  }
ctaSignUpBtn.addEventListener('keypress', sendWithEnter);

const signUpTest = () => {
    emailChecker()&&passwordChecker()&&passwordRepeatChecker() ? window.location.href = '/folder' : {};
}