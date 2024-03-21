import {
  regexPatterns,
  validateEmail,
  validatePassword as PasswordValidator,
  getUserByEmail,
} from "../js/auth.js";

import {
  showError,
  removeErrorMessage,
  togglePasswordVisibility,
} from "../js/uicontroller.js";

const emailInputEl = document.querySelector(".email-input");
const passwordInputEl = document.querySelector(".password-input");
const confirmPasswordInputEl = document.querySelector(
  ".confirm-password-input"
);

const passwordInput = document.querySelector(".password-input");
const confirmPasswordInput = document.querySelector(".confirm-password-input");
const passwordToggleBtn = document.querySelector(".password-eye-button img");
const confirmPasswordToggleBtn = document.querySelector(
  ".confirm-password-eye-button img"
);

const signform = document.querySelector(".sign-form");

/* 이메일 유효성 검사*/

function isExistUser(email) {
  const existingUser = getUserByEmail(email);
  if (existingUser) {
    return { success: false, error: "이미 존재하는 이메일입니다" };
  }

  return { success: true, error: null };
}

emailInputEl.addEventListener("focusout", () => {
  const email = emailInputEl.value;
  const validation = validateEmail(email);

  if (!validation.success) {
    showError(".error-message-email", validation.error);
  } else {
    const userExistsValidation = isExistUser(email);

    if (!userExistsValidation.success) {
      showError(".error-message-email", userExistsValidation.error);
    }
  }
});

emailInputEl.addEventListener("focus", () =>
  removeErrorMessage(".error-message-email")
);

/* 비밀번호 유효성 검사*/

function validatePassword(password) {
  if (!regexPatterns.password.test(password)) {
    return {
      success: false,
      error: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요",
    };
  }
  return { success: true, error: null };
}

passwordInputEl.addEventListener("focusout", () => {
  const password = passwordInputEl.value;
  const passwordValidation = PasswordValidator(password);
  const regexValidation = validatePassword(password);

  if (!passwordValidation.success) {
    showError(".error-message-password", passwordValidation.error);
  } else if (!regexValidation.success) {
    showError(".error-message-password", regexValidation.error);
  }
});

passwordInputEl.addEventListener("focus", () =>
  removeErrorMessage(".error-message-password")
);

/* 비밀번호 확인 유효성 검사 */

function validatePasswordConfirmation() {
  const passwordValue = passwordInputEl.value;
  const confirmPasswordValue = confirmPasswordInputEl.value;
  if (confirmPasswordValue !== passwordValue) {
    return {
      success: false,
      error: "비밀번호가 일치하지 않습니다",
    };
  }
  return { success: true, error: null };
}

confirmPasswordInputEl.addEventListener("keyup", () => {
  const validation = validatePasswordConfirmation();

  if (!validation.success) {
    showError(".error-message-password-confirm", validation.error);
  } else {
    removeErrorMessage(".error-message-password-confirm");
  }
});

/*폼 제출 동작*/
function handleSubmit(e) {
  e.preventDefault();

  const email = emailInputEl.value;
  const password = passwordInputEl.value;

  const emailValidationResult = validateEmail(email);
  if (!emailValidationResult.success) {
    showError(".error-message-email", emailValidationResult.error);
    return; // 유효하지 않은 이메일 때 함수 종료
  }

  const passwordValidationResult = validatePassword(password);
  if (!passwordValidationResult.success) {
    showError(".error-message-password", passwordValidationResult.error);
    return; // 유효하지 않은 비밀번호일 때 함수 종료
  }
  location.href = "../signin/folder.html";
}

signform.addEventListener("submit", handleSubmit);

/*Enter키를 눌러도 로그인이 되도록 추가*/
signform.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleSubmit(event);
  }
});

/*눈 모양 아이콘*/

passwordToggleBtn.addEventListener("click", () =>
  togglePasswordVisibility(passwordInput, passwordToggleBtn)
);
confirmPasswordToggleBtn.addEventListener("click", () =>
  togglePasswordVisibility(confirmPasswordInput, confirmPasswordToggleBtn)
);
