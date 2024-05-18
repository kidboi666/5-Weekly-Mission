import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
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
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    const data = { email, password };
    try {
      const response = await axios.post(
        "https://bootcamp-api.codeit.kr/api/sign-in",
        data
      );
      if (response.status === 200) {
        router.push("/folder");
      }
    } catch (error: any) {
      if (error.response) {
        if (error.response.status === 400) {
          setEmailError("이메일을 확인해 주세요.");
          setPasswordError("비밀번호를 확인해 주세요.");
        }
      }
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
