function validateEmail(email){
    const validate = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
    return validate.test(email);
}


const email = document.querySelector('#email');
const password = document.querySelector('#password');
const emailErrorMessage = document.querySelector('.email-error');
const passwordErrorMessage = document.querySelector('.password-error');
const signinBtn = document.querySelector('.cta');

function emailErrorEvent () {
    if (email.value === '') {
        email.classList.add('error-on');
        emailErrorMessage.textContent = "이메일을 입력해 주세요.";
        return;
    }

    if (!validateEmail(email.value)) {
        email.classList.add('error-on');
        emailErrorMessage.textContent = "올바른 이메일 주소가 아닙니다.";
        return;
    }

    email.classList.remove('error-on');
    emailErrorMessage.textContent = "";
}

email.addEventListener('focusout', emailErrorEvent);

function passwordErrorEvent () {
    if (password.value === '') {
        password.classList.add('error-on');
        passwordErrorMessage.textContent = "비밀번호를 입력해 주세요.";
        return;
    }

    email.classList.remove('error-on');
    passwordErrorMessage.textContent = "";
}

password.addEventListener('focusout', passwordErrorEvent);

function signinEvent () {
    if (email.value === "test@codeit.com" && password === "codeit101") {
        location.href = "./folder.html";
    } else {
        email.classList.add('error-on');
        password.classList.add('error-on');
        emailErrorMessage.textContent = "이메일을 확인해 주세요.";
        passwordErrorMessage.textContent = "비밀번호를 확인해 주세요.";
    }
}

document.addEventListener('keydown', function(e) {
    if(e.key === 'Enter'){
      signinEvent(e);
    }
});

cta.addEventListener('click', function(e) {
    e.preventDefault();
    signinEvent(e);
});