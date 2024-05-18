import styles from "./auth.module.css";
import AuthFormHeader from "@/components/AuthFormHeader";
import SignupForm from "@/components/SignupForm";
import SocialAuthForm from "@/components/SocialAuthForm";

function Signup() {
  return (
    <main className={styles.contentWrap}>
      <AuthFormHeader
        message={"이미 회원이신가요?"}
        link={"/signin"}
        linkMassege={"로그인 하기"}
      />
      <SignupForm />
      <SocialAuthForm message={"다른 방식으로 로그인하기"} />
    </main>
  );
}

export default Signup;
