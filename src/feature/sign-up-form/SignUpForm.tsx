import React, { useCallback } from "react";
import { Cta } from "@/src/ui";
import { useSignUp } from "@/src/data-access";
import { useTokenRedirect } from "@/src/util";

import { useForm } from "react-hook-form";
import { EmailField, PasswordConfirmField, PasswordField } from "./fields";
import styles from "./SignUpForm.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

/**
 * SignUpForm 컴포넌트는 사용자 회원가입 폼을 렌더링합니다.
 * @component
 */
export const SignUpForm = () => {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: { email: "", password: "", confirmedPassword: "" },
    mode: "onBlur",
    reValidateMode: "onBlur",
  });
  const { execute: signUp, data } = useSignUp({
    email: watch("email"),
    password: watch("password"),
  });

  useTokenRedirect(data?.data.accessToken);

  const onSubmit = useCallback(() => {
    signUp();
  }, [signUp]);

  return (
    <form className={cx("form")} onSubmit={handleSubmit(onSubmit)}>
      <EmailField control={control} watch={watch} />
      <PasswordField control={control} />
      <PasswordConfirmField control={control} watch={watch} />
      <button className={cx("button")} type="submit">
        <Cta>회원가입</Cta>
      </button>
    </form>
  );
};
