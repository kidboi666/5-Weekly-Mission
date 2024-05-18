import React, { useRef, useState } from "react";
import styles from "../Auth.module.css";
import Image from "next/image";
import eyeOffPng from "@/src/assets/icon/eye-off.png";
import eyeONPng from "@/src/assets/icon/eye-on.png";
import SocialLogin from "@/src/components/SocialLogin/SocialLogin";
import Input from "@/src/components/Input/Input";

const cautionText = {
  email: {
    empty: "이메일을 입력해 주세요.",
    notFormat: "올바른 이메일 주소가 아닙니다.",
  },
  password: {
    empty: "비밀번호를 입력해 주세요.",
  },
};

function SignInForm() {
  const [emailInputValue, setEmailInputValue] = useState<string>("");
  const [passwordInputValue, setPasswordInputValue] = useState<string>("");

  const emailCaution = useRef<HTMLDivElement>(null);
  const PasswordCaution = useRef<HTMLDivElement>(null);

  function isValidEmail(email: string) {
    const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    return regex.test(email);
  }

  const checkAndSetEmailCaution = () => {
    if (emailCaution.current) {
      emailCaution.current.innerText = "";
      if (!emailInputValue) {
        emailCaution.current.innerText = cautionText.email.empty;
        return;
      }
      if (!isValidEmail(emailInputValue)) {
        emailCaution.current.innerText = cautionText.email.notFormat;
        return;
      }
      return;
    }
  };

  const checkAndSetPasswordCaution = () => {
    if (PasswordCaution.current) {
      PasswordCaution.current.innerText = "";
      if (!passwordInputValue) {
        PasswordCaution.current.innerText = cautionText.password.empty;
        return;
      }
      return;
    }
  };

  const onChangeEmailInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInputValue(e.target.value);
  };

  const onChangePasswordInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInputValue(e.target.value);
  };

  const onFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    checkAndSetEmailCaution();
    checkAndSetPasswordCaution();
    return;
  };

  return (
    <form action="" className="loginForm" onSubmit={onFormSubmit}>
      <div className={`${styles.loginDiv} inputLoginForm01`}>
        <label htmlFor="email">이메일</label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="이메일을 입력해 주세요."
          className="emailInput"
          onChange={onChangeEmailInputValue}
          value={emailInputValue}
          onBlur={checkAndSetEmailCaution}
        />
        <div className={`${styles.loginCaution} emailCaution`} ref={emailCaution}></div>
      </div>
      <div className={`${styles.loginDiv} inputLoginForm01`}>
        <label htmlFor="password">비밀번호</label>
        <div className="inputIconDiv">
          <Input
            id="password"
            name="password"
            type="password"
            className={styles.passwordInput}
            placeholder="비밀번호를 입력해 주세요."
            onChange={onChangePasswordInputValue}
            value={passwordInputValue}
            onBlur={checkAndSetPasswordCaution}
          />
          <button type="button" className={"inputIcon off"}>
            <Image src={eyeOffPng} alt="비밀번호 보이기" />
          </button>
        </div>
        <div className={`${styles.loginCaution} passwordCaution`} ref={PasswordCaution}></div>
      </div>
      <button className="loginButton widthFull btnForm01" type="submit">
        로그인
      </button>
      <SocialLogin />
    </form>
  );
}

export default SignInForm;
