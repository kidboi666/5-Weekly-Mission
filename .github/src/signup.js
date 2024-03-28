import {
  setInputError,
  removeInputError,
  isEmailValid,
  isPasswordValid,
  togglePassword,
  TEST_USER,
  redirectToIfAccessTokenExists,
} from "./utils.js";

redirectToIfAccessTokenExists("/folder");

const emailInput = document.querySelector("#email");
const emailErrorMessage = document.querySelector("#email-error-message");
const passwordInput = document.querySelector("#password");
const passwordErrorMessage = document.querySelector("#password-error-message");
const confirmPasswordInput = document.querySelector("#confirm-password");
const confirmPasswordErrorMessage = document.querySelector(
  "#confirm-password-error-message"
);
const signForm = document.querySelector("#form");

async function checkEmailDuplicate(email) {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/check-email",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    }
  );
  const data = await response.json();
  return data.isDuplicate;
}

async function signUp(email, password) {
  const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (response.ok) {
    return true;
  }
  throw new Error("회원가입 실패");
}

signForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (
    !validateEmailInput(emailInput.value) ||
    !validatePasswordInput(passwordInput.value) ||
    !validateConfirmPasswordInput(
      confirmPasswordInput.value,
      passwordInput.value
    )
  ) {
    return;
  }

  try {
    const isDuplicate = await checkEmailDuplicate(emailInput.value);
    if (isDuplicate) {
      setInputError(
        { input: emailInput, errorMessage: emailErrorMessage },
        "이미 사용 중인 이메일입니다."
      );
      return;
    }

    const success = await signUp(emailInput.value, passwordInput.value);
    if (success) {
      location.href = "/folder";
    }
  } catch (error) {
    alert(error.message);
  }
});
