import styles from "./auth.module.css";
import SigninForm from "../components/SigninForm";
import SocialAuthForm from "../components/SocialAuthForm";
import AuthFormHeader from "../components/AuthFormHeader";

function Signin() {
  return (
    <main className={styles.contentWrap}>
      <AuthFormHeader
        message={"회원이 아니신가요?"}
        link={"/signup"}
        linkMassege={"회원 가입하기"}
      />
      <SigninForm />
      <SocialAuthForm message={"소셜 로그인"} />
    </main>
  );
}

export default Signin;
