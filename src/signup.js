import {
    setInputError,
    removeInputError,
    isEmailValid,
    togglePassword,
    isPasswordValid,
    TEST_USER,
} from "utils.js";

const emailInput = document.querySelector("#email");
const emailErrorMessage = document.querySelector("#email-error-message");

emailInput.addEventListener("focusout", (event) => validateEmailInput(event.target.value));

function validateEmailInput(email) {
  if (email === "") {
    setInputError({ input: emailInput, errorMessage: emailErrorMessage }, "이메일을 입력해주세요.");
    return;
  }
  if (!isEmailValid(email)) {
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage },
      "올바른 이메일 주소가 아닙니다."
    );
    return;
  }
  if (email === TEST_USER.email) {
    setInputError(
        { input: emailInput, errorMessage: emailErrorMessage},
        "이미 사용 중인 이메일입니다."
    );
    return;
  }
  removeInputError({ input: emailInput, errorMessage: emailErrorMessage });
}

const passwordInput = document.querySelector("#password");
const passwordErrorMessage = document.querySelector("#password-error-message");

passwordInput.addEventListener("focusout", (event) => validatePasswordInput(event.target.value));

function validatePasswordInput(password) {
    if (!isPasswordValid(password)) {
        setInputError(
            { input: passwordInput, errorMessage: passwordErrorMessage},
            "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
        );
        return;
    }
    removeInputError({ input: passwordInput, errorMessage: passwordErrorMessage});
}

const checkpwInput = document.querySelector("#checkpw");
const checkpwErrorMessage = document.querySelector("#checkpw-error-message");

checkpwInput.addEventListener("focusout", (event) => checkpassword(event.target.value));

function checkpassword() {
    if (passwordInput.value !== checkpwInput.value) {
        setInputError(
            { input: checkpwInput, errorMessage: checkpwErrorMessage},
            "비밀번호가 일치하지 않아요."
        );
        return;
    }
    removeInputError({ input: checkpwInput, errorMessage: checkpwErrorMessage});
}

const passwordToggleButton = document.querySelector("#password-toggle");
passwordToggleButton.addEventListener("click", () =>
  togglePassword(passwordInput, passwordToggleButton)
);

const checkpwToggleButton = document.querySelector("#checkpw-toggle");
checkpwToggleButton.addEventListener("click", () =>
  togglePassword(checkpwInput, checkpwToggleButton)
);