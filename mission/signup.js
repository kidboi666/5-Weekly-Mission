import { validateEmail, togglePassword, testUser } from "./utils.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordCheck = document.getElementById("passwordCheck");
const showPassword = document.getElementById("showPassword");
const passwordField = document.getElementById("password");
const showPasswordCheck = document.getElementById("showPasswordCheck");
const passwordCheckField = document.getElementById("passwordCheck");

//입력칸이 빈칸이거나, 올바른 이메일 형식이 아니거나 이미 사용 중인 이메일을 입력 할 때, 에러문구 출력기능
email.addEventListener("focusout", function () {
  const emailInput = this.value.trim();
  const emailError = document.getElementById("email-error");

  if (emailInput === "") {
    emailError.textContent = "이메일을 입력해 주세요.";
    this.classList.add("emailErrorLine");
  } else if (!validateEmail(emailInput)) {
    emailError.textContent = "올바른 이메일 주소가 아닙니다.";
    this.classList.add("emailErrorLine");
  } else if (emailInput === testUser.email) {
    emailError.textContent = "이미 사용 중인 이메일입니다.";
    this.classList.add("emailErrorLine");
  } else {
    emailError.textContent = "";
    this.classList.remove("emailErrorLine");
  }
});

//비밀번호 검사
password.addEventListener("focusout", function () {
  const passwordInput = this.value.trim();
  const num = passwordInput.search(/[0-9]/g);
  const eng = passwordInput.search(/[a-z]/gi);
  const pwdError = document.getElementById("pwd-error");

  if (passwordInput.length < 8 || num < 0 || eng < 0) {
    pwdError.textContent = "비밀번호는 영문,숫자 조합 8자 이상 입력해 주세요.";
    this.classList.add("pwdErrorLine");
  } else {
    pwdError.textContent = "";
    this.classList.remove("pwdErrorLine");
  }
});

//비밀번호 확인 검사
passwordCheck.addEventListener("focusout", function () {
  const passwordInput = password.value.trim();
  const passwordCheckInput = passwordCheck.value.trim();
  const pwdCheckerError = document.getElementById("pwdCheckerError");

  if (passwordInput === passwordCheckInput) {
    pwdCheckerError.textContent = "";
    this.classList.remove("pwdErrorLine");
  } else {
    pwdCheckerError.textContent = "비밀번호가 일치하지 않아요.";
    this.classList.add("pwdErrorLine");
  }
});

document.querySelector(".sign-button").addEventListener("click", submitSign);
document.addEventListener("keydown", function submitByEnter(e) {
  if (e.key === "Enter") {
    submitSign();
  }
});

function submitSign() {
  const emailInput = email.value.trim();
  const passwordInput = password.value.trim();
  const passwordCheckInput = passwordCheck.value.trim();
  const num = passwordInput.search(/[0-9]/g);
  const eng = passwordInput.search(/[a-z]/gi);
  const pwdError = document.getElementById("pwd-error");
  const emailError = document.getElementById("email-error");
  const pwdCheckerError = document.getElementById("pwdCheckerError");

  // 입력된 이메일과 비밀번호가, 요구된 사항과 같은지 검사
  if (
    (emailInput !== testUser.email &&
      validateEmail(email) &&
      passwordCheckInput === passwordInput &&
      !passwordInput.length < 8) ||
    !num < 0 ||
    !eng < 0
  ) {
    location.href = "/folder.html";
  } else {
    emailError.textContent = "이메일을 확인해 주세요.";
    email.classList.add("emailErrorLine");
    pwdError.textContent = "비밀번호를 확인해 주세요.";
    password.classList.add("pwdErrorLine");
    pwdCheckerError.textContent = "비밀번호를 확인해 주세요.";
    passwordCheck.classList.add("pwdErrorLine");
  }
}

// 비밀번호 input 이벤트 핸들러
showPassword.addEventListener("click", () =>
  togglePassword(showPassword, passwordField)
);

// 비밀번호 확인 input 이벤트 핸들러
showPasswordCheck.addEventListener("click", () =>
  togglePassword(showPasswordCheck, passwordCheckField)
);
