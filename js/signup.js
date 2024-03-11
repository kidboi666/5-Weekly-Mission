import { checkEmailValue, checkPasswordIcon } from "./authUtils.js";

import {
    $iconButtons,
    $emailInput,
    $passwordInput,
    $loginForm,
    $passwordCaution,
    testFolder,
} from "./authVariables.js";

const $verifyPassword = document.querySelector(".verifypasswordInput");
const $verifyPasswordCaution = document.querySelector(
    ".verifyPassword-caution"
);

const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/;

//비밀번호
const checkPasswordLength = function () {
    if (
        $passwordInput.value.length < 8 ||
        !passwordRegex.test($passwordInput.value)
    ) {
        $passwordCaution.textContent =
            "비밀번호는 영문, 숫자 조합 8자 이상 16자 이하로 입력해 주세요.";
        $passwordInput.style.border = "1px solid #ff5b56";
    } else {
        $passwordCaution.textContent = "";
        $passwordInput.style.border = "1px solid #ccd5e3";
        testFolder.password = true;
    }
};

//비밀번호 확인
const checkVerifyPassword = function () {
    if ($passwordInput.value !== $verifyPassword.value) {
        $verifyPasswordCaution.textContent = "비밀번호가 일치하지 않아요.";
        $verifyPassword.style.border = "1px solid #ff5b56";
    } else {
        $verifyPasswordCaution.textContent = "";
        $verifyPassword.style.border = "1px solid #ccd5e3";
        testFolder.verifypassword = true;
    }
};

$loginForm.addEventListener("submit", function (e) {
    checkEmailValue();
    checkVerifyPassword();
    checkPasswordLength();

    if (testFolder.email && testFolder.password && testFolder.verifypassword) {
        location.href = "./folder.html";
    }

    e.preventDefault();
});

$iconButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        checkPasswordIcon(btn);
    });
});

$emailInput.addEventListener("focusout", checkEmailValue);
$verifyPassword.addEventListener("focusout", checkVerifyPassword);
$passwordInput.addEventListener("focusout", checkPasswordLength);
