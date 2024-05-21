import React, { useEffect, useCallback } from "react";
import { Cta } from "@/src/ui";
import { useSignIn } from "@/src/data-access";
import { useTokenRedirect } from "@/src/util";
import { useForm } from "react-hook-form";
import { EmailField, PasswordField } from "./fields";
import { ERROR_MESSAGE } from "./constant";
import styles from "./SignInForm.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

/**
 * SignInForm 컴포넌트는 사용자 로그인 폼을 렌더링합니다.
 * @component
 */
export const SignInForm = () => {
  const { control, handleSubmit, watch, setError } = useForm({
    defaultValues: { email: "", password: "" },
    mode: "onBlur",
  });
  const { execute, data, error } = useSignIn({
    email: watch("email"),
    password: watch("password"),
  });

  useTokenRedirect(data?.data.accessToken);

  useEffect(() => {
    if (error) {
      setError("email", { type: "invalid", message: ERROR_MESSAGE.emailCheck });
      setError("password", {
        type: "invalid",
        message: ERROR_MESSAGE.passwordCheck,
      });
    }
  }, [error, setError]);

  const onSubmit = useCallback(() => {
    execute();
  }, [execute]);

  return (
    <form className={cx("form")} onSubmit={handleSubmit(onSubmit)}>
      <EmailField control={control} />
      <PasswordField control={control} />
      <button className={cx("button")} type="submit">
        <Cta>로그인</Cta>
      </button>
    </form>
  );
};
