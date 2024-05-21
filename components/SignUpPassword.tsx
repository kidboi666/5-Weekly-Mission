import React, { useState } from "react";
import { PasswordInput } from "./PasswordInput";

interface SignUpPasswordProps {
  password: string;
  confirmPassword: string;
  onBlur?: () => void;
  onPasswordChange: (value: string) => void;
  onConfirmPasswordChange: (value: string) => void;
}

export const isValidPassword = (password: string) => {
  const passwordForm = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return passwordForm.test(password);
};

export function SignUpPassword({
  password,
  confirmPassword,
  onPasswordChange,
  onConfirmPasswordChange,
}: SignUpPasswordProps) {
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const validatePassword = () => {
    const validPassword = isValidPassword(password);
    if (!validPassword) {
      setPasswordError("비밀번호는 영문,숫자 조합 8자 이상 입력해 주세요.");
    } else {
      setPasswordError("");
    }
  };

  const checkPassword = () => {
    if (password !== confirmPassword) {
      setConfirmPasswordError("비밀번호가 일치하지 않아요.");
    } else {
      setConfirmPasswordError("");
    }
  };

  return (
    <>
      <PasswordInput
        value={password}
        onChange={onPasswordChange}
        onBlur={validatePassword}
        error={passwordError}
      />
      <PasswordInput
        value={confirmPassword}
        onChange={onConfirmPasswordChange}
        onBlur={checkPassword}
        error={confirmPasswordError}
        id="password-confirm"
      />
    </>
  );
}
