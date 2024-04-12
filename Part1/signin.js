import { inputErr, errChecked, validEmail } from "./utils.js";

const emailMsg = document.querySelector("#email-error");
const email = document.querySelector("#email");
const pwdMsg = document.querySelector("#password-error");
const password = document.querySelector("#password");
const togglePassword = document.querySelector("#togglePassword");
const form = document.querySelector("#login-form");
// const mockUser = {
//   email: "test@codeit.com",
//   pw: "codeit101",
// };

// 이메일 체크
function emailCheck() {
  // 값이 없을 경우
  if (email.value === "") {
    inputErr(email, emailMsg, "이메일을 입력해 주세요.");
    return;
  }
  // 이메일 잘못 적었을 때
  if (!validEmail()) {
    inputErr(email, emailMsg, "올바른 이메일 주소가 아닙니다.");
    return;
  }
  // 잘 됬을 때
  errChecked(email, emailMsg, "");
}

// 비밀번호 체크
function passwordCheck() {
  // 값이 없을 경우
  if (password.value === "") {
    inputErr(password, pwdMsg, "비밀번호를 입력해 주세요.");
    return;
  }
  // 잘 됬을 때
  errChecked(password, pwdMsg, "");
}

// 로그인 체크
// function loginCheck(e) {
//   e.preventDefault();
//   if (email.value === mockUser.email && password.value === mockUser.pw) {
//     location.href = "folder.html";
//     return;
//   }
//   inputErr(email, emailMsg, "이메일을 확인해 주세요.");
//   inputErr(password, pwdMsg, "비밀번호를 확인해 주세요.");
// }
async function loginCheck(e) {
  e.preventDefault();

  const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
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
    return;
  }
  inputErr(email, emailMsg, "이메일을 확인해 주세요.");
  inputErr(password, pwdMsg, "비밀번호를 확인해 주세요.");
}

// 로그인 페이지에 접근할 때 로컬 저장소에 acessToken이 있는지 확인
// window.addEventListener("DOMContentLoaded", () => {
//   const accessToken = localStorage.getItem("accessToken");
//   if (accessToken) {
//     location.href = "./folder.html";
//   }
// });

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
form.addEventListener("submit", loginCheck);

togglePassword.addEventListener("click", eyeToggle);
