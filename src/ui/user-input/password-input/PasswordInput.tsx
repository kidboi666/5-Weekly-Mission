import {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  useMemo,
  useState,
} from "react";
import styles from "./PasswordInput.module.scss";
import classNames from "classnames/bind";
import { Input, InputProps } from "@/src/ui";
import EyeOnIcon from "./eye-on.svg";
import EyeOffIcon from "./eye-off.svg";

const cx = classNames.bind(styles);

type PasswordInputProps = {
  hasEyeIcon?: boolean;
} & Omit<InputProps, "type">;

/**
 *
 * @hasEyeIcon 눈 모양의 비밀번호 가리고 안 가리고 결정하는 아이콘
 * @value 해당 입력 필드에 사용자가 입력한 값이 들어가는 변수
 * @placeholder 입력 필드에 대한 설명 문구
 * @hasError 에러 여부: 입력이 잘못되었는지의 여부
 * @helperText 에러 발생시 무엇이 문제인지 알려주는 문구
 * @onChange 사용자 입력에 따라 value의 값을 바꾸는 setter 함수
 * @onBlur focus out 이벤트 handler
 * @returns 비밀번호 입력 필드
 */
export const PasswordInput = ({
  hasEyeIcon = false,
  value,
  placeholder,
  hasError = false,
  helperText,
  onChange,
  onBlur,
}: PasswordInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const inputType = useMemo(
    () => (isPasswordVisible ? "text" : "password"),
    [isPasswordVisible]
  );
  const EyeIcon = useMemo(
    () => (
      <button
        className={cx("button")}
        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
      >
        {isPasswordVisible ? <EyeOnIcon /> : <EyeOffIcon />}
      </button>
    ),
    [isPasswordVisible]
  );

  return (
    <div className={cx("container")}>
      <Input
        value={value}
        placeholder={placeholder}
        type={inputType}
        hasError={hasError}
        helperText={helperText}
        onChange={onChange}
        onBlur={onBlur}
      />
      {hasEyeIcon && EyeIcon}
    </div>
  );
};
