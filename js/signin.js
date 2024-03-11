import {
    $iconButtons,
    $emailInput,
    $passwordInput,
    $loginButton,
    $loginForm,
    $passwordCaution,
    checkCodeit,
} from "./authVariables.js";

import { checkPasswordIcon, checkEmailValue } from "./authUtils.js";

// 패스워드
const checkPasswordValue = function () {
    if ($passwordInput && $passwordInput.value === "") {
        $passwordInput.style.border = "1px solid #ff5b56";
        $passwordCaution.textContent = "비밀번호를 입력해 주세요.";
        return;
    } else {
        $passwordInput.style.border = "1px solid #ccd5e3";
        $passwordCaution.textContent = "";
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

//이벤트
$iconButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        checkPasswordIcon(btn);
    });
});

$emailInput.addEventListener("focusout", checkEmailValue);
$passwordInput.addEventListener("focusout", checkPasswordValue);
