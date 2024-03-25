import { eyeToggleButton } from "./utils.js";

// form
const signForm = document.querySelector("#form");
// email
const inputEmail = document.querySelector("#email");
const emailValidation = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
const emailErrorMsg = document.querySelector("#email-error-msg");
// password
const inputPassword = document.querySelector("#pwd");
const pwdValidation = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const pwdErrorMsg = document.querySelector("#pwd-error-msg");
const styleBtn = document.querySelector(".eye-btn");
const passwordToggleButton = document.querySelector("#pwd-toggle");
// password-varify
const inputPasswordVerify = document.querySelector("#pwd-verify");
const pwdVerifyErrorMsg = document.querySelector("#pwd-verify-error-msg");
const styleVerifyBtn = document.querySelector("#pwd-verify-toggle");
const passwordVerifyToggleButton = document.querySelector("#pwd-verify-toggle");

// event handler
function InputEmailFunc(e) {
  if (inputEmail.value === "") {
    emailErrorMsg.textContent = "이메일을 입력해 주세요.";
    inputEmail.classList.add("error-input-text");
    return;
  }
  if (!emailValidation.test(e.target.value)) {
    emailErrorMsg.textContent = "올바른 이메일 주소가 아닙니다.";
    inputEmail.classList.add("error-input-text");
    return;
  }
  if (inputEmail.value === TEST_USER.email) {
    emailErrorMsg.textContent = "이미 사용 중인 이메일입니다.";
    inputEmail.classList.add("error-input-text");
    return;
  }
  emailErrorMsg.textContent = "";
  inputEmail.classList.remove("error-input-text");
}

function InputPasswordFunc(e) {
  if (!pwdValidation.test(e.target.value)) {
    pwdErrorMsg.textContent =
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    inputPassword.classList.add("error-input-text");
    styleBtn.classList.add("fix-eye-btn");
    return;
  }
  pwdErrorMsg.textContent = "";
  inputPassword.classList.remove("error-input-text");
  styleBtn.classList.remove("fix-eye-btn");
}

function InputPasswordVerifyFunc(e) {
  if (inputPassword.value !== inputPasswordVerify.value) {
    pwdVerifyErrorMsg.textContent = "비밀번호가 일치하지 않아요.";
    inputPasswordVerify.classList.add("error-input-text");
    styleVerifyBtn.classList.add("fix-eye-btn");
    return;
  }
  pwdVerifyErrorMsg.textContent = "";
  inputPasswordVerify.classList.remove("error-input-text");
  styleVerifyBtn.classList.remove("fix-eye-btn");
}

async function submitForm(e) {
  e.preventDefault();

  try {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/check-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: inputEmail.value,
        }),
      }
    );
    const { data } = await response.json();

    if (response.ok) {
      localStorage.setItem("accessToken", data.accessToken);
      location.href = "/folder.html";
      return;
    }
    if (!response.ok) {
      emailErrorMsg.textContent = "이메일을 확인해주세요.";
      styleBtn.classList.add("fix-eye-btn");
      return;
    }
  } catch (error) {
    console.error(error);
  }
}

// event handling
inputEmail.addEventListener("focusout", InputEmailFunc);
inputPassword.addEventListener("focusout", InputPasswordFunc);
inputPasswordVerify.addEventListener("focusout", InputPasswordVerifyFunc);
passwordToggleButton.addEventListener("click", () =>
  eyeToggleButton(inputPassword, passwordToggleButton)
);
passwordVerifyToggleButton.addEventListener("click", () =>
  eyeToggleButton(inputPasswordVerify, passwordVerifyToggleButton)
);
signForm.addEventListener("submit", submitForm);
