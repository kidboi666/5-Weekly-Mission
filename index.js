import { emailErr, pwdErr, errChecked } from "./utils.js";

const logButton = document.querySelector(".signin-but");
const emailMsg = document.querySelector(".email-err");
const email = document.querySelector("#email");
const pwdMsg = document.querySelector(".password-err");
const password = document.querySelector("#password");
const togglePassword = document.querySelector("#togglePassword");

// 이메일 체크
function emailCheck() {
  // 값이 없을 경우
  if (email.value === "") {
    emailErr(email, emailMsg, "이메일을 입력해 주세요.");
    return;
  }
  // 이메일 잘못 적었을 때
  if (!validEmail()) {
    emailErr(email, emailMsg, "올바른 이메일 주소가 아닙니다.");
    return;
  }
  // 잘 됬을 때
  errChecked(email, emailMsg, "");
}

// 이메일 형식 체크
function validEmail() {
  return email.value.includes("@") && email.value.includes(".");
}

// 비밀번호 체크
function passwordCheck() {
  // 값이 없을 경우
  if (password.value === "") {
    pwdErr(password, pwdMsg, "비밀번호를 입력해 주세요.");
    return;
  }
  // 잘 됬을 때
  errChecked(password, pwdMsg, "");
}

// 로그인 체크
function loginCheck(e) {
  e.preventDefault();
  if (email.value === "test@codeit.com" && password.value === "codeit101") {
    location.href = "folder.html";
  } else {
    emailErr(email, emailMsg, "이메일을 확인해 주세요.");
    pwdErr(password, pwdMsg, "비밀번호를 확인해 주세요.");
  }
}

// 눈 아이콘 토글
function eyeToggle(e) {
  const type = password.getAttribute("type");
  if (type === "text") {
    password.setAttribute("type", "password");
    togglePassword.classList.remove("fa-eye");
    togglePassword.classList.add("fa-eye-slash");
  } else {
    password.setAttribute("type", "text");
    togglePassword.classList.remove("fa-eye-slash");
    togglePassword.classList.add("fa-eye");
  }
}

// 이벤트 추가
email.addEventListener("focusout", emailCheck);
password.addEventListener("focusout", passwordCheck);
logButton.addEventListener("click", loginCheck);
logButton.addEventListener("keydown", (e) => {
  if (e.key === "enter") {
    loginCheck(e);
  }
});
togglePassword.addEventListener("click", eyeToggle);
