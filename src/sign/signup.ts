export {};

interface User {
    email: string;
    password: string;
}

const TEST_USER: User = {
    email: "test@codeit.com",
    password: "codeit101",
};

const EMAIL_VALIDATE = /\S+@\S+\.\S+/;
const PW_VALIDATE = /^.*(?=.{8,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;

// 이메일 검사
function validateEmail(email: string) {
    return EMAIL_VALIDATE.test(email);
}

// 이메일 및 비밀번호 검사 함수
function hasInput(inputValue: string, errorElement: HTMLElement | null, errorMessage: string) {
    const trimmedValue = inputValue.trim();

    if (!trimmedValue) {
        if (errorElement) {
            errorElement.textContent = errorMessage;
        }
        return false;
    }

    if (errorElement) {
        errorElement.textContent = "";
    }
    return true;
}

// 비밀번호 검사
function validatePassword(password: string) {
    return PW_VALIDATE.test(password);
}

// 비밀번호 검사
const signUp_passwordCheck = document.getElementById("password") as HTMLInputElement;
signUp_passwordCheck.addEventListener("focusout", function () {
    const password = this.value.trim();
    const password_error = document.getElementById("password_error") as HTMLSpanElement;

    if (!hasInput(password, password_error, "비밀번호를 입력해 주세요.")) {
        return;
    }

    if (!validatePassword(password)) {
        password_error.textContent = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
        return;
    }
});

// 비밀번호 확인 검사
const passwordCheckCheck = document.getElementById("passwordCheck") as HTMLInputElement;
passwordCheckCheck.addEventListener("focusout", function () {
    const passwordCheck = this.value.trim();
    const password = document.getElementById("password") as HTMLInputElement;
    const passwordCheck_error = document.getElementById("passwordCheck_error") as HTMLSpanElement;

    if (!hasInput(passwordCheck, passwordCheck_error, "비밀번호를 확인해 주세요.")) {
        return;
    }

    if (passwordCheck !== password.value.trim()) {
        passwordCheck_error.textContent = "비밀번호가 다릅니다.";
        return;
    }
});

// eye_toggle 버튼에 대한 이벤트 리스너 추가
const signupEyeToggle1 = document.getElementById("eye_toggle") as HTMLButtonElement;
signupEyeToggle1.addEventListener("click", function () {
    const password_input = document.getElementById("password") as HTMLInputElement;
    const type = password_input.getAttribute("type") === "password" ? "text" : "password";
    password_input.setAttribute("type", type);

    if (type === "text") {
        this.classList.add("on");
    } else {
        this.classList.remove("on");
    }
});

// eye_toggle2 버튼에 대한 이벤트 리스너 추가
const signupEyeToggle2 = document.getElementById("eye_toggle2") as HTMLButtonElement;
signupEyeToggle2.addEventListener("click", function () {
    const passwordCheck_input = document.getElementById("passwordCheck") as HTMLInputElement;
    const type = passwordCheck_input.getAttribute("type") === "password" ? "text" : "password";
    passwordCheck_input.setAttribute("type", type);

    if (type === "text") {
        this.classList.add("on");
    } else {
        this.classList.remove("on");
    }
});

// submit
function submitUser() {
    const email = document.getElementById("email") as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;
    const passwordCheck = document.getElementById("passwordCheck") as HTMLInputElement;

    const email_error = document.getElementById("email_error") as HTMLSpanElement;
    const password_error = document.getElementById("password_error") as HTMLSpanElement;
    const passwordCheck_error = document.getElementById("passwordCheck_error") as HTMLSpanElement;

    if (!validateEmail(email.value.trim())) {
        email_error.textContent = "올바른 이메일 주소가 아닙니다.";
        return;
    }

    if (email.value.trim() === TEST_USER.email) {
        email_error.textContent = "이미 사용 중인 이메일입니다.";
        return;
    }

    if (!validatePassword(password.value.trim())) {
        password_error.textContent = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
        return;
    }

    if (!validatePassword(passwordCheck.value.trim())) {
        passwordCheck_error.textContent = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
        return;
    }

    if (passwordCheck.value.trim() !== password.value.trim()) {
        passwordCheck_error.textContent = "비밀번호가 다릅니다.";
        return;
    }

    window.location.href = "/folder"; // 회원가입 성공 시 이동
}

const submitBtn = document.querySelector(".submit_btn") as HTMLButtonElement;
submitBtn.addEventListener("click", submitUser);

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        submitUser();
    }
});
