const INPUT_ERROR_CLASSNAME = "sign-input-error";
const ERROR_MASSAGE_CLASSNAME = "error-message";
const EMAIL_PATTERN = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

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
    return new RegExp(EMAIL_PATTERN).text(email);
}

export const USER_INFO = {
    email: "test@codeit.com",
    password: "codeit101",
};