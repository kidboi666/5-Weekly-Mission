import { SignInForm, Oauth } from "@/src/feature";
import { SignHeader } from "@/src/ui";
import { SignLayout } from "@/src/page-layout/SignLayout";
import { ROUTE } from "@/src/util";

const SignInPage = () => {
  return (
    <SignLayout
      header={
        <SignHeader
          message="회원이 아니신가요?"
          link={{ text: "회원 가입하기", href: ROUTE.회원가입 }}
        />
      }
      form={<SignInForm />}
      oauth={<Oauth description="소셜 로그인" />}
    />
  );
};

export default SignInPage;
