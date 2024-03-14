import {
    $emailInput,
    $passwordInput,
    $loginForm,
    $emailCaution,
    $verifyPassword,
    testFolder,
    checkCodeit,
} from "./authVariables.js";

const regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
);

// 인풋 스타일 변경 - 공통
const setInputStyle = function (input, gray, errMsg, msg) {
    input.style.border = gray ? "1px solid #ccd5e3" : "1px solid #ff5b56";
    errMsg.textContent = msg;
};

// 이메일 - 공통
const checkEmailValue = function () {
    if ($emailInput.value === "") {
        setInputStyle($emailInput, false, $emailCaution, "이메일을 입력해 주세요.");
        return;
    }
    if (!regex.test($emailInput.value)) {
        setInputStyle($emailInput, false, $emailCaution, "올바른 이메일 주소가 아닙니다.");
        return;
    } else {
        setInputStyle($emailInput, true, $emailCaution, "");
        testFolder.email = true;
        if ($emailInput.value === "test@codeit.com" && $loginForm.classList.contains("signup-form")) {
            setInputStyle($emailInput, false, $emailCaution, "이미 사용 중인 이메일입니다.");
        }
        if ($emailInput.value === "test@codeit.com") {
            checkCodeit.email = true;
        }
    }
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
