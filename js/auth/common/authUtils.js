import {
    $emailInput,
    $passwordInput,
    $emailCaution,
    $verifyPassword,
    emailRegex,
} from "./authVariables.js";

// 로컬스토리지 확인
if (localStorage.getItem("access-token")) {
    location.href = "./folder.html";
}

// 인풋 스타일 변경 - 공통
const setInputStyle = function ({ input, isGray, errMsg, msg }) {
    input.style.border = isGray ? "1px solid #ccd5e3" : "1px solid #ff5b56";
    errMsg.textContent = msg;
};

// 이메일 - 공통
const checkEmailValue = function () {
    if ($emailInput.value === "") {
        setInputStyle({
            input: $emailInput,
            isGray: false,
            errMsg: $emailCaution,
            msg: "이메일을 입력해 주세요.",
        });
        return;
    }
    if (!emailRegex.test($emailInput.value)) {
        setInputStyle({
            input: $emailInput,
            isGray: false,
            errMsg: $emailCaution,
            msg: "올바른 이메일 주소가 아닙니다.",
        });
        return;
    }
    setInputStyle({ input: $emailInput, isGray: true, errMsg: $emailCaution, msg: "" });
};

// 패스워드 아이콘 보기 - 공통
const checkPasswordIcon = function (btn) {
    const isPasswordVisible = btn.classList.contains("on");
    const iconSrc = isPasswordVisible ? "eye-off.png" : "eye-on.png";
    const iconAlt = isPasswordVisible ? "숨기기" : "보이기";

    if (btn.classList.contains("passwordIcon")) {
        $passwordInput.type = isPasswordVisible ? "password" : "text";
        btn.innerHTML = `<img src="../images/icon/${iconSrc}" alt="비밀번호 ${iconAlt}">`;
    } else if (btn.classList.contains("verifyPasswordIcon")) {
        $verifyPassword.type = isPasswordVisible ? "password" : "text";
        btn.innerHTML = `<img src="../images/icon/${iconSrc}" alt="비밀번호 ${iconAlt}">`;
    }

    btn.classList.toggle("on");
    btn.classList.toggle("off");
};

export { checkEmailValue, checkPasswordIcon, setInputStyle };
