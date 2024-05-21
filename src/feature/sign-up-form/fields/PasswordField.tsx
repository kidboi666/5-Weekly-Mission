import React from "react";
import { Controller, Control } from "react-hook-form";
import { PasswordInput as UIPasswordInput } from "@/src/ui";
import { ERROR_MESSAGE, PLACEHOLDER } from "./constant";
import styles from "../SignUpForm.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface PasswordInputProps {
  control: Control<any>;
}

export const PasswordField = ({ control }: PasswordInputProps) => (
  <div className={cx("input-box")}>
    <label className={cx("label")}>비밀번호</label>
    <Controller
      control={control}
      name="password"
      rules={{
        required: ERROR_MESSAGE.passwordInvalid,
        pattern: {
          value: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
          message: ERROR_MESSAGE.passwordInvalid,
        },
      }}
      render={({ field, fieldState }) => (
        <UIPasswordInput
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
