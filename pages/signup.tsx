import AuthFormHeader from "@/components/AuthFormHeader";
import SignupForm from "@/components/SignupForm";
import SocialAuthForm from "@/components/SocialAuthForm";

function Signup() {
  return (
    <>
      <AuthFormHeader
        message={"이미 회원이신가요?"}
        linkMassege={"로그인 하기"}
      />
      <SignupForm />
      <SocialAuthForm message={"다른 방식으로 로그인하기"} />
    </>
  );
}

export default Signup;
