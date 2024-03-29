export const VALID_PASSWORD = 'codeit101';
export const VALID_EMAIL = 'test@codeit.com';
const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
const pwd_regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/i;

function addErrorSign(inputElement, errorElement, comment) {
    errorElement.innerText = comment;
    errorElement.classList.remove('hide');
    inputElement.classList.add('error-border');
}

function removeErrorSign(inputElement, errorElement) {
    errorElement.classList.add('hide');
    inputElement.classList.remove('error-border');
}

function checkEmailValid(emailAddress) {		
    return email_regex.test(emailAddress);
}

function checkPwdValid(pwdValue) {	
    return pwd_regex.test(pwdValue);
}

function checkError() {
    if (document.querySelector('.error-border')) return true;
    return false;
}

function setEyeOn(e) {
    const setEyepwdInput = e.currentTarget.getElementsByTagName('input');
    if (e.target.classList.contains('eyeOnOff')) {
        setEyepwdInput[0].setAttribute('type','text');
        e.target.setAttribute("src","images/eye-on.svg");
    }
}

function setEyeOff(e) {
    const setEyepwdInput = e.currentTarget.getElementsByTagName('input');
    if (e.target.classList.contains('eyeOnOff')) {
        setEyepwdInput[0].setAttribute('type','password');
        e.target.setAttribute("src","images/eye-off.svg");
    }
}

export { addErrorSign, removeErrorSign, checkEmailValid, checkPwdValid, checkError, setEyeOff, setEyeOn };
