import { validateEmail, togglePassword } from "./utils.js";
import { API_URL } from "./Api.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const showPassword = document.getElementById("show-password");
const passwordField = document.getElementById("password");

const checkSignInToken = function () {
  const searchToken = localStorage.getItem("signin-token");
  if (searchToken) {
    location.href = "./folder";
  }
};

//입력칸이 빈칸이거나, 올바른 이메일 형식이 아닐때 에러문구 출력기능
email.addEventListener("focusout", function () {
  const emailInput = email.value;
  const emailError = document.getElementById("email-error");

  if (emailInput === "") {
    emailError.textContent = "이메일을 입력해 주세요.";
    email.classList.add("email-error-line");
  } else if (!validateEmail(emailInput)) {
    emailError.textContent = "올바른 이메일 주소가 아닙니다.";
    email.classList.add("email-errorline");
  } else {
    emailError.textContent = "";
    email.classList.remove("email-error-line");
  }
});

//비밀번호 검사
password.addEventListener("focusout", function () {
  const passwordInput = this.value;
  const pwdError = document.getElementById("pwd-error");

  if (passwordInput === "") {
    pwdError.textContent = "비밀번호를 입력해 주세요.";
    this.classList.add("pwd-error-line");
  } else {
    pwdError.textContent = "";
    this.classList.remove("pwd-error-line");
  }
});

// Submit
document.querySelector(".sign-button").addEventListener("click", isAuthSignin);
document.addEventListener("keydown", function submitByEnter(e) {
  if (e.key === "Enter") {
    isAuthSignin();
  }
});

// function submitSign() {
//   const emailInput = email.value;
//   const passwordInput = password.value;

//   // 입력된 이메일과 비밀번호가, 요구된 사항과 같은지 검사
//   if (emailInput === testUser.email && passwordInput === testUser.password) {
//     location.href = "/folder";
//   } else {
//     // 입력된 이메일과 비밀번호가 다를 시에, 오류 메세지 출력
//     const emailError = document.getElementById("email-error");
//     const pwdError = document.getElementById("pwd-error");

//     emailError.textContent = "이메일을 확인해 주세요.";
//     email.classList.add("emailErrorLine");
//     pwdError.textContent = "비밀번호를 확인해 주세요.";
//     password.classList.add("pwdErrorLine");
//   }
// }

async function isAuthSignin() {
  const emailInput = email.value;
  const passwordInput = password.value;
  try {
    const response = await fetch(`${API_URL}/sign-in`, {
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
      throw new Error("로그인 에러가 발생했습니다.");
    }
    const result = response.json();
    const SigninToken = result.ACESS_TOKEN;
    localStorage.setItem("signin-token", SigninToken);

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

// eye-button 클릭에 따라 eye-button on/off를 토글하고, password input type을 변경함

showPassword.addEventListener("click", () =>
  togglePassword(showPassword, passwordField)
);

checkSignInToken();
