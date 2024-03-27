import { isEmail, togglePasswordVisibility, accessTokenCheck } from "./util.js";
import { errorMessages } from "./authConfig.js";

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordToggleBtn = document.querySelector(
  ".auth-form__password-toggle-btn"
);
const emailErrorMessage = document.querySelector("#auth-form__email-error");
const passwordErrorMessage = document.querySelector(
  "#auth-form__password-error"
);
const authForm = document.querySelector(".auth-form");

/* 로그인 에러체크 */

const loginCheck = async function () {
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: `${email.value}`,
        password: `${password.value}`,
      }),
    });
    const result = await response.json();
    if (!response.ok) {
      throw new Error("로그인에러!");
    } else {
      window.location.href = "folder.html";
      localStorage.setItem("accessToken", result.data.accessToken);
    }
  } catch (error) {
    email.classList.add("auth-form__input--invalid");
    emailErrorMessage.textContent = errorMessages.confirmEmail;
    password.classList.add("auth-form__input--invalid");
    passwordErrorMessage.textContent = errorMessages.confirmPassword;
  }
};

/* 이메일 에러체크 */

function emailErrorEvent() {
  if (!email.value) {
    email.classList.add("auth-form__input--invalid");
    emailErrorMessage.textContent = errorMessages.emptyEmail;
  } else if (!isEmail(email.value)) {
    email.classList.add("auth-form__input--invalid");
    emailErrorMessage.textContent = errorMessages.invalidEmail;
  } else {
    email.classList.remove("auth-form__input--invalid");
    emailErrorMessage.textContent = "";
  }
}

/* 비밀번호 에러 체크 */

function passwordErrorEvent() {
  if (!password.value) {
    password.classList.add("auth-form__input--invalid");
    passwordErrorMessage.textContent = errorMessages.emptyPassword;
  } else {
    password.classList.remove("auth-form__input--invalid");
    passwordErrorMessage.textContent = "";
  }
}

/* 이벤트 리스너 추가 */

accessTokenCheck();

email.addEventListener("mouseout", emailErrorEvent);

email.addEventListener("keyup", emailErrorEvent);

password.addEventListener("mouseout", passwordErrorEvent);

password.addEventListener("keyup", passwordErrorEvent);

passwordToggleBtn.addEventListener("click", togglePasswordVisibility);

authForm.addEventListener("submit", function (e) {
  e.preventDefault();
  loginCheck();
});
