const INPUT_ERROR_CLASSNAME = "sign-input-error";
const ERROR_MASSAGE_CLASSNAME = "error-message";
const EMAIL_PATTERN = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const PW_LETTER = /[a-zA-Z]/;
const PW_NUM = /\d/;

export function inputError(el, msg) {
    el.input.className += `${INPUT_ERROR_CLASSNAME}`;
    el.errorMsg.className += `${ERROR_MASSAGE_CLASSNAME}`;
    el.errorMsg.textContent = msg;
}

export function removeInputError(el) {
    el.input.classList.remove(INPUT_ERROR_CLASSNAME);
    el.errorMsg.classList.remove(ERROR_MASSAGE_CLASSNAME);
    el.errorMsg.textContent = "";
}

export function emailPattern(email) {
    return new RegExp(EMAIL_PATTERN).test(email);
}

export function pwLetter(pw) {
    return PW_LETTER.test(pw);
}

export function pwNum(pw) {
    return PW_NUM.test(pw)
}

export const USER_INFO = {
    email: "test@codeit.com",
    password: "codeit101",
};