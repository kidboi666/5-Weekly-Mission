import * as enums from "./enums.js";
import * as regex from "./regex.js";
import * as sign from "./sign.js";

const email = document.querySelector("#email");
const pw = document.querySelector("#pw");
const pwCheck = document.querySelector("#pw-check");
const eyeIcon = document.querySelectorAll(".eyeIcon");
const form = document.querySelector("form");

// Input FocusOut 시
function formFocusOut(e) {
  sign.removeWarningMsg(e);
  const targetName = e.target.name;
  const targetValue = e.target.value;
  // 이메일
  if (targetName === "email") {
    // 입력 값이 없을 때
    if (targetValue === "") {
      sign.makeWarningMsg(enums.warningMsg.EMAIL_NULL, e.target);
      e.target.classList.add("warningForm");
    }
    // 올바른 형식이 아닐 때
    else if (regex.emailFormat.test(targetValue) === false) {
      sign.makeWarningMsg(enums.warningMsg.EMAIL_INVALID, e.target);
      e.target.classList.add("warningForm");
    }
    // 이미 사용 중인 이메일일 때
    else if (targetValue === enums.tempMembers.TEST_EMAIL) {
      sign.makeWarningMsg(enums.warningMsg.EMAIL_DUPLICATE, e.target);
      e.target.classList.add("warningForm");
    }
  }
  // 비밀번호
  else if (targetName === "password") {
    // 입력 값이 없을 때
    if (targetValue === "") {
      sign.makeWarningMsg(enums.warningMsg.PW_NULL, e.target);
      e.target.classList.add("warningForm");
    }
    // 올바른 형식이 아닐 때
    else if (regex.pwFormat.test(targetValue) === false) {
      sign.makeWarningMsg(enums.warningMsg.PW_INVALID, e.target);
      e.target.classList.add("warningForm");
    }
  }
  // 비밀번호 확인
  else {
    // 입력 값이 없을 때
    if (targetValue === "") {
      sign.makeWarningMsg(enums.warningMsg.PW_NULL, e.target);
      e.target.classList.add("warningForm");
    }
    // 비밀번호에 입력한 값이랑 다른지 체크
    else if (targetValue !== pw.value) {
      sign.makeWarningMsg(enums.warningMsg.PW_NOT_MATCH, e.target);
      e.target.classList.add("warningForm");
    }
  }
}

// 잘못 입력된 칸이 없는 지 확인
function checkForm() {
  if (email.classList.contains("warningForm") || pw.classList.contains("warningForm") || pwCheck.classList.contains("warningForm")) {
    // 제출 불가
  } else {
    location.href = "../folder.html";
  }
}

// Enter 입력 시
function pressEnter(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    email.dispatchEvent(new Event("focusout"));
    pw.dispatchEvent(new Event("focusout"));
    pwCheck.dispatchEvent(new Event("focusout"));
    form.dispatchEvent(new Event("submit"));
  }
}

// Form 제출 시
function submitForm(e) {
  e.preventDefault();
  checkForm();
}

email.addEventListener("focusout", formFocusOut);
email.addEventListener("focusin", sign.removeWarningMsg);
pw.addEventListener("focusout", formFocusOut);
pw.addEventListener("focusin", sign.removeWarningMsg);
pwCheck.addEventListener("focusout", formFocusOut);
pwCheck.addEventListener("focusin", sign.removeWarningMsg);
form.addEventListener("submit", submitForm);
form.addEventListener("keydown", pressEnter);
eyeIcon[0].addEventListener("click", sign.visible);
eyeIcon[1].addEventListener("click", sign.visible);
