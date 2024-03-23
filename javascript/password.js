export const loginPwd = document.querySelector(".sign-password");
export const loginPwdCheck = document.querySelector(".sign-password-check");
export const passwordErr = document.querySelector(".password-err");
export const passwordErrCheck = document.querySelector(".password-err-check");

/* 값이 8자 미만이로 있거나 문자열만 있는 경우 정규 표현식*/
export const regex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

import { valueVerify, valueRight } from "./apply.js";

/* 로그인 비밀번호 검증 함수 */
export function signInPasswordErr() {
  if (loginPwd.value === "") {
    valueVerify(passwordErr, loginPwd, "비밀번호를 입력해 주세요.");
  } else {
    valueRight(passwordErr, loginPwd);
  }
}

/* 회원가입 비밀번호 검증 함수 */
export function signUpPasswordErr() {
  if (!regex.test(loginPwd.value)) {
    valueVerify(
      passwordErr,
      loginPwd,
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
    );
  } else {
    valueRight(passwordErr, loginPwd);
  }
}

export function signUpPasswordCheckErr() {
  if (loginPwd.value === loginPwdCheck.value) {
    valueRight(passwordErrCheck, loginPwdCheck);
  } else {
    valueVerify(passwordErrCheck, loginPwdCheck, "비밀번호가 일치하지 않아요.");
  }
}
