import { useEffect, useRef, useState } from "react";
import styles from "./SinginForm.module.scss";
import classNames from "classnames/bind";
import { useForm } from "react-hook-form";
import { InputBox } from "../InputBox/InputBox";

const cx = classNames.bind(styles);

const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
const emailValidData = { required: true, pattern: email_regex };
const pwdValidData = { required: true };

export function SinginForm() {
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
        placeholder="비밀번호를 입력해 주세요"
        valid={pwdValidData}
        errors={errors}
        register={register}
      />
      <button type="submit" className={cx("submit-button")}>
        로그인
      </button>
    </form>
  );
}
