// 회원가입, 로그인 - 공통
const $iconButtons = document.querySelectorAll(".input-icon");
const $emailInput = document.querySelector(".emailInput");
const $passwordInput = document.querySelector(".passwordInput");
const $loginButton = document.querySelector(".login-button");
const $loginForm = document.querySelector(".login-form");
const $emailCaution = document.querySelector(".email-caution");
const $passwordCaution = document.querySelector(".password-caution");

// 회원가입
const $verifyPassword = document.querySelector(".verifypasswordInput");
const $verifyPasswordCaution = document.querySelector(".verifyPassword-caution");

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
    $verifyPassword,
    $verifyPasswordCaution,
};
