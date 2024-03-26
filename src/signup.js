const emailInput = document.querySelector("#email");
const nonEmailMsg = document.querySelector(".nonEmail");
const invalidEmailMsg = document.querySelector(".invalidEmail");
const isEmailMsg = document.querySelector(".isEmail");

const eyeOn = document.querySelector(".eyeOn.password");
const eyeOff = document.querySelector(".eyeOff.password");
const eyeBtn = document.querySelector(".eyeBtn.password");
const passwordInput = document.querySelector("#password");
const invalidPasswordMsg = document.querySelector(".invalidPassword");

const confirmEyeOn = document.querySelector(".eyeOn.confirm");
const confirmEyeOff = document.querySelector(".eyeOff.confirm");
const confirmEyeBtn = document.querySelector(".eyeBtn.confirm");
const confirmPasswordInput = document.querySelector("#confirmPassword");
const invalidConfirmPasswordMsg = document.querySelector(".invalidConfirmPassword");

const signupBtn = document.querySelector(".signup-btn");

// Test 계정
const TEST_EMAIL = "test@codeit.com";
const TEST_PASSWORD = "codeit101";

const PASSWORD_CONFIG = {
  PASSWORD: { INPUT: passwordInput, EYE_ON: eyeOn, EYE_OFF: eyeOff },
  CONFIRM: { INPUT: confirmPasswordInput, EYE_ON: confirmEyeOn, EYE_OFF: confirmEyeOff },
};

let isEmailValid = false;
let isPasswordValid = false;
let isConfirmPasswordValid = false;

/**
 * 비밀번호와 비밀번호 확인의 눈 아이콘을 클릭했을 때, 비밀번호를 보여주거나 가리는 함수입니다.
 * @param {string} type - 비밀번호의 타입입니다. PASSWORD 또는 CONFIRM이 가능합니다.
 * @returns {void}
 */
const handleToPasswordEye = (type) => {
  const passwordType = PASSWORD_CONFIG[type];
  const passwordAttribute = PASSWORD_CONFIG[type].INPUT.getAttribute("type");

  if (passwordAttribute === "password") {
    passwordType.INPUT.setAttribute("type", "text");
    passwordType.EYE_OFF.classList.toggle("none");
    passwordType.EYE_ON.classList.toggle("none");
    return;
  } else {
    passwordType.INPUT.setAttribute("type", "password");
    passwordType.EYE_OFF.classList.toggle("none");
    passwordType.EYE_ON.classList.toggle("none");
    return;
  }
};

/**
 * 이메일 유효성을 검사하는 함수입니다.
 * @param {Event} event - 이벤트 객체
 * @returns {void}
 */
const emailValidation = ({ target }) => {
  console.log(target);
  const email = target.value;
  const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  // email이 있는지 확인
  if (!email) {
    nonEmailMsg.classList.remove("errNone");
  } else {
    nonEmailMsg.classList.add("errNone");
  }

  // 이메일 유효성 검사
  if (email && !emailRegExp.test(email)) {
    invalidEmailMsg.classList.remove("errNone");
  } else {
    invalidEmailMsg.classList.add("errNone");
  }

  // 이미 존재하는 이메일인지 확인
  if (email === TEST_EMAIL) {
    isEmailMsg.classList.remove("errNone");
  } else {
    isEmailMsg.classList.add("errNone");
  }

  // 이메일 유효성 검사 후, input 박스의 border 색상을 결정합니다.
  if (email && emailRegExp.test(email) && email !== TEST_EMAIL) {
    emailInput.classList.remove("err");
    isEmailValid = true;
  } else {
    emailInput.classList.add("err");
  }
};

// 비밀번호 유효성을 검사하는 함수입니다.
const passwordvalidation = ({ target }) => {
  const password = target.value;
  const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;

  // 비밀번호 유효성 검사

  if (passwordRegExp.test(password)) {
    invalidPasswordMsg.classList.add("errNone");
    passwordInput.classList.remove("err");
    isPasswordValid = true;
  } else {
    invalidPasswordMsg.classList.remove("errNone");
    passwordInput.classList.add("err");
  }
};

// 비밀번호 확인 유효성을 검사하는 함수입니다.
const confirmPasswordvalidation = ({ target }) => {
  const confirmPassword = target.value;
  const password = passwordInput.value;

  // 비밀번호 확인 유효성 검사
  if (confirmPassword && confirmPassword === password) {
    invalidConfirmPasswordMsg.classList.add("errNone");
    confirmPasswordInput.classList.remove("err");
    isConfirmPasswordValid = true;
  } else {
    invalidConfirmPasswordMsg.classList.remove("errNone");
    confirmPasswordInput.classList.add("err");
  }
};

/**
 * 회원가입 버튼 클릭 시 실행되는 함수입니다.
 * 이메일, 비밀번호, 비밀번호 확인이 모두 유효한 경우 "/foder"로 페이지를 이동합니다.
 * 유효하지 않은 경우, 각 입력 필드에 대한 유효성 검사를 실행합니다.
 */
const onClickSignupBtn = () => {
  if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
    window.location.href = "/foder";
  } else {
    emailValidation({ target: emailInput });
    passwordvalidation({ target: passwordInput });
    confirmPasswordvalidation({ target: confirmPasswordInput });
  }
};

/**
 * 해당 함수는 로딩 시 호출되는 함수입니다.
 * 만약 accessToken이 존재한다면 "folder.html"로 페이지를 이동합니다.
 */
const handleOnLoading = () => {
  const accessToken = window.localStorage.getItem("accessToken");
  if (accessToken) {
    window.location.href = "folder.html";
  }
};

// Event Listener 등록
document.addEventListener("DOMContentLoaded", handleOnLoading);
eyeBtn.addEventListener("click", () => handleToPasswordEye("PASSWORD"));
confirmEyeBtn.addEventListener("click", () => handleToPasswordEye("CONFIRM"));
emailInput.addEventListener("focusout", emailValidation);
passwordInput.addEventListener("focusout", passwordvalidation);
confirmPasswordInput.addEventListener("focusout", confirmPasswordvalidation);
signupBtn.addEventListener("click", onClickSignupBtn);
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    onClickSignupBtn();
  }
});
