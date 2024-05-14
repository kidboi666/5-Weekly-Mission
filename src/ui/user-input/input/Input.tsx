import {
  ChangeEventHandler,
  FocusEventHandler,
  HTMLInputTypeAttribute,
} from "react";
import styles from "./Input.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export type InputProps = {
  value: string | number;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  hasError?: boolean;
  helperText?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
};

/**
 *
 * @value 해당 입력 필드에 사용자가 입력한 값이 들어가는 변수
 * @placeholder 입력 필드에 대한 설명 문구
 * @type 입력 필드의 입력 값이 어떤 것인지 ex) 이메일, 비밀번호, 텍스트...
 * @hasError 에러 여부: 입력이 잘못되었는지의 여부
 * @helperText 에러 발생시 무엇이 문제인지 알려주는 문구
 * @onChange 사용자 입력에 따라 value의 값을 바꾸는 setter 함수
 * @onBlur focus out 이벤트 handler
 * @returns 사용자 입력을 받는 기본 입력 필드
 */
export const Input = ({
  value,
  placeholder,
  type = "text",
  hasError = false,
  helperText,
  onChange,
  onBlur,
}: InputProps) => {
  return (
    <div className={cx("container")}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={cx("input", { error: hasError })}
      />
      {helperText && (
        <p className={cx("helper-text", { error: hasError })}>{helperText}</p>
      )}
    </div>
  );
};
