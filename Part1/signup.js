import { inputErr, errChecked, validEmail } from "./utils.js";

const emailMsg = document.querySelector("#email-error");
const email = document.querySelector("#email");
const pwdMsg = document.querySelector("#password-error");
const password = document.querySelector("#password");
const togglePassword = document.querySelector("#togglePassword");
const togglePasswordConfirm = document.querySelector("#togglePasswordConfirm");
const form = document.querySelector("#login-form");
const pwdConfirm = document.querySelector("#password-confirm");
const pwdConfirmMsg = document.querySelector("#pwd-confirm-error");
// const mockUser = {
//   email: "test@codeit.com",
//   pw: "codeit101",
// };

// 이메일 체크
function emailCheck() {
  // 값이 없을 경우
  if (email.value === "") {
    inputErr(email, emailMsg, "이메일을 입력해 주세요.");
    return false;
  }
  // 이메일 잘못 적었을 때
  if (!validEmail()) {
    inputErr(email, emailMsg, "올바른 이메일 주소가 아닙니다.");
    return false;
  }
  if (!checkEmailDuplicate()) {
    return false;
  }
  // 잘 됬을 때
  errChecked(email, emailMsg, "");
}

// 이메일 중복 확인
async function checkEmailDuplicate() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/check-email",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
      }),
    }
  );

  if (response.ok) {
    // 중복아님
    return true;
  } else if (response.status === 409) {
    // 중복
    inputErr(email, emailMsg, "이미 사용 중인 이메일입니다.");
    return false;
  } else {
    console.error("Error checking email duplicate:", response.statusText);
  }
}

function makePwd() {
  // 값이 8자 미만, 문자열이나 숫자만
  const passwordValue = password.value;
  const passwordLength = passwordValue.length;
  const containsLetter = /[a-zA-Z]/.test(passwordValue);
  const containsNumber = /\d/.test(passwordValue);

  if (passwordLength < 8 || !containsLetter || !containsNumber) {
    inputErr(
      password,
      pwdMsg,
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
    );
    return false;
  }
  // 잘 됬을 때
  errChecked(password, pwdMsg, "");
}

function passwordConfirm() {
  if (password.value !== pwdConfirm.value) {
    inputErr(pwdConfirm, pwdConfirmMsg, "비밀번호가 일치하지 않아요.");
    return false;
  }
  errChecked(pwdConfirm, pwdConfirmMsg, "");
}

// 회원가입 유효성 검사
async function signup() {
  const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    localStorage.setItem("accessToken", data.accessToken);
    location.href = "./folder.html";
  } else {
    console.error("Signup failed:", response.statusText);
  }
}

// 회원가입 체크
function signupCheck(e) {
  e.preventDefault();
  if (emailCheck() === false) {
    inputErr(email, emailMsg, "이메일을 확인해 주세요.");
  }
  if (makePwd() === false) {
    inputErr(password, pwdMsg, "비밀번호를 확인해 주세요.");
  }
  if (passwordConfirm() === false) {
    inputErr(pwdConfirm, pwdConfirmMsg, "비밀번호가 일치하지 않아요.");
  }
  if (
    emailCheck() !== false &&
    makePwd() !== false &&
    passwordConfirm() !== false
  ) {
    signup();
  }
}

// 회원가입 페이지에 접근할 때 로컬 저장소에 acessToken이 있는지 확인
// window.addEventListener("DOMContentLoaded", () => {
//   const accessToken = localStorage.getItem("accessToken");
//   if (accessToken) {
//     location.href = "./folder.html";
//   }
// });

// 눈 아이콘 토글
function eyeToggle(toggleType, passwordType) {
  const type = passwordType.getAttribute("type");
  if (type === "text") {
    passwordType.setAttribute("type", "password");
    toggleType.classList.remove("fa-eye");
    toggleType.classList.add("fa-eye-slash");
  } else {
    passwordType.setAttribute("type", "text");
    toggleType.classList.remove("fa-eye-slash");
    toggleType.classList.add("fa-eye");
  }
}

// 이벤트 추가
email.addEventListener("focusout", emailCheck);
password.addEventListener("focusout", makePwd);
pwdConfirm.addEventListener("focusout", passwordConfirm);
form.addEventListener("submit", signupCheck);
togglePassword.addEventListener("click", (e) => {
  eyeToggle(togglePassword, password);
});
togglePasswordConfirm.addEventListener("click", (e) => {
  eyeToggle(togglePasswordConfirm, pwdConfirm);
});
