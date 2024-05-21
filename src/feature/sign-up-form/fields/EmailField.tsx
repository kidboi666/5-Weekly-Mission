import React from "react";
import { Controller, Control, UseFormWatch } from "react-hook-form";
import { Input } from "@/src/ui";
import { useCheckEmailDuplicate } from "@/src/data-access";
import { ERROR_MESSAGE, PLACEHOLDER } from "./constant";
import styles from "../SignUpForm.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface EmailInputProps {
  control: Control<any>;
  watch: UseFormWatch<any>;
}

/**
 * EmailField 컴포넌트는 이메일 입력 필드를 렌더링합니다.
 * @component
 * @param {Control} control - react-hook-form의 control 객체
 * @param {UseFormWatch} watch - react-hook-form의 watch 함수
 */
export const EmailField = ({ control, watch }: EmailInputProps) => {
  const { execute: checkEmailDuplicate } = useCheckEmailDuplicate(
    watch("email")
  );

  return (
    <div className={cx("input-box")}>
      <label className={cx("label")}>이메일</label>
      <Controller
        control={control}
        name="email"
        rules={{
          required: ERROR_MESSAGE.emailRequired,
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: ERROR_MESSAGE.emailInvalid,
          },
          validate: {
            alreadyExist: async () => {
              const response = await checkEmailDuplicate();
              if (!response?.data?.data.isUsableNickname) {
                return ERROR_MESSAGE.emailAlreadyExist;
              }
              return true;
            },
          },
        }}
        render={({ field, fieldState }) => (
          <Input
            {...field}
            placeholder={PLACEHOLDER.email}
            hasError={Boolean(fieldState.error)}
            helperText={fieldState.error?.message}
          />
        )}
      />
    </div>
  );
};
