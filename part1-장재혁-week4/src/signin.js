
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const ctaSignIn = document.getElementById('ctaSignIn');
let errorEmail = document.getElementById('errorEmail');
let errorPassword = document.getElementById('errorPassword');

let eyeButtons = document.getElementsByClassName('eye-button');
let eyeOffs = document.getElementsByClassName('eyeOff');


const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

emailValidChecker =(email) => {
    if(emailCheck.test(email) === false) return false;
    else return true;
}

emailInput.addEventListener('focusout', () => {
    if (emailInput.value === '') {
        errorEmail.textContent = '이메일을 입력해 주세요.';
        emailInput.classList.add('invalid'); 
    } else if (!(emailValidChecker(emailInput.value))){
        errorEmail.textContent = '올바른 이메일 주소가 아닙니다.'; 
        emailInput.classList.add('invalid'); 
    } else {
        errorEmail.textContent = '';
        emailInput.classList.remove('invalid'); 
    }
});

passwordInput.addEventListener('focusout', () => {
    if (passwordInput.value === '') {
        errorPassword.textContent = '비밀번호를 입력해 주세요.';
        passwordInput.classList.add('invalid'); 
    } else {
        errorPassword.textContent = '';
        passwordInput.classList.remove('invalid'); 
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
LoginTest = (Email,PW) => {
    if (!(Email == 'test@codeit.com'&& PW == 'codeit101')) {
        errorPassword.textContent = '등록되지 않은 주소이거나 비밀번호가 틀립니다.';
    } else window.location.href = '/folder';
}
ctaSignIn.addEventListener('click', (e) => {
    e.preventDefault()
    LoginTest(emailInput.value,passwordInput.value);
    })

sendWithEnter = (e) => {
    if(e.key === 'Enter'){
        e.preventDefault()
        LoginTest(emailInput.value,passwordInput.value);
    }
  }
ctaSignIn.addEventListener('keypress', sendWithEnter);