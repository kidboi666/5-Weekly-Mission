import {
  setInputError,
  removeInputError,
  isEmailValid,
  isPasswordValid,
  togglePassword,
  TEST_USER,
} from "./utils.js";

const emailInput = document.querySelector("#email");
const emailErrorMessage = document.querySelector("#email-error-message");

emailInput.addEventListener("focusout", (event) => validateEmailInput(event.target.value));

function validateEmailInput(email) {
  // 이메일이 비어있는지 확인하고 오류 메세지 표시
  if (email === "") {
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage },
      "이메일을 입력해주세요."
    );
    return;
  }

  // 서버로부터 이메일 중복 여부 확인
  fetch("https://bootcamp-api.codeit.kr/api/check-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email: email }),
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

passwordInput.addEventListener("focusout", (event) =>
  validatePasswordInput(event.target.value)
);

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

  // 유효성 검사를 통과한 경우에만 서버로 요청 보냄
  const isEmailInputValid = validateEmailInput(emailInput.value);
  const isPasswordInputValid = validatePasswordInput(passwordInput.value);
  const isConfirmPasswordInputValid = validateConfirmPasswordInput(confirmPasswordInput.value);

  if (isEmailInputValid && isPasswordInputValid && isConfirmPasswordInputValid) {
    // 서버로 회원가입 요청
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
        // 회원가입 성공 시 폴더 페이지로 이동
        window.location.href = "/folder";
      } else {
        throw new Error("Server responded with an error!");
      }
    })

    .catch((error) => {
      console.error(error);
      setInputError (
        { input: emailInput, errorMessage: emailErrorMessage },
        "오류가 발생했습니다. 다시 시도해주세요."
      );
    });
  }
  location.href = "/folder";
}
