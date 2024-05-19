// components/EmailInput.tsx

import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "@/styles/signin.module.scss";

interface EmailInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export const emailCheck = (email: string) => {
  const emailForm =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return emailForm.test(email);
};

export function EmailInput({ value, onChange, error }: EmailInputProps) {
  const cx = classNames.bind(styles);
  const [isFocused, setIsFocused] = useState(false);
  const [emailErrorText, setEmailErrorText] = useState("");

  useEffect(() => {
    setEmailErrorText(error || "");
  }, [error]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailInput = e.target.value;
    onChange(emailInput);
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (value) {
      if (!emailCheck(value)) {
        setEmailErrorText("올바른 이메일 주소가 아닙니다.");
      } else {
        setEmailErrorText("");
      }
    } else {
      setEmailErrorText("이메일을 입력해 주세요.");
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const isError = !isFocused && (error || emailErrorText);

  return (
    <div className={cx("input__section")}>
      <label className={cx("text")}>
        이메일 <br />
      </label>
      <input
        id="email"
        placeholder="이메일을 입력해 주세요."
        className={cx("user-input", { "error-input": isError })}
        type="email"
        name="email"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      <div
        id="email-errorText"
        className={cx("errortext", { error: !isError })}
      >
        {emailErrorText}
      </div>
    </div>
  );
}
