import React from "react";
import { Controller, Control, UseFormWatch } from "react-hook-form";
import { PasswordInput as UIPasswordInput } from "@/src/ui";
import { ERROR_MESSAGE, PLACEHOLDER } from "./constant";
import styles from "../SignUpForm.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface ConfirmedPasswordInputProps {
  control: Control<any>;
  watch: UseFormWatch<any>;
}

export const PasswordConfirmField = ({
  control,
  watch,
}: ConfirmedPasswordInputProps) => (
  <div className={cx("input-box")}>
    <label className={cx("label")}>비밀번호 확인</label>
    <Controller
      control={control}
      name="confirmedPassword"
      rules={{
        validate: {
          isMatch: (value) => {
            if (value !== watch("password")) {
              return ERROR_MESSAGE.confirmedPasswordNotMatch;
            }
            return true;
          },
        },
      }}
      render={({ field, fieldState }) => (
        <UIPasswordInput
          {...field}
          hasEyeIcon
          placeholder={PLACEHOLDER.confirmedPassword}
          hasError={Boolean(fieldState.error)}
          helperText={fieldState.error?.message}
        />
      )}
    />
  </div>
);
