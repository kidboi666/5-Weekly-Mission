// 이메일 검사
const emailCheck = document.getElementById("email") as HTMLInputElement;
emailCheck.addEventListener("focusout", function () {
    const email = this.value.trim();
    const emailError = document.getElementById("email_error") as HTMLSpanElement;
    if (!hasInput(email, emailError, "이메일을 입력해 주세요.")) {
        return;
    }

    if (!validateEmail(email)) {
        emailError.textContent = "올바른 이메일 주소가 아닙니다.";
        return;
    }
});

// 비밀번호 검사
const passwordCheck = document.getElementById("password") as HTMLInputElement;
passwordCheck.addEventListener("focusout", function () {
    const password = this.value.trim();
    const passwordError = document.getElementById("password_error");
    hasInput(password, passwordError, "비밀번호를 입력해 주세요.");
});

// submit
const submit = document.querySelector(".submit_btn") as HTMLButtonElement;
submit.addEventListener("click", signin_submitUser);

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        signin_submitUser();
    }
});

function signin_submitUser() {
    const email = document.getElementById("email") as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;

    // 이메일 및 비밀번호 유효성 검사
    if (email.value.trim() === TEST_USER.email && password.value.trim() === TEST_USER.password) {
        window.location.href = "/folder"; // 로그인 성공 시 이동
    } else {
        // 로그인 실패 시 에러 메시지 표시
        const emailError = document.getElementById("email_error") as HTMLSpanElement;
        const passwordError = document.getElementById("password_error") as HTMLSpanElement;

        emailError.textContent = "이메일을 확인해 주세요.";
        passwordError.textContent = "비밀번호를 확인해 주세요.";
    }
}

// password eye toggle
const eyeToggle = document.getElementById("eye_toggle") as HTMLButtonElement;
const passwordInput = document.getElementById("password") as HTMLInputElement;

eyeToggle.addEventListener("click", function () {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);

    if (type === "text") {
        eyeToggle.classList.add("on");
    } else {
        eyeToggle.classList.remove("on");
    }
});
