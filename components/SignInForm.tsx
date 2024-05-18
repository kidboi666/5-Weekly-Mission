import React, { useState } from "react";
import { EmailInput } from "./EmailInput";
import { PasswordInput } from "./PasswordInput";
import styles from "@/styles/signin.module.scss";
import classNames from "classnames/bind";

export function SignIn() {
  const cx = classNames.bind(styles);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const checkedEmail = email === "test@codeit.com";
    const checkedPassword = password === "sprint101";

    if (!checkedEmail) {
      setEmailError("이메일을 확인해주세요.");
      return;
    }

    if (!checkedPassword) {
      setPasswordError("비밀번호를 확인해주세요.");
      return;
    }

    const data = {
      email,
      password,
    };

    try {
      const response = await fetch(
        "https://bootcamp-api.codeit.kr/api/sign-in",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        // TODO: 로그인 성공 후 처리 (예: 토큰 저장, 리디렉션 등)
      } else {
        alert("로그인 실패");
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <form className={cx("input")} onSubmit={handleSubmit}>
      <EmailInput value={email} onChange={setEmail} error={emailError} />
      <PasswordInput
        value={password}
        onChange={setPassword}
        error={passwordError}
      />
      <button type="submit" id="btn" className={cx("signin", "button")}>
        로그인
      </button>
    </form>
  );
}
