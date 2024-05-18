import styles from "./signin.module.css";
import SigninForm from "../components/SigninForm";
import SocialAuthForm from "../components/SocialAuthForm";
import AuthFormHeader from "../components/AuthFormHeader";

function Signin() {
  return (
    <>
      <AuthFormHeader
        message={"회원이 아니신가요?"}
        linkMassege={"회원 가입하기"}
      />
      <SigninForm />
      <SocialAuthForm message={"소셜 로그인"} />
    </>
  );
}

export default Signin;
