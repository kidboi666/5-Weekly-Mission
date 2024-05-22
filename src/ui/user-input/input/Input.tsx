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
 * Input 컴포넌트는 사용자의 입력을 받는 기본 입력 필드를 렌더링합니다.
 *
 * @component
 * @example
 * return (
 *   <Input
 *     value="example"
 *     placeholder="입력하세요"
 *     type="text"
 *     hasError={false}
 *     helperText="여기에 설명 문구가 들어갑니다."
 *     onChange={(e) => console.log(e.target.value)}
 *     onBlur={() => console.log("Input lost focus")}
 *   />
 * );
 *
 * @param {Object} props - 속성 객체입니다.
 * @param {string | number} props.value - 해당 입력 필드에 사용자가 입력한 값이 들어가는 변수입니다.
 * @param {string} [props.placeholder] - 입력 필드에 대한 설명 문구입니다.
 * @param {HTMLInputTypeAttribute} [props.type="text"] - 입력 필드의 입력 값 타입입니다 (예: "email", "password", "text") .
 * @param {boolean} [props.hasError=false] - 에러 여부를 나타냅니다. 입력이 잘못되었는지의 여부입니다.
 * @param {string} [props.helperText] - 에러 발생 시 무엇이 문제인지 알려주는 문구입니다.
 * @param {ChangeEventHandler<HTMLInputElement>} props.onChange - 사용자 입력에 따라 value의 값을 바꾸는 함수입니다.
 * @param {FocusEventHandler<HTMLInputElement>} [props.onBlur] - focus out 이벤트 핸들러입니다.
 * 
 * @returns {JSX.Element} 사용자 입력을 받는 기본 입력 필드를 렌더링하는 컴포넌트입니다.
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
