import { Dispatch, SetStateAction, useState } from "react";

export const validateConfirmPassword = (
  password: string,
  confirmPassword: string,
  setPasswordErr: Dispatch<SetStateAction<string>>,
) => {
  if (!confirmPassword) {
    setPasswordErr("비밀번호를 입력해 주세요.");
    return;
  }

  if (password !== confirmPassword) {
    setPasswordErr("비밀번호가 일치하지 않습니다.");
    return;
  }

  setPasswordErr("");
  return;
};
