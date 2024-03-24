import {
  setInputError,
  removeInputError,
  isEmailValid,
  isPasswordValid,
  togglePassword,
} from "./utils.js";

const emailInput = document.querySelector("#email");
const emailErrorMessage = document.querySelector("#email-error-message");
const passwordInput = document.querySelector("#password");
const passwordErrorMessage = document.querySelector("#password-error-message");

emailInput.addEventListener("focusout", (event) => validateEmailInput(event.target.value));
passwordInput.addEventListener("focusout", (event) => validatePasswordInput(event.target.value));

function validateEmailInput(email) {
  if (email === "") {
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage },
      "이메일을 입력해주세요."
    );
    return false;
  }

  fetch("https://bootcamp-api.codeit.kr/api/check-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email }),
  })
  .then((response) => response.json())
  .then((data) => {
    if (data.isAvailable) {
      removeInputError({
        input: emailInput,
        errorMessage: emailErrorMessage,
      });
    } else {
      setInputError(
        { input: emailInput, errorMessage: emailErrorMessage },
        "이미 사용 중인 이메일입니다."
      );
    }
  })
  .catch((error) => {
    console.error("Error checking email:", error);
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage },
      "이메일 확인 중 오류가 발생했습니다."
    );
  });
}

function validatePasswordInput(password) {
  if (password === "" || !isPasswordValid(password)) {
    setInputError(
      { input: passwordInput, errorMessage: passwordErrorMessage },
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
    );
    return false;
  }
  removeInputError({ input: passwordInput, errorMessage: passwordErrorMessage });
  return true;
}

const confirmPasswordInput = document.querySelector("#confirm-password");
const confirmPasswordErrorMessage = document.querySelector("#confirm-password-error-message");

confirmPasswordInput.addEventListener("focusout", (event) =>
  validateConfirmPasswordInput(event.target.value)
);

function validateConfirmPasswordInput(confirmPassword) {
  if (confirmPassword === "" || !isPasswordValid(confirmPassword)) {
    setInputError(
      { input: confirmPasswordInput, errorMessage: confirmPasswordErrorMessage },
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
    );
    return false;
  }
  if (passwordInput.value !== confirmPassword) {
    setInputError(
      { input: confirmPasswordInput, errorMessage: confirmPasswordErrorMessage },
      "비밀번호가 일치하지 않아요."
    );
    return false;
  }
  removeInputError({ input: confirmPasswordInput, errorMessage: confirmPasswordErrorMessage });
  return true;
}

const passwordToggleButton = document.querySelector("#password-toggle");
passwordToggleButton.addEventListener("click", () =>
  togglePassword(passwordInput, passwordToggleButton)
);

const confirmPasswordToggleButton = document.querySelector("#confirm-password-toggle");
confirmPasswordToggleButton.addEventListener("click", () =>
  togglePassword(confirmPasswordInput, confirmPasswordToggleButton)
);

const signForm = document.querySelector("#form");
signForm.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  const isEmailValid = validateEmailInput(emailInput.value);
  const isPasswordValid = validatePasswordInput(passwordInput.value);
  const isConfirmPasswordValid = validateConfirmPasswordInput(confirmPasswordInput.value);

  if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
    fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailInput.value,
        password: passwordInput.value,
      }),
    })
    .then((response) => {
      if (response.ok) {
        window.location.href = "/folder";
      } else {
        throw new Error("Server responded with an error!");
      }
    })
    .catch((error) => {
      console.error(error);
      setInputError(
        { input: emailInput, errorMessage: emailErrorMessage },
        "회원가입 중 오류가 발생했습니다. 다시 시도해주세요."
      );
    });
  }
}
