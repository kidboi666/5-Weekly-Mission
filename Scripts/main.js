import * as enums from "./enums.js";
import * as regex from "./regex.js";

const form = document.querySelector("form");
const email = document.querySelector("#email");
const pw = document.querySelector("#pw");
const submit = document.querySelector(".form-button");
const eyeIcon = document.querySelector(".eyeIcon");

// 경고 메세지 추가
function makeWarningMsg(_text, pos) {
  const msg = document.createElement("p");
  msg.classList.add("warningMsg");
  msg.textContent = _text;
  pos.after(msg);
}

// 경고 메세지 제거
function removeWarningMsg(e) {
  if (e.target.nextElementSibling.classList.contains("warningMsg")) {
    e.target.nextElementSibling.remove();
  }
  if (e.target.classList.contains("warningForm")) {
    e.target.classList.remove("warningForm");
  }
}

// Input focusout 시
function formFocusOut(e) {
  // 입력 값이 없을 때
  if (e.target.value === "") {
    const isEmail = e.target.name === "email";
    const errMessage = isEmail ? enums.wargingMsg.EMAIL_NULL : enums.wargingMsg.PW_NULL;

    makeWarningMsg(errMessage, e.target);
    e.target.classList.add("warningForm");
  }
  // 올바른 이메일 형식이 아닐 때
  else if (regex.emailFormat.test(e.target.value) === false && e.target.name === "email") {
    makeWarningMsg(enums.wargingMsg.EMAIL_INVALID, e.target);
    e.target.classList.add("warningForm");
  }
}

// Form 제출 시
function submitForm(e) {
  e.preventDefault();
  // 올바른 이메일, 비밀번호 입력 시
  if (e.target[0].value === enums.tempMembers.TEST_EMAIL && e.target[1].value === enums.tempMembers.TEST_PW) {
    location.href = "../folder.html";
  }
  // 아이디 또는 비밀번호 잘못 입력 시
  else {
    makeWarningMsg(enums.wargingMsg.EMAIL_WRONG, email);
    makeWarningMsg(enums.wargingMsg.PW_WRONG, pw);
    email.classList.add("warningForm");
    pw.classList.add("warningForm");
  }
  console.log(e.target[0].value);
}

// 눈 모양 아이콘 클릭 시
function visible(e) {
  e.target.classList.toggle("visible");
  if (e.target.classList.contains("visible")) {
    pw.type = "text";
  } else {
    pw.type = "password";
  }
}

email.addEventListener("focusout", formFocusOut);
email.addEventListener("focusin", removeWarningMsg);
pw.addEventListener("focusout", formFocusOut);
pw.addEventListener("focusin", removeWarningMsg);
form.addEventListener("submit", submitForm);
eyeIcon.addEventListener("click", visible);
