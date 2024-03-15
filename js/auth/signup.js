import {
    $iconButtons,
    $emailInput,
    $passwordInput,
    $loginForm,
    $passwordCaution,
    $verifyPassword,
    $verifyPasswordCaution,
    testFolder,
} from "./common/authVariables.js";

import { checkEmailValue, checkPasswordIcon, setInputStyle } from "./common/authUtils.js";

const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/;

// 비밀번호 - 회원가입
const checkPasswordLength = function () {
    if (!passwordRegex.test($passwordInput.value)) {
        setInputStyle($passwordInput, false, $passwordCaution, "비밀번호는 영문, 숫자 조합 8자 이상 16자 이하로 입력해 주세요.");
    } else {
        setInputStyle($passwordInput, true, $passwordCaution, "");

        testFolder.password = true;
    }
};

// 비밀번호 확인 - 회원가입
const checkVerifyPassword = function () {
    if ($passwordInput.value !== $verifyPassword.value) {
        setInputStyle($verifyPassword, false, $verifyPasswordCaution, "비밀번호가 일치하지 않아요.");
    } else {
        setInputStyle($verifyPassword, true, $verifyPasswordCaution, "");
        testFolder.verifypassword = true;
    }
};

// 회원가입
$loginForm.addEventListener("submit", function (e) {
    checkEmailValue();
    checkVerifyPassword();
    checkPasswordLength();

    if (testFolder.email && testFolder.password && testFolder.verifypassword) {
        location.href = "./folder.html";
    }

    e.preventDefault();
});

// 이벤트
$iconButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        checkPasswordIcon(btn);
    });
});

$emailInput.addEventListener("focusout", checkEmailValue);
$verifyPassword.addEventListener("focusout", checkVerifyPassword);
$passwordInput.addEventListener("focusout", checkPasswordLength);
