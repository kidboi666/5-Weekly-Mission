import {
  isEmail,
  togglePasswordVisibility,
  loginInfo,
  errorMessages,
} from "./util.js";

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#confirm-password");
const passwordToggleBtn = document.querySelector(
  ".auth-form__password-toggle-btn"
);
const passwordToggleBtnConfirm = document.querySelector(
  ".auth-form__password-toggle-btn.confirm"
);
const emailErrorMessage = document.querySelector("#auth-form__email-error");
const passwordErrorMessage = document.querySelector(
  "#auth-form__password-error"
);
const passwordConfirmErrorMessage = document.querySelector(
  "#auth-form__password-confirm-error"
);
const authForm = document.querySelector(".auth-form");

// export const signupCheck = {
//   email: false,
//   password: false,
//   passwordConfirm: false,
// };

/** 이메일 중복체크 */
const checkEmail = async function () {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/check-email",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: `${email.value}`,
      }),
    }
  );
  return response;
};

/** 이메일 에러체크 */
async function emailErrorEvent() {
  if (!email.value) {
    email.classList.add("auth-form__input--invalid");
    emailErrorMessage.textContent = errorMessages.emptyEmail;
    return false;
  } else if (!isEmail(email.value)) {
    email.classList.add("auth-form__input--invalid");
    emailErrorMessage.textContent = errorMessages.invalidEmail;
    return false;
  }
  try {
    const response = await checkEmail();
    if (!response.ok) {
      throw new Error("이메일 중복!");
    } else {
      email.classList.remove("auth-form__input--invalid");
      emailErrorMessage.textContent = "";
      return true;
    }
  } catch (error) {
    email.classList.add("auth-form__input--invalid");
    emailErrorMessage.textContent = errorMessages.duplicateEmail;
    return false;
  }
}

/* 비밀번호 에러 체크 */

function passwordErrorEvent() {
  if (!password.value) {
    password.classList.add("auth-form__input--invalid");
    passwordErrorMessage.textContent = errorMessages.emptyPassword;
    return false;
  } else if (
    password.value.length < 8 ||
    !/[A-Za-z]/.test(password.value) ||
    !/[0-9]/.test(password.value)
  ) {
    password.classList.add("auth-form__input--invalid");
    passwordErrorMessage.textContent = errorMessages.invalidPassword;
    return false;
  } else if (
    password.value.length >= 8 &&
    /[A-Za-z]/.test(password.value) &&
    /\d/.test(password.value)
  ) {
    password.classList.remove("auth-form__input--invalid");
    passwordErrorMessage.textContent = "";
    return true;
  }
}

/* 비밀번호 확인 에러체크 */

function passwordConfirmErrorEvent() {
  if (password.value !== passwordConfirm.value) {
    passwordConfirm.classList.add("auth-form__input--invalid");
    passwordConfirmErrorMessage.textContent = errorMessages.mismatchPassword;
    return false;
  } else if (password.value === passwordConfirm.value) {
    passwordConfirm.classList.remove("auth-form__input--invalid");
    passwordConfirmErrorMessage.textContent = "";
    return true;
  }
}

/** 회원가입 폼 제출 */

const submitSignUpForm = async function () {
  try {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/check-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: `${email.value}`,
          password: `${password.value}`,
        }),
      }
    );
    if (!response.ok) {
      throw new Error("회원가입 오류!");
    } else {
      window.location.href = "folder.html";
    }
  } catch (e) {
    emailErrorEvent();
    passwordErrorEvent();
    passwordConfirmErrorEvent();
  }
};

/* 회원가입 에러체크 */

function signupEvent() {
  const emailResult = emailErrorEvent();
  const passwordResult = passwordErrorEvent();
  const passwordConfirmResult = passwordConfirmErrorEvent();

  if (emailResult && passwordResult && passwordConfirmResult) {
    submitSignUpForm();
  } else {
    emailErrorEvent();
    passwordErrorEvent();
    passwordConfirmErrorEvent();
  }
}

/* 이벤트 리스너 추가 */

email.addEventListener("mouseout", emailErrorEvent);

email.addEventListener("keyup", emailErrorEvent);

password.addEventListener("mouseout", passwordErrorEvent);

password.addEventListener("keyup", passwordErrorEvent);

passwordConfirm.addEventListener("mouseout", passwordConfirmErrorEvent);

passwordConfirm.addEventListener("keyup", passwordConfirmErrorEvent);

passwordToggleBtn.addEventListener("click", togglePasswordVisibility);

passwordToggleBtnConfirm.addEventListener("click", togglePasswordVisibility);

authForm.addEventListener("submit", function (event) {
  event.preventDefault();
  signupEvent();
});
