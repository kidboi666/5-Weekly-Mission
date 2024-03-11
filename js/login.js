const $iconButtons = document.querySelectorAll(".input-icon");
const $emailInput = document.querySelector(".emailInput");
const $passwordInput = document.querySelector(".passwordInput");
const $loginButton = document.querySelector(".login-button");
const $loginForm = document.querySelector(".login-form");
const $emailCaution = document.querySelector(".email-caution");
const $passwordCaution = document.querySelector(".password-caution");

const checkCodeit = {
    email: false,
    password: false,
};

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
        if ($emailInput.value === "test@codeit.com") {
            checkCodeit.email = true;
        }
    }
};

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

//이벤트
$iconButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        checkPasswordIcon(btn);
    });
});

$emailInput.addEventListener("focusout", checkEmailValue);
$passwordInput.addEventListener("focusout", checkPasswordValue);
