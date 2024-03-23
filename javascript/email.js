export const loginId = document.querySelector(".sign-email");
export const emailErr = document.querySelector(".email-err");

import { valueVerify, valueRight, CORRECT_EMAIL } from "./apply.js";

/* 로그인 이메일 검증 함수 */
export function signInEmailErr() {
  if (loginId.value === "") {
    valueVerify(emailErr, loginId, "이메일을 입력해주세요.");
  } else if (loginId.value.indexOf("@") == -1) {
    valueVerify(emailErr, loginId, "올바른 이메일 주소가 아닙니다.");
  } else {
    valueRight(emailErr, loginId);
  }
}

/* 회원가입 이메일 검증 함수 */
export function signUpEmailErr() {
  if (loginId.value === "") {
    valueVerify(emailErr, loginId, "이메일을 입력해주세요.");
  } else if (loginId.value === CORRECT_EMAIL) {
    valueVerify(emailErr, loginId, "이미 사용 중인 이메일입니다.");
  } else if (loginId.value.indexOf("@") == -1) {
    valueVerify(emailErr, loginId, "올바른 이메일 주소가 아닙니다.");
  } else {
    valueRight(emailErr, loginId);
  }
}
