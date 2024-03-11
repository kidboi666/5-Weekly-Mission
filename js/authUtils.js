import {
    $emailInput,
    $passwordInput,
    $loginForm,
    $emailCaution,
    testFolder,
    checkCodeit,
} from "./authVariables.js";

const regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
);
// 이메일
const checkEmailValue = function () {
    if ($emailInput.value === "") {
        $emailInput.style.border = "1px solid #ff5b56";
        $emailCaution.textContent = "이메일을 입력해 주세요.";
        return;
    }
    if (!regex.test($emailInput.value)) {
        $emailInput.style.border = "1px solid #ff5b56";
        $emailCaution.textContent = "올바른 이메일 주소가 아닙니다.";
        return;
    } else {
        $emailInput.style.border = "1px solid #ccd5e3";
        $emailCaution.textContent = "";
        testFolder.email = true;
        if (
            $emailInput.value === "test@codeit.com" &&
            $loginForm.classList.contains("signup-form")
        ) {
            $emailCaution.textContent = "이미 사용 중인 이메일입니다.";
            $emailInput.style.border = "1px solid #ff5b56";
        }
        if ($emailInput.value === "test@codeit.com") {
            checkCodeit.email = true;
        }
    }
};

// 패스워드 아이콘 보기
const checkPasswordIcon = function (btn) {
    const isPasswordVisible = btn.classList.contains("on");
    $passwordInput.type = isPasswordVisible ? "password" : "text";

    if ($passwordInput.type === "password") {
        btn.innerHTML =
            '<img src="../images/icon/eye-off.png" alt="비밀번호 보이기">';
    } else if ($passwordInput.type === "text") {
        btn.innerHTML =
            '<img src="../images/icon/eye-on.png" alt="비밀번호 숨기기">';
    }

    btn.classList.toggle("on");
    btn.classList.toggle("off");
};

export { checkEmailValue, checkPasswordIcon };
