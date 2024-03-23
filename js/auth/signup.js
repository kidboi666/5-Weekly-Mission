import {
    $iconButtons,
    $emailInput,
    $passwordInput,
    $loginForm,
    $passwordCaution,
    $verifyPassword,
    $verifyPasswordCaution,
    $emailCaution,
} from "./common/authVariables.js";

import { checkEmailValue, checkPasswordIcon, setInputStyle } from "./common/authUtils.js";

const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/;

// 비밀번호 - 회원가입
const checkPasswordLength = function () {
    if (!passwordRegex.test($passwordInput.value)) {
        setInputStyle(
            $passwordInput,
            false,
            $passwordCaution,
            "비밀번호는 영문, 숫자 조합 8자 이상 16자 이하로 입력해 주세요."
        );
    } else {
        setInputStyle($passwordInput, true, $passwordCaution, "");
    }
};

// 비밀번호 확인 - 회원가입
const checkVerifyPassword = function () {
    if ($passwordInput.value !== $verifyPassword.value) {
        setInputStyle(
            $verifyPassword,
            false,
            $verifyPasswordCaution,
            "비밀번호가 일치하지 않아요."
        );
    } else {
        setInputStyle($verifyPassword, true, $verifyPasswordCaution, "");
    }
};

// 회원가입
$loginForm.addEventListener("submit", function (e) {
    checkEmailValue();
    checkVerifyPassword();
    checkPasswordLength();
    retrieveData();

    e.preventDefault();
});

// 회원가입 - fetch
const retrieveData = async () => {
    const post = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: `${$emailInput.value}`,
        }),
    };

    try {
        const response = await fetch("https://bootcamp-api.codeit.kr/api/check-email", post);

        if (response.ok && $passwordInput.value === $verifyPassword.value) {
            await retrieveData2();
        }
        if (response.status === 400) {
            throw new Error("올바른 이메일이 아닙니다.");
        }
        if (response.status === 409) {
            setInputStyle($emailInput, false, $emailCaution, "이미 존재하는 이메일입니다.");
            throw new Error("이미 존재하는 이메일입니다.");
        }
        return;
    } catch (error) {
        alert(error);
    }
};

const retrieveData2 = async () => {
    const post = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: `${$emailInput.value}`,
            password: `${$passwordInput.value}`,
            password2: `${$verifyPassword.value}`,
        }),
    };

    try {
        const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", post);

        if (response.status === 400) {
            throw new Error("가입하려면 유효한 비밀번호가 필요합니다");
        }
        const data = await response.json();
        localStorage.setItem("access-token", data.data.accessToken);
        location.href = "./folder.html";
    } catch (error) {
        alert(error);
    }
};

// 이벤트
$iconButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        checkPasswordIcon(btn);
    });
});

$emailInput.addEventListener("focusout", checkEmailValue);
$verifyPassword.addEventListener("focusout", checkVerifyPassword);
$passwordInput.addEventListener("focusout", checkPasswordLength);
