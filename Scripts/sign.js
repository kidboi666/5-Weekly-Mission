import * as enums from "./enums.js";
import * as regex from "./regex.js";

// 경고 메세지 추가
export function makeWarningMsg(_text, pos) {
  const msg = document.createElement("p");
  msg.classList.add("warningMsg");
  msg.textContent = _text;
  pos.after(msg);
}

// 경고 메세지 제거
export function removeWarningMsg(e) {
  if (e.target.nextElementSibling.classList.contains("warningMsg")) {
    e.target.nextElementSibling.remove();
  }
  if (e.target.classList.contains("warningForm")) {
    e.target.classList.remove("warningForm");
  }
}

// 이메일 형식이 올바른 지 확인
export function isProperEmail(e) {
  const targetValue = e.target.value;
  // 입력 값이 없을 때
  if (targetValue === "") {
    makeWarningMsg(enums.warningMsg.EMAIL_NULL, e.target);
    e.target.classList.add("warningForm");
    return false;
  }
  // 올바른 형식이 아닐 때
  else if (regex.emailFormat.test(targetValue) === false) {
    makeWarningMsg(enums.warningMsg.EMAIL_INVALID, e.target);
    e.target.classList.add("warningForm");
    return false;
  }
  return true;
}

// 비밀번호 입력이 없는 지 확인
export function isPasswordNull(e) {
  const targetValue = e.target.value;
  if (targetValue === "") {
    makeWarningMsg(enums.warningMsg.PW_NULL, e.target);
    e.target.classList.add("warningForm");
    return true;
  }
  return false;
}

// 눈 모양 아이콘 클릭 시
export function visible(e) {
  e.target.classList.toggle("visible");
  if (e.target.classList.contains("visible")) {
    e.target.parentNode.firstElementChild.type = "text";
  } else {
    e.target.parentNode.firstElementChild.type = "password";
  }
}
