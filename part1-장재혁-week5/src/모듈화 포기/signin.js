import signModule from "./sign.js";

const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const ctaSignInBtn = document.getElementById('ctaSignIn');
const errorEmail = document.getElementById('errorEmail');
const errorPassword = document.getElementById('errorPassword');

const eyeButtons = document.getElementsByClassName('eye-button');
const eyeOffs = document.getElementsByClassName('eyeOff');



emailInput.addEventListener('focusout',() => { signModule.emailInputEvent(emailInput, errorEmail)})
passwordInput.addEventListener('focusout', signModule.addWarningMessage(passwordInput, '비밀번호를 입력해 주세요.',errorPassword))
emailInput.addEventListener('keydown', signModule.removeWarningMessage (emailInput, errorEmail))
emailInput.addEventListener('keydown', signModule.removeWarningMessage (passwordInput, errorPassword))


Array.from(eyeButtons).forEach(eyeButton => signModule.eyeButtonEvent(eyeButton));

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
    if (Email == 'test@codeit.com'&& PW == 'codeit101') window.location.href = '/folder';
    else if (Email != 'test@codeit.com')errorEmail.textContent = '이메일을 확인해주세요.';
    else if (PW != 'codeit101') errorPassword.textContent = '비밀번호를 확인해주세요.';
}