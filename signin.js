const emailInput = document.querySelector('.email-input');
const pwdInput = document.querySelector('.pwd-input');
const loginButton = document.querySelector('.button-sign');
const checkPwd = document.querySelector('.check-pwd');
const eyeIcon = document.querySelector('.pwd-eye-off');
const emailError = document.querySelector('.email-error');
const pwdError = document.querySelector('.pwd-error');


function emailCheck(email_address) {		
    const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    if (!email_regex.test(email_address)) return false; 
    else return true;
}

eyeIcon.addEventListener("click", (e) => {
    e.preventDefault();
});

function loginCheck() {
    if ((emailInput.value==='test@codeit.com')&&pwdInput.value==='codeit101') {
        location.href='folder.html';
    } else {
        console.log('도움!');
        emailError.classList.remove('hide');
        emailInput.classList.add('error-border');
        emailError.innerText='이메일을 확인해주세요';
        pwdError.classList.remove('hide');
        pwdInput.classList.add('error-border');
        pwdError.innerText='비밀번호를 확인해주세요';
    }
};

emailInput.addEventListener('focusout', () => {
    if (emailInput.value !== '') {
        emailInput.classList.remove('error-border');
        emailError.classList.toggle('hide');
        if (!emailCheck(emailInput.value)) {
            emailInput.classList.add('error-border');
            emailError.classList.remove('hide');
            emailError.innerText='이메일을 형식을 확인해주세요';
        }
    } else {
        emailError.innerText='이메일을 입력해주세요';
        emailInput.classList.add('error-border');
    }
});

emailInput.addEventListener('focusin', () => {
    emailError.classList.add('hide');
});

pwdInput.addEventListener('focusout', () => {
    if(pwdInput.value !== '') {
        pwdError.classList.add('hide'); 
        pwdInput.classList.remove('error-border');
    }
    else {
        pwdError.classList.remove('hide'); 
        pwdInput.classList.add('error-border');
        pwdError.innerText='비밀번호를 입력해주세요';
    }
});

pwdInput.addEventListener('focusin', () => {
    pwdError.classList.add('hide');
});

emailInput.addEventListener('keyup', (e) => { 
    if (e.keyCode===13) loginCheck();
});

pwdInput.addEventListener('keyup', (e) => {
    if (e.keyCode===13) loginCheck();
});

eyeIcon.addEventListener('mousedown', () => {
    pwdInput.setAttribute('type','text');
    const eyeOnoff=document.getElementById("eyeOnOff");
    eyeOnoff.setAttribute("src","images/eye-on.svg");
});

eyeIcon.addEventListener('mouseup', () => {
    pwdInput.setAttribute('type','password');
    const eyeOnoff=document.getElementById("eyeOnOff");
    eyeOnoff.setAttribute("src","images/eye-off.svg");
});

loginButton.addEventListener("click", () => {
    loginCheck();
});
