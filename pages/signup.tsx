import SignupForm from "@/component/SignupForm";
import SignHeader from "@/component/SignHeader";
import SocialLogin from "@/component/SocialLogin";
import SignFormWrapper from "@/component/SignFormWrapper";

export default function signup() {
  return (
    <SignFormWrapper>
      <SignHeader />
      <SignupForm />
      <SocialLogin />
    </SignFormWrapper>
  );
}
