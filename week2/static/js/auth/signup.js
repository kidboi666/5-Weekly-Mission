import {
    $email,
    $password,
    $passwordError,
    $passWordIconBtn,
    $passwordCheck,
    $passwordCheckError,
    $joinForm,
    checkJoinData
} from "/static/js/auth/common/authVariable.js";

import { validateEmail, validatedEmail, showPasswordValue } from "/static/js/auth/common/authCommon.js";

/**
 * 비밀번호 input에서 focus out 할 때, 값이 8자 미만으로 있거나 문자열만 있거나 숫자만 있는 경우, “비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.” 에러 메세지를 보입니다.
 */
// 입력 된 비밀번호 값
let passwordValue = '';
const validatePassword = function() {
    // 입력 된 비밀번호 값
    passwordValue = $password.value;

    // 비밀번호 체크 정규식
    let passwordRegex = new RegExp(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/);

    if(!passwordRegex.test(passwordValue)) { // 올바른 비밀번호 형식이 아닐 때
        $passwordError.textContent = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
        $password.classList.add("wrong");
        return;
    }

    // 정상적인 값 입력 시
    $passwordError.textContent = ""
    $password.classList.remove("wrong");
    checkJoinData.password = true;
}

$password.addEventListener('focusin', (event) => {
    $passwordError.textContent = ""
    event.target.classList.remove("wrong");
});

/**
 * 비밀번호 input과 비밀번호 확인 input의 값이 다른 경우, 비밀번호 확인 input 아래에 “비밀번호가 일치하지 않아요.” 에러 메세지를 보입니다.
 */
// 입력 된 비밀번호 확인 값
let passwordCheckValue = '';
const validatePasswordCheck = function() {
    // 입력 된 비밀번호 값
    passwordCheckValue = $passwordCheck.value;

    if (passwordValue === ''){
        $passwordCheckError.textContent = "비밀번호를 다시 입력해주세요.";
        $passwordCheck.classList.add("wrong");
        return;
    }else if (passwordValue !== passwordCheckValue) {
        $passwordCheckError.textContent = "비밀번호가 일치하지 않아요.";
        $passwordCheck.classList.add("wrong");
        return;
    }

    // 정상적인 값 입력 시
    $passwordCheckError.textContent = ""
    $passwordCheck.classList.remove("wrong");
    checkJoinData.passwordCheck = true;
};

$passwordCheck.addEventListener('focusin', (event) => {
    $passwordCheckError.textContent = ""
    $passwordCheck.classList.remove("wrong");
});

/**
 * 회원가입을 실행할 경우, 문제가 있는 경우 문제가 있는 input에 에러 메세지로 알립니다.
 * 이외의 유효한 회원가입 시도의 경우, “/folder”로 이동합니다.
 * 회원가입 버튼 클릭 또는 Enter키 입력으로 회원가입 실행돼야 합니다.
 */
$joinForm.addEventListener('submit', (event) => {
    event.preventDefault();

    validateEmail();
    validatePassword();
    validatePasswordCheck();

    console.log(checkJoinData);
    if (checkJoinData.email && checkJoinData.password && checkJoinData.passwordCheck) {
        location.href="/folder.html";
    }
});

$password.addEventListener("focusout", validatePassword);
$passwordCheck.addEventListener("focusout", validatePasswordCheck);

/**
 * 공통
 */
$passWordIconBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
        showPasswordValue(btn);
    });
});

$email.addEventListener("focusout", validateEmail);
$email.addEventListener("focusin", validatedEmail);
