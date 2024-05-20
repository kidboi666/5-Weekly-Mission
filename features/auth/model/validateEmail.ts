import { Dispatch, SetStateAction, useState } from "react";

export const validateEmail = (
  email: string,
  setEmailErr: Dispatch<SetStateAction<string>> | undefined,
) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!email) {
    setEmailErr && setEmailErr("이메일을 입력해 주세요.");
    return;
  }

  if (!emailRegex.test(email)) {
    setEmailErr && setEmailErr("올바른 이메일 주소가 아닙니다.");
    return;
  }

  setEmailErr && setEmailErr("");
  return;
};
