import { Oauth, SignUpForm } from "@/src/feature";
import { SignHeader } from "@/src/ui";
import { SignLayout } from "@/src/page-layout/SignLayout";
import { ROUTE } from "@/src/util";

const SignUpPage = () => {
  return (
    <SignLayout
      header={
        <SignHeader
          message="이미 회원이신가요?"
          link={{ text: "로그인 하기", href: ROUTE.로그인 }}
        />
      }
      form={<SignUpForm />}
      oauth={<Oauth description="다른 방식으로 가입하기" />}
    />
  );
};

export default SignUpPage;
