import styles from "./SinginForm.module.scss";
import classNames from "classnames/bind";
import { useForm } from "react-hook-form";
import { InputBox } from "../InputBox/InputBox";
import { postIdPwd, regexData, ApiUrl, checkAccessToken } from "../../utils";

const cx = classNames.bind(styles);

const ValidData = {
  email: {
    required: { value: true, message: "이메일을 입력해 주세요" },
    pattern: {
      value: regexData.email,
      message: "올바른 이메일 주소가 아닙니다.",
    },
  },
  pwd: {
    required: { value: true, message: "비밀번호를 입력해 주세요" },
  },
};

checkAccessToken("signInToken");

export function SinginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    postIdPwd(ApiUrl.signin, data, setError, "signInToken");
  };

  return (
    <form className={cx("form-wrapper")} onSubmit={handleSubmit(onSubmit)}>
      <InputBox
        label="이메일"
        name="email"
        placeholder="이메일을 입력해 주세요"
        valid={ValidData.email}
        errors={errors}
        register={register}
      />
      <InputBox
        label="비밀번호"
        name="password"
        placeholder="비밀번호를 입력해 주세요"
        valid={ValidData.pwd}
        errors={errors}
        register={register}
      />
      <button type="submit" className={cx("submit-button")}>
        로그인
      </button>
    </form>
  );
}
