const $iconButtons = document.querySelectorAll(".input-icon");
const $emailInput = document.querySelector(".emailInput");
const $passwordInput = document.querySelector(".passwordInput");
const $loginButton = document.querySelector(".login-button");
const $loginForm = document.querySelector(".login-form");
const $emailCaution = document.querySelector(".email-caution");
const $passwordCaution = document.querySelector(".password-caution");

const testFolder = {
    email: false,
    password: false,
    verifypassword: false,
};

const checkCodeit = {
    email: false,
    password: false,
};

export {
    $iconButtons,
    $emailInput,
    $passwordInput,
    $loginButton,
    $loginForm,
    $emailCaution,
    $passwordCaution,
    testFolder,
    checkCodeit,
};
