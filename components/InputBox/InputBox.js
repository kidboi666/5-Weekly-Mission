import { useState } from "react";
import styles from "./InputBox.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import { ErrorMessage } from "@hookform/error-message";

const cx = classNames.bind(styles);

export function InputBox({
  label,
  name,
  errors,
  register,
  placeholder,
  valid,
  validate,
}) {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  const validationProps = {
    ...valid, // 이메일 필드에 대한 기본 유효성 검사를 포함합니다.
    validate,
  };

  return (
    <div className={cx("input-wrapper")}>
      <label>{label}</label>
      <input
        className={cx({
          "red-border": errors[name],
          "default-border": !errors[name],
        })}
        type={name !== "email" ? (isToggle ? "test" : "password") : "text"}
        placeholder={placeholder}
        {...register(name, validationProps)}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <p>{message}</p>}
      />
      {name !== "email" && (
        <Image
          width={16}
          height={16}
          src={isToggle ? "images/eye-on.svg" : "images/eye-off.svg"}
          alt="비밀번호 보기"
          onClick={handleToggle}
          className={cx("eye-onoff")}
        />
      )}
    </div>
  );
}
