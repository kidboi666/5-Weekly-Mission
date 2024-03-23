import {
    $iconButtons,
    $emailInput,
    $passwordInput,
    $loginButton,
    $loginForm,
    $passwordCaution,
    $emailCaution,
} from "./common/authVariables.js";

import { checkPasswordIcon, checkEmailValue, setInputStyle } from "./common/authUtils.js";

// 비밀번호 - 로그인
const checkPasswordValue = function () {
    if ($passwordInput && $passwordInput.value === "") {
        setInputStyle($passwordInput, false, $passwordCaution, "비밀번호를 입력해 주세요.");
        return;
    } else {
        setInputStyle($passwordInput, true, $passwordCaution, "");
    }
};

// 로그인
$loginForm.addEventListener("submit", function (e) {
    $loginButton.focus();
    retrieveData();

    e.preventDefault();
});

// 이벤트
$iconButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        checkPasswordIcon(btn);
    });
});

// 로그인 - fetch
const retrieveData = async () => {
    const post = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("access-token"),
        },
        body: JSON.stringify({
            email: `${$emailInput.value}`,
            password: `${$passwordInput.value}`,
        }),
    };

    try {
        const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", post);

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem("access-token", data.data.accessToken);
            location.href = "./folder.html";
        } else {
            throw new Error("에러가 발생 했습니다.");
        }
    } catch (e) {
        setInputStyle($emailInput, false, $emailCaution, "이메일 주소를 확인해주세요.");
        setInputStyle($passwordInput, false, $passwordCaution, "패스워드를 확인해주세요.");
    }
};

$emailInput.addEventListener("focusout", checkEmailValue);
$passwordInput.addEventListener("focusout", checkPasswordValue);
