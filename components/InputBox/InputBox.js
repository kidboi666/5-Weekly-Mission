import styles from "./InputBox.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function SinginForm({ errors }) {
  return (
    <div className={cx("input-wrapper")}>
      <label>이메일:</label>
      <input {...register("email", { required: true, pattern: email_regex })} />
      {errors.email && errors.email.type === "required" && (
        <span>이메일을 입력해 주세요.</span>
      )}
      {errors.email && errors.email.type === "pattern" && (
        <span>올바른 이메일 주소가 아닙니다</span>
      )}
    </div>
  );
}
