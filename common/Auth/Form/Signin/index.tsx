import AuthInput from "@/common/Auth/Input";
import styles from "../index.module.css";

interface SigninFormProps {
  ref: any;
}

function SigninForm({ ref }: SigninFormProps) {
  return (
    <form className={styles.formContainer}>
      <AuthInput
        type="email"
        label="이메일"
        placeholder="이메일을 입력해주세요"
        ref={ref}
      />
      <AuthInput
        type="password"
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요"
        ref={ref}
      />
      <button className={styles.submitBtn} type="submit">
        로그인
      </button>
    </form>
  );
}

export default SigninForm;
