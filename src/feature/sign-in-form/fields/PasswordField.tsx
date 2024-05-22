import React from "react";
import { Controller, Control } from "react-hook-form";
import { PasswordInput } from "@/src/ui";
import { ERROR_MESSAGE, PLACEHOLDER } from "../constant";
import styles from "../SignInForm.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface PasswordFieldProps {
  control: Control<any>;
}

/**
 * PasswordField 컴포넌트는 비밀번호 입력 필드를 렌더링합니다.
 * @component
 * @param {Control} control - react-hook-form의 control 객체
 */
export const PasswordField: React.FC<PasswordFieldProps> = ({ control }) => (
  <div className={cx("input-box")}>
    <label className={cx("label")}>비밀번호</label>
    <Controller
      control={control}
      name="password"
      rules={{ required: ERROR_MESSAGE.passwordRequired }}
      render={({ field, fieldState }) => (
        <PasswordInput
          {...field}
          hasEyeIcon
          placeholder={PLACEHOLDER.password}
          hasError={Boolean(fieldState.error)}
          helperText={fieldState.error?.message}
        />
      )}
    />
  </div>
);
