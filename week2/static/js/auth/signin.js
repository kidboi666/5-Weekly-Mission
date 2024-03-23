import {
    $email,
    $emailError,
    $password,
    $passwordError,
    $passWordIconBtn,
    $loginForm
} from "/static/js/auth/common/authVariable.js";

import { validateEmail, validatedEmail, showPasswordValue } from "/static/js/auth/common/authCommon.js";

import { submitSignIn } from "/static/api/auth/signinApi.js";



/**
 * 비밀번호 input에서 focus out 할 때, 값이 없을 경우 아래에 “비밀번호를 입력해 주세요.” 에러 메세지를 보입니다.
 */

// 입력 된 비밀번호 값
let passwordValue = '';

$password.addEventListener('focusout', (event) => {
    // 입력 된 비밀번호 값
    passwordValue = $password.value;
    
    // 빈 값일 때
    if(passwordValue === '') {
        $passwordError.textContent = "비밀번호를 입력해 주세요."
        event.target.classList.add("wrong");
    }else{ // 정상적인 값 입력 시
        $passwordError.textContent = ""
        event.target.classList.remove("wrong");
    }
});

$password.addEventListener('focusin', (event) => {
    $passwordError.textContent = ""
    event.target.classList.remove("wrong");
});

/**
 * 이메일: test@codeit.com, 비밀번호: codeit101 으로 로그인 시도할 경우, “/folder” 페이지로 이동합니다.
 * 이외의 로그인 시도의 경우, 이메일 input 아래에 “이메일을 확인해 주세요.”, 비밀번호 input 아래에 “비밀번호를 확인해 주세요.” 에러 메세지를 보입니다.
 * 로그인 버튼 클릭 또는 Enter키 입력으로 로그인 실행돼야 합니다.
 */

$loginForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    const resultSingIn = await submitSignIn($email.value, $password.value);

    if(resultSingIn.success) {
        localStorage.setItem("access-token", resultSingIn.token);
        location.href = "./folder.html";
    }else{
        if(resultSingIn.status === 400){
            $emailError.textContent = "이메일을 확인해 주세요."
            $email.classList.add("wrong");
            $passwordError.textContent = "비밀번호를 확인해 주세요."
            $password.classList.add("wrong");
        }else{
            alert(resultSingIn.message);
        }
    }
});


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


