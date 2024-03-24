import {
  setInputError,
  removeInputError,
  isEmailValid,
  togglePassword,
  isPasswordValid,
  TEST_USER,
} from "./utils.js";

const emailInput = document.querySelector("#email");
const emailErrorMessage = document.querySelector("#email-error-message");

emailInput.addEventListener("focusout", (event) => validateEmailInput(event.target.value));

function validateEmailInput(email) {
  // 이메일이 비어있는지 확인하고 오류 메세지 표시
  if (email === "") {
    setInputError({ input: emailInput, errorMessage: emailErrorMessage }, "이메일을 입력해주세요.");
    return;
  }

  // 이메일이 유효한지 확인하고 오류 메세지 표시
  if (!isEmailValid(email)) {
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage },
      "올바른 이메일 주소가 아닙니다."
    );
    return;
  }

  // 이메일 입력이 올바르면 오류 메세지 제거
  removeInputError({ input: emailInput, errorMessage: emailErrorMessage });
}

const passwordInput = document.querySelector("#password");
const passwordErrorMessage = document.querySelector("#password-error-message");

passwordInput.addEventListener("focusout", (event) => validatePasswordInput(event.target.value));

function validatePasswordInput(password) {
  // 비밀번호가 비어있는지 확인하고 오류 메세지 표시
  if (password === "") {
    setInputError(
      { input: passwordInput, errorMessage: passwordErrorMessage },
      "비밀번호를 입력해주세요."
    );
    return;
  }

  if (!isPasswordValid(password)) { 
    // 비밀번호가 유효하지 않을 때 처리
    setInputError(
      { input: passwordInput, errorMessage: passwordErrorMessage },
      "비밀번호는 최소 8자 이상이어야 하고, 숫자와 문자를 모두 포함해야 합니다."
    );
    return;
  }  
  // 비밀번호 입력이 올바르면 오류 메세지 제거
  removeInputError({ input: passwordInput, errorMessage: passwordErrorMessage });
}

// 비밀번호 가시성 토글 관련 코드
const passwordToggleButton = document.querySelector("#password-toggle");
passwordToggleButton.addEventListener("click", () =>
  togglePassword(passwordInput, passwordToggleButton)
);

// 폼 제출 관련 코드
const signForm = document.querySelector("#form");
signForm.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  const { email, password } = TEST_USER;

  // 서버로 POST 요청
  fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })

    .then((response) => {
      // 응답이 성공적인지 확인하고 리디렉션
      if (response.ok) {
        window.location.href = "./folder";
      } else {
        throw new Error("Server responded with an error!");
      }
    })
      
    .catch((error) => {
      // 오류가 발생하면 콘솔에 로그 출력하고 오류 메세지 표시
      console.error(error);
      setInputError(
        { input: emailInput, errorMessage: emailErrorMessage },
        "오류가 발생했습니다. 다시 시도해주세요"
      );
    });
}
