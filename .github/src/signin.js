import {
  setInputError,
  removeInputError,
  isEmailValid,
  togglePassword,
  TEST_USER,
} from "./utils.js";

redirectToIfAccessTokenExists("/folder");

const emailInput = document.querySelector("#email");
const emailErrorMessage = document.querySelector("#email-error-message");
const passwordInput = document.querySelector("#password");
const passwordErrorMessage = document.querySelector("#password-error-message");
const passwordToggleButton = document.querySelector("#password-toggle");
const signForm = document.querySelector("#form");

function validateEmailInput(email) {
  if (email === "") {
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage },
      "이메일을 입력해주세요."
    );
    return false;
  }
  if (!isEmailValid(email)) {
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage },
      "올바른 이메일 주소가 아닙니다."
    );
    return false;
  }
  removeInputError({ input: emailInput, errorMessage: emailErrorMessage });
  return true;
}

function validatePasswordInput(password) {
  if (password === "") {
    setInputError(
      { input: passwordInput, errorMessage: passwordErrorMessage },
      "비밀번호를 입력해주세요."
    );
    return false;
  }
  removeInputError({
    input: passwordInput,
    errorMessage: passwordErrorMessage,
  });
  return true;
}

emailInput.addEventListener("focusout", (event) =>
  validateEmailInput(event.target.value)
);

passwordInput.addEventListener("focusout", (event) =>
  validatePasswordInput(event.target.value)
);

passwordToggleButton.addEventListener("click", () =>
  togglePassword(passwordInput, passwordToggleButton)
);

signForm.addEventListener("submit", submitForm);

signForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const emailValid = validateEmailInput(emailInput.value);
  const passwordValid = validatePasswordInput(passwordInput.value);

  if (!emailValid || !passwordValid) {
    return;
  }

  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailInput.value,
        password: passwordInput.value,
      }),
    });

    if (!response.ok) {
      throw new Error("로그인 실패");
    }

    const { data } = await response.json();
    const accessToken = data?.accessToken;

    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
      location.href = "/folder";
    } else {
      throw new Error("토큰이 없습니다.");
    }
  } catch (error) {
    console.error(error);
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage },
      "로그인에 실패했습니다."
    );
    setInputError(
      { input: passwordInput, errorMessage: passwordErrorMessage },
      "로그인에 실패했습니다."
    );
  }
});
