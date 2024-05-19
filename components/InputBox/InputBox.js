import { useState } from "react";
import styles from "./InputBox.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";

const cx = classNames.bind(styles);

const errorMessages = {
  required: {
    email: "이메일을 입력해 주세요.",
    password: "비밀번호를 입력해 주세요",
  },
  pattern: {
    email: "올바른 이메일 주소가 아닙니다.",
    password: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
  },
};

export function InputBox({ label, name, valid, errors, register }) {
  const validKeys = Object.keys(valid);

  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div className={cx("input-wrapper")}>
      <label>{label}</label>
      <input
        className={cx({
          "red-border": errors[name],
          "default-border": !errors[name],
        })}
        type={name !== "email" ? (isToggle ? "password" : "text") : "text"}
        placeholder="이메일을 입력해 주세요"
        {...register(name, valid)}
      />
      {validKeys.map((key) => {
        if (errors[name] && errors[name].type === key) {
          return <span>{errorMessages[key][name]}</span>;
        }
      })}
      {name !== "email" && (
        <Image
          width={16}
          height={16}
          src={isToggle ? "images/eye-off.svg" : "images/eye-on.svg"}
          alt="비밀번호 보기"
          onClick={handleToggle}
          className={cx("eye-onoff")}
        />
      )}
    </div>
  );
}
