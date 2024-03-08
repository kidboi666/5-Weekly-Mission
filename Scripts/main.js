import * as enums from "./enums.js";

const form = document.querySelector("form");
const email = document.querySelector("#email");
const emailFormat = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

// 경고 메세지 추가
function MakeWarningMsg(_text, pos) {
  const msg = document.createElement("p");
  msg.classList.add("warningMsg");
  msg.textContent = _text;
  pos.after(msg);
}

// 이메일 부분의 경고 메세지 제거
function RemoveEmailWarning() {
  if (email.nextElementSibling.classList.contains("warningMsg")) {
    email.nextElementSibling.remove();
  }
  if (email.classList.contains("warningForm")) {
    email.classList.remove("warningForm");
  }
}

function FormFocusOut(e) {
  // 입력 값이 없을 때
  if (e.target.value === "") {
    MakeWarningMsg(enums.WargingMsg.EMAIL_NULL, email);
    email.classList.add("warningForm");
  }
  // 올바른 이메일 형식이 아닐 때
  else if (emailFormat.test(e.target.value) === false) {
    MakeWarningMsg(enums.WargingMsg.EMAIL_INVALID, email);
    email.classList.add("warningForm");
  }
}

email.addEventListener("focusout", FormFocusOut);
email.addEventListener("focusin", RemoveEmailWarning);
