import { useEffect, useRef, useState } from "react";
import styles from "./SingupForm.module.scss";
import classNames from "classnames/bind";
import { useForm } from "react-hook-form";
import { InputBox } from "../InputBox/InputBox";

const cx = classNames.bind(styles);

const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
const pwd_regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/i;

const emailValidData = { required: true, pattern: email_regex };
const pwdValidData = { required: true, pattern: pwd_regex };
const pwdCHeckValidData = { required: true, pattern: pwd_regex };

export function SingupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className={cx("form-wrapper")} onSubmit={handleSubmit(onSubmit)}>
      <InputBox
        label="이메일"
        name="email"
        placeholder="이메일을 입력해 주세요"
        valid={emailValidData}
        errors={errors}
        register={register}
      />
      <InputBox
        label="비밀번호"
        name="password"
        placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요."
        valid={pwdValidData}
        errors={errors}
        register={register}
      />
      <InputBox
        label="비밀번호 확인"
        name="passwordCheck"
        placeholder="비밀번호와 일치하는 값을 입력해주세요"
        valid={pwdCHeckValidData}
        errors={errors}
        register={register}
      />
      <button type="submit" className={cx("submit-button")}>
        회원가입
      </button>
    </form>
  );
}
