// // 자바스크립트 ES 모듈 불러오기
// import {} from "../utils.js";

// css 선택자로 요소 선택
const emailInput = document.querySelector("#email");
const emailErrorMsg = document.querySelector("#email-error");
const passwordInput = document.querySelector("#password");
const passwordErrorMsg = document.querySelector("#password-error");
const btn = document.querySelector(".button");

// 이벤트 핸들링, //이벤트 핸들러
// 1. 이메일 이벤트 핸들링
function emailCheck(event) {
  if (emailInput.value === "") {
    emailErrorMsg.textContent = "이메일을 입력해 주세요.";
    emailErrorMsg.classList.add("error-msg-on");
    return;
  }
  if (emailInput.value.indexOf("@") === -1) {
    emailErrorMsg.textContent = "올바른 이메일 주소가 아닙니다.";
    emailErrorMsg.classList.add("error-msg-on");
    return;
  }
  if (emailInput.value !== "") {
    emailErrorMsg.textContent = "";
  }
}

// 2. 패스워드 이벤트 핸들링
function passwordCheck(event) {
  if (passwordInput.value === "") {
    passwordErrorMsg.textContent = "비밀번호를 입력해 주세요.";
    passwordErrorMsg.classList.add("error-msg-on");
    return;
  } else {
    passwordErrorMsg.textContent = "";
  }
}

function emailAndPasswordCheck(event) {
  if (
    emailInput.value === "test@codeit.com" &&
    passwordInput.value === "codeit101"
  ) {
    window.location.href = "../faq/faq.html";
    return;
  } else {
    emailErrorMsg.textContent = "이메일을 확인해 주세요.";
    passwordErrorMsg.textContent = "비밀번호를 확인해 주세요.";
    emailErrorMsg.classList.add("error-msg-on");
    passwordErrorMsg.classList.add("error-msg-on");
  }
}

// 이벤트 실행
emailInput.addEventListener("focusout", emailCheck);
passwordInput.addEventListener("focusout", passwordCheck);
btn.addEventListener("click", emailAndPasswordCheck);
