import { useEffect, useRef, useState } from "react";
import styles from "./SinginForm.module.scss";
import classNames from "classnames/bind";
import { useForm } from "react-hook-form";
import { PasswordToggle } from "components";

const cx = classNames.bind(styles);
const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

export function SinginForm() {
  const [isToggle, setIsToggle] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className={cx("form-wrapper")} onSubmit={handleSubmit(onSubmit)}>
      <div className={cx("input-wrapper")}>
        <label>이메일</label>
        <input
          {...register("email", { required: true, pattern: email_regex })}
        />
        {errors.email && errors.email.type === "required" && (
          <span>이메일을 입력해 주세요.</span>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <span>올바른 이메일 주소가 아닙니다</span>
        )}
      </div>
      <div className={cx("input-wrapper")}>
        <label>비밀번호</label>
        <input
          type={isToggle ? "password" : "text"}
          {...register("password", { required: true })}
        />
        {errors.password && errors.password.type === "required" && (
          <span>비밀번호를 입력해 주세요.</span>
        )}
        <PasswordToggle isToggle={isToggle} setIsToggle={setIsToggle} />
      </div>
      <button type="submit" className={cx("submit-button")}>
        로그인
      </button>
    </form>
  );
}
