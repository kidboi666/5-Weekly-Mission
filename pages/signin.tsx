import SigninForm from "@/component/SigninForm";
import SignHeader from "@/component/SignHeader";
import SocialLogin from "@/component/SocialLogin";
import SignFormWrapper from "@/component/SignFormWrapper";

/** TODO:
 * 1. 공통 부분 컴포넌트화
 * 2. axios.create 후 instance import 해서 사용
 * 4. handleSubmit 내부 함수화
 */

export default function signin() {
  return (
    <SignFormWrapper>
      <SignHeader />
      <SigninForm />
      <SocialLogin />
    </SignFormWrapper>
  );
}
