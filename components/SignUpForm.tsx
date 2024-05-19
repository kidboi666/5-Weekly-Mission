import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { EmailInput, emailCheck } from "./EmailInput";
import { SignUpPassword, isValidPassword } from "./SignUpPassword";
import styles from "@/styles/signup.module.scss";
import classNames from "classnames/bind";

export function SignUp() {
  const cx = classNames.bind(styles);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const router = useRouter();

  const signUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailChecked = emailCheck(email);
    const validPassword = isValidPassword(password);
    const passwordMatch = password === confirmPassword;

    if (emailChecked && validPassword && passwordMatch) {
      const checkEmailUrl = "https://bootcamp-api.codeit.kr/api/check-email";
      const checkEmailData = { email };
      try {
        const checkEmailResponse = await axios.post(
          checkEmailUrl,
          checkEmailData
        );
        if (checkEmailResponse.status === 409) {
          setEmailError("이미 사용 중인 이메일입니다.");
          console.log("hello~");
          return;
        } else {
          setEmailError("");
        }

        const signUpUrl = "https://bootcamp-api.codeit.kr/api/sign-up";
        const signUpData = { email, password };
        const signUpResponse = await axios.post(signUpUrl, signUpData);
        if (signUpResponse.status === 200) {
          router.push("/folder");
        }
      } catch (error) {
        console.log("Error:", error);
        console.log("hello2");
      }
    }
  };

  return (
    <form className={cx("signup__form")} onSubmit={signUp}>
      <EmailInput value={email} onChange={setEmail} error={emailError} />
      <SignUpPassword
        password={password}
        confirmPassword={confirmPassword}
        onPasswordChange={setPassword}
        onConfirmPasswordChange={setConfirmPassword}
      />
      <button type="submit" className={cx("signup__button")}>
        회원가입
      </button>
    </form>
  );
}
