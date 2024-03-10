function validateEmail(email){
    const validate = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
    return validate.test(email);
}

const email = document.querySelector('#email');
const password = document.querySelector('#password');
const emailErrorMessage = document.querySelector('.email-error')
const passwordErrorMessage = document.querySelector('.password-error')

const emailErrorEvent = function () {
    if (email === '') {
        email.classList.add('error-on');
        emailErrorMessage.textContent = "이메일을 입력해 주세요.";
    }

    if (!validateEmail(email)) {
        email.classList.add('error-on');
        emailErrorMessage.textContent = "올바른 이메일 주소가 아닙니다.";
    }

    email.classList.remove('error-on');
    emailErrorMessage.textContent = "";
};

const passwordErrorEvent = function () {
    if (password === '') {
        password.classList.add('error-on');
        passwordErrorMessage.textContent = "비밀번호를 입력해 주세요.";
    }

    email.classList.remove('error-on');
    passwordErrorMessage.textContent = "";
};

const signinEvent = function () {
    if (email.value === "test@codeit.com" && password === "codeit101") {
        location.href = "./folder.html";
    } else {
        email.classList.add('error-on');
        password.classList.add('error-on');
        emailErrorMessage.textContent = "이메일을 확인해 주세요.";
        passwordErrorMessage.textContent = "비밀번호를 확인해 주세요.";
    }
}

document.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
      signinEvent(e);
    }
});

