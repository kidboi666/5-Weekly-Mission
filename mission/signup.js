import { validateEmail, togglePassword, testUser } from "./utils.js";
import { API_URL } from "./Api.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordCheck = document.getElementById("password-check");
const showPassword = document.getElementById("show-password");
const passwordField = document.getElementById("password");
const showPasswordCheck = document.getElementById("show-password-check");
const passwordCheckField = document.getElementById("password-check");

//입력칸이 빈칸이거나, 올바른 이메일 형식이 아니거나 이미 사용 중인 이메일을 입력 할 때, 에러문구 출력기능
email.addEventListener("focusout", function () {
  const emailInput = this.value.trim();
  const emailError = document.getElementById("email-error");

  if (emailInput === "") {
    emailError.textContent = "이메일을 입력해 주세요.";
    this.classList.add("email-error-line");
  } else if (!validateEmail(emailInput)) {
    emailError.textContent = "올바른 이메일 주소가 아닙니다.";
    this.classList.add("email-error-line");
  } else if (emailInput === testUser.email) {
    emailError.textContent = "이미 사용 중인 이메일입니다.";
    this.classList.add("email-error-line");
  } else {
    emailError.textContent = "";
    this.classList.remove("email-error-line");
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
    this.classList.add("pwd-error-line");
  } else {
    pwdError.textContent = "";
    this.classList.remove("pwd-error-line");
  }
});

//비밀번호 확인 검사
passwordCheck.addEventListener("focusout", function () {
  const passwordInput = password.value.trim();
  const passwordCheckInput = passwordCheck.value.trim();
  const pwdCheckerError = document.getElementById("pwd-checker-error");

  if (passwordInput === passwordCheckInput) {
    pwdCheckerError.textContent = "";
    this.classList.remove("pwd-error-line");
  } else {
    pwdCheckerError.textContent = "비밀번호가 일치하지 않아요.";
    this.classList.add("pwd-error-line");
  }
});

document.querySelector(".sign-button").addEventListener("click", isAuthSignup);
document.addEventListener("keydown", function submitByEnter(e) {
  if (e.key === "Enter") {
    isAuthSignup();
  }
});

// function submitSign() {
//   const emailInput = email.value.trim();
//   const passwordInput = password.value.trim();
//   const passwordCheckInput = passwordCheck.value.trim();
//   const num = passwordInput.search(/[0-9]/g);
//   const eng = passwordInput.search(/[a-z]/gi);
//   const pwdError = document.getElementById("pwd-error");
//   const emailError = document.getElementById("email-error");
//   const pwdCheckerError = document.getElementById("pwd-checker-error");

//   // 입력된 이메일과 비밀번호가, 요구된 사항과 같은지 검사
//   if (
//     (emailInput !== testUser.email &&
//       validateEmail(email) &&
//       passwordCheckInput === passwordInput &&
//       !passwordInput.length < 8) ||
//     !num < 0 ||
//     !eng < 0
//   ) {
//     location.href = "/folder.html";
//   } else {
//     emailError.textContent = "이메일을 확인해 주세요.";
//     email.classList.add("emailErrorLine");
//     pwdError.textContent = "비밀번호를 확인해 주세요.";
//     password.classList.add("pwdErrorLine");
//     pwdCheckerError.textContent = "비밀번호를 확인해 주세요.";
//     passwordCheck.classList.add("pwdErrorLine");
//   }
// }

async function CheckSingupEmail() {
  const emailInput = email.value.trim();
  const emailError = document.getElementById("email-error");
  try {
    const response = await fetch(`${API_URL}/check-email`, {
      method: "POST",
      body: JSON.stringify({
        email: `${emailInput}`,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("이메일 체크에 실패했습니다.");
    }
    return;
  } catch (error) {
    emailError.textContent = "이미 사용 중인 이메일입니다.";
    email.classList.add("email-error-line");
  }
}

async function isAuthSignup() {
  const emailInput = email.value.trim();
  const passwordInput = password.value.trim();
  const passwordCheckInput = passwordCheck.value.trim();
  if (
    (CheckSingupEmail() &&
      passwordCheckInput === passwordInput &&
      !passwordInput.length < 8) ||
    !num < 0 ||
    !eng < 0
  )
    try {
      const response = await fetch(`${API_URL}/sign-up`, {
        method: "POST",
        body: JSON.stringify({
          email: `${emailInput}`,
          password: `${passwordInput}`,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("회원가입 에러가 발생했습니다.");
      }
      location.href = "./folder";
    } catch (error) {
      const emailError = document.getElementById("email-error");
      const pwdError = document.getElementById("pwd-error");
      emailError.textContent = "이메일을 확인해 주세요.";
      email.classList.add("email-error-line");
      pwdError.textContent = "비밀번호를 확인해 주세요.";
      password.classList.add("pwd-error-line");
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
