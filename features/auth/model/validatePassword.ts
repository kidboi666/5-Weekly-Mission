import { Dispatch, SetStateAction, useState } from "react";

export const validatePassword = (
  password: string,
  setPasswordErr: Dispatch<SetStateAction<string>>,
) => {
  if (!password) {
    setPasswordErr("비밀번호를 입력해 주세요.");
    return;
  }
  setPasswordErr("");
  return;
};
