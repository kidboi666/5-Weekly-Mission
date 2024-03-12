import * as enums from "./enums.js";

const form = document.querySelector("form");
const email = document.querySelector("#email");
const pw = document.querySelector("#pw");
const submit = document.querySelector(".form-button");
const emailFormat = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
const eyeIcon = document.querySelector(".eyeIcon");

// 경고 메세지 추가
function MakeWarningMsg(_text, pos) {
  const msg = document.createElement("p");
  msg.classList.add("warningMsg");
  msg.textContent = _text;
  pos.after(msg);
}

// 이메일 부분의 경고 메세지 제거
function RemoveWarningMsg(e) {
  if (e.target.nextElementSibling.classList.contains("warningMsg")) {
    e.target.nextElementSibling.remove();
  }
  if (e.target.classList.contains("warningForm")) {
    e.target.classList.remove("warningForm");
  }
}

function FormFocusOut(e) {
  // 입력 값이 없을 때
  if (e.target.value === "") {
    if (e.target.name === "email") {
      MakeWarningMsg(enums.wargingMsg.EMAIL_NULL, e.target);
    } else {
      MakeWarningMsg(enums.wargingMsg.PW_NULL, e.target);
    }
    e.target.classList.add("warningForm");
  }
  // 올바른 이메일 형식이 아닐 때
  else if (emailFormat.test(e.target.value) === false && e.target.name === "email") {
    MakeWarningMsg(enums.wargingMsg.EMAIL_INVALID, e.target);
    e.target.classList.add("warningForm");
  }
}

function SubmitForm(e) {
  e.preventDefault();
  // 올바른 이메일, 비밀번호 입력 시
  if (e.target[0].value === enums.tempMembers.TEST_EMAIL && e.target[1].value === enums.tempMembers.TEST_PW) {
    location.href = "../folder.html";
  }
  // 아이디 또는 비밀번호 잘못 입력 시
  else {
    MakeWarningMsg(enums.wargingMsg.EMAIL_WRONG, email);
    MakeWarningMsg(enums.wargingMsg.PW_WRONG, pw);
    email.classList.add("warningForm");
    pw.classList.add("warningForm");
  }
  console.log(e.target[0].value);
}

function Visible(e) {
  e.target.classList.toggle("visible");
  if (e.target.classList.contains("visible")) {
    pw.type = "text";
  } else {
    pw.type = "password";
  }
}

email.addEventListener("focusout", FormFocusOut);
email.addEventListener("focusin", RemoveWarningMsg);
pw.addEventListener("focusout", FormFocusOut);
pw.addEventListener("focusin", RemoveWarningMsg);
form.addEventListener("submit", SubmitForm);
eyeIcon.addEventListener("click", Visible);
