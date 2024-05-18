import styles from "./AuthForm.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { submitLoginForm, accessTokenCheck } from "@/api/Auth";
import PasswordToggleButton from "./PasswordToggleButton";

interface SigninFormValues {
  email: string;
  password: string;
}

function SigninForm() {
  const [passwordType, setPasswordType] = useState<"password" | "text">(
    "password"
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormValues>();

  const onSubmit: SubmitHandler<SigninFormValues> = (data) => {
    submitLoginForm(data.email, data.password);
  };
  // accessTokenCheck();

  const handlePasswordType = (
    setType: React.Dispatch<React.SetStateAction<"password" | "text">>
  ) => {
    setType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.authForm}>
      <div className={styles.inputGroup}>
        <label htmlFor="email">아이디</label>
        <input
          id="email"
          type="email"
          placeholder="이메일을 입력해주세요."
          {...register("email", {
            required: { value: true, message: "이메일을 입력해주세요" },
            pattern: {
              value: /^\S+@\S+$/i,
              message: "이메일 형식이 올바르지 않습니다",
            },
          })}
        />
        {<p className={styles.errorMessage}>{errors.email?.message}</p>}
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="password">비밀번호</label>
        <div className={styles.passwordInput}>
          <input
            id="password"
            type={passwordType}
            placeholder="비밀번호를 입력해주세요."
            {...register("password", {
              required: { value: true, message: "비밀번호를 입력해주세요." },
            })}
          />
          <PasswordToggleButton
            passwordType={passwordType}
            handlePasswordType={() => handlePasswordType(setPasswordType)}
          />
        </div>
        <p className={styles.errorMessage}>{errors.password?.message}</p>
      </div>
      <button className={styles.signinButton} type="submit">
        로그인
      </button>
    </form>
  );
}

export default SigninForm;
