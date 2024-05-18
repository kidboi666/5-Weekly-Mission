import styles from "./signin.module.css";
import SigninForm from "../components/SigninForm";
import SocialAuthForm from "../components/SocialAuthForm";

function Signin() {
  return (
    <>
      <SigninForm />
      <SocialAuthForm message={"소셜 로그인"} />
    </>
  );
}

export default Signin;
