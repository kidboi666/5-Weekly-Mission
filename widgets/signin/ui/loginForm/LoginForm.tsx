import React, { useState } from "react";
import styles from "./loginForm.module.css";
import { onClickLogin } from "@/features/auth/model/onClickLogin";

import Input from "@//shared/ui/input/Input";
import { useLoginFormState } from "../../model/useLoginFormState";
import EyeBtn from "@/features/auth/ui/passwordVisible/EyeBtn";
import LoginBtn from "@/features/auth/ui/loginBtn/LoginBtn";

const LoginForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { emailValidation, passwordValidation, handleSubmit, errors } =
    useLoginFormState();

  return (
    <form
      className={styles.container}
      onSubmit={handleSubmit((data) => onClickLogin(data))}
    >
      <Input
        register={emailValidation}
        label="이메일"
        type="text"
        placeholder="이메일을 입력해주세요."
      />
      <p className={styles.errMsg}>{errors.email?.message}</p>
      <div className={styles.inputWrap}>
        <Input
          register={passwordValidation}
          type={isVisible ? "text" : "password"}
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
        />
        <EyeBtn setIsVisible={setIsVisible} isVisible={isVisible} />
      </div>
      <p className={styles.errMsg}>{errors.password?.message}</p>
      <LoginBtn onClick={handleSubmit((data) => onClickLogin(data))} />
    </form>
  );
};

export default LoginForm;
