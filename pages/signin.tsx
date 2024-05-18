import SigninForm from "@/component/SigninForm";
import SignHeader from "@/component/SignHeader";
import SocialLogin from "@/component/SocialLogin";
import SignFormWrapper from "@/component/SignFormWrapper";

export default function signin() {
  return (
    <SignFormWrapper>
      <SignHeader />
      <SigninForm />
      <SocialLogin />
    </SignFormWrapper>
  );
}
