import {
    $iconButtons,
    $emailInput,
    $passwordInput,
    $loginButton,
    $loginForm,
    $passwordCaution,
    checkCodeit,
} from "./common/authVariables.js";

import { checkPasswordIcon, checkEmailValue, setInputStyle } from "./common/authUtils.js";

// 비밀번호 - 로그인
const checkPasswordValue = function () {
    if ($passwordInput && $passwordInput.value === "") {
        setInputStyle($passwordInput, false, $passwordCaution, "비밀번호를 입력해 주세요.");
        return;
    } else {
        setInputStyle($passwordInput, true, $passwordCaution, "");
        if ($passwordInput.value == "codeit101") {
            checkCodeit.password = true;
        }
    }
};

// 로그인
$loginForm.addEventListener("submit", function (e) {
    $loginButton.focus();

    if (checkCodeit.email == true && checkCodeit.password == true) {
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
$passwordInput.addEventListener("focusout", checkPasswordValue);
