import {
    $iconButtons,
    $emailInput,
    $passwordInput,
    $loginForm,
    $passwordCaution,
    $verifyPassword,
    $verifyPasswordCaution,
    $emailCaution,
    passwordRegex,
} from "./common/authVariables.js";

import { checkEmailValue, checkPasswordIcon, setInputStyle } from "./common/authUtils.js";

// 비밀번호 - 회원가입
const checkPasswordLength = function () {
    if (!passwordRegex.test($passwordInput.value)) {
        setInputStyle({
            input: $passwordInput,
            isGray: false,
            errMsg: $passwordCaution,
            msg: "비밀번호는 영문, 숫자 조합 8자 이상 16자 이하로 입력해 주세요.",
        });
    } else {
        setInputStyle({ input: $passwordInput, isGray: true, errMsg: $passwordCaution, msg: "" });
    }
};

// 비밀번호 확인 - 회원가입
const checkVerifyPassword = function () {
    if ($passwordInput.value !== $verifyPassword.value) {
        setInputStyle({
            input: $verifyPassword,
            isGray: false,
            errMsg: $verifyPasswordCaution,
            msg: "비밀번호가 일치하지 않아요.",
        });
    } else {
        setInputStyle({
            input: $verifyPassword,
            isGray: true,
            errMsg: $verifyPasswordCaution,
            msg: "",
        });
    }
};

// 회원가입
$loginForm.addEventListener("submit", function (e) {
    checkEmailValue();
    checkVerifyPassword();
    checkPasswordLength();
    confirmEmailWithFetch();

    e.preventDefault();
});

// 회원가입 - fetch
const confirmEmailWithFetch = async () => {
    try {
        const response = await fetch("https://bootcamp-api.codeit.kr/api/check-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: `${$emailInput.value}`,
            }),
        });

        if (response.ok && $passwordInput.value === $verifyPassword.value) {
            await confirmEmailAndPasswordWithFetch();
        }
        if (response.status === 400) {
            throw new Error("올바른 이메일이 아닙니다.");
        }
        if (response.status === 409) {
            setInputStyle({
                input: $emailInput,
                isGray: false,
                errMsg: $emailCaution,
                msg: "이미 존재하는 이메일입니다.",
            });
            throw new Error("이미 존재하는 이메일입니다.");
        }
    } catch (error) {
        alert(error.message);
    }
};

const confirmEmailAndPasswordWithFetch = async () => {
    try {
        const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: `${$emailInput.value}`,
                password: `${$passwordInput.value}`,
                password2: `${$verifyPassword.value}`,
            }),
        });

        if (response.status === 400) {
            throw new Error("가입하려면 유효한 비밀번호가 필요합니다");
        }
        const data = await response.json();
        localStorage.setItem("access-token", data.data.accessToken);
        location.href = "./folder.html";
    } catch (error) {
        alert(error.message);
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
