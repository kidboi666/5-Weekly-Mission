import * as enums from "./enums.js";

const form = document.querySelector("form");
const email = document.querySelector("#email");
const pw = document.querySelector("#pw");
const emailFormat = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

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
      MakeWarningMsg(enums.WargingMsg.EMAIL_NULL, e.target);
    } else {
      MakeWarningMsg(enums.WargingMsg.PW_NULL, e.target);
    }
    e.target.classList.add("warningForm");
  }
  // 올바른 이메일 형식이 아닐 때
  else if (emailFormat.test(e.target.value) === false && e.target.name === "email") {
    MakeWarningMsg(enums.WargingMsg.EMAIL_INVALID, e.target);
    e.target.classList.add("warningForm");
  }
}

email.addEventListener("focusout", FormFocusOut);
email.addEventListener("focusin", RemoveWarningMsg);
pw.addEventListener("focusout", FormFocusOut);
pw.addEventListener("focusin", RemoveWarningMsg);
