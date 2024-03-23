import {
    $email,
    $emailError,
    $password,
    $passwordCheck,
    $loginEmail,
    checkJoinData
} from "/static/js/auth/common/authVariable.js";


/**
 * 이메일 input에서 focus out 할 때, 값이 없을 경우 아래에 “이메일을 입력해 주세요.” 에러 메세지를 보입니다.
 * 이메일 input에서 focus out 할 때, 이메일 형식에 맞지 않는 값이 있는 경우 아래에 “올바른 이메일 주소가 아닙니다.” 에러 메세지를 보입니다.
 * 이메일 input에서 focus out 할 때, input 값이 test@codeit.com 일 경우, “이미 사용 중인 이메일입니다.” 에러 메세지를 보입니다.
 */
const validateEmail = function() {
    // 이메일 체크 정규식
    let eamilRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

    // 입력 된 이메일 값
    let emailValue = $email.value;

    // 빈 값일 때
    if(emailValue === '') {
        $emailError.textContent = "이메일을 입력해 주세요.";
        $email.classList.add("wrong");
        return;
    } else {
        if(!eamilRegex.test(emailValue)) { // 올바른 이메일 형식이 아닐 때
            $emailError.textContent = "올바른 이메일 주소가 아닙니다.";
            $email.classList.add("wrong");
            return;
        } else if(emailValue === $loginEmail) {
            $emailError.textContent = "이미 사용 중인 이메일입니다.";
            $email.classList.add("wrong");
            return;
        }
    }
    // 정상적인 값 입력 시
    $emailError.textContent = ""
    $email.classList.remove("wrong");
    checkJoinData.email = true;
}

const validatedEmail = function() {
    $emailError.textContent = ""
    $email.classList.remove("wrong");
};


/**
 * 눈 모양 아이콘 클릭시 비밀번호의 문자열이 보이기도 하고, 가려지기도 합니다.
 * 비밀번호의 문자열이 가려질 때는 눈 모양 아이콘에는 사선이 그어져있고, 비밀번호의 문자열이 보일 때는 사선이 없는 눈 모양 아이콘이 보이도록 합니다.
 */
const showPasswordValue = function(btn) {
    const eye = btn.querySelector(".icon-eye");
   
    const passwordType = eye.classList.contains("password");
    const isPasswordVisible = eye.classList.contains("eye-on");
    const iconSrc = isPasswordVisible ? "eye-off.png" : "eye-on.png";

    if(passwordType) {
        $password.type = isPasswordVisible ? "password" : "text";
    } else {
        $passwordCheck.type = isPasswordVisible ? "password" : "text";
    }

    eye.src = "/static/images/auth/" + iconSrc;

    eye.classList.toggle("eye-on");
    eye.classList.toggle("eye-off");
};

export { validateEmail, validatedEmail, showPasswordValue };