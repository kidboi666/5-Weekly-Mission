import SignupForm from "@/component/SignupForm";
import SignHeader from "@/component/SignHeader";
import SocialLogin from "@/component/SocialLogin";
import { useRouter } from "next/router";
import SignFormWrapper from "@/component/SignFormWrapper";

/** TODO:
 * 5. 공통 부분 컴포넌트화
 * 6. axios.create 후 instance import 해서 사용
 * 8. handleSubmit 내부 함수화
 */

export default function signup() {
  return (
    <SignFormWrapper>
      <SignHeader />
      <SignupForm />
      <SocialLogin />
    </SignFormWrapper>
  );
}
