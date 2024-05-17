import React from "react";
import { useRouter } from "next/router";
import styles from "@/styles/sign.module.css";
import Form from "@components/Form";

function SignupPage() {
  const router = useRouter();

  const handleSignup = async (data: any) => {
    const { email, password } = data;
  };

  return (
    <div className={styles.sign_container}>
      <Form
        onSubmit={handleSignup}
        headermessage="이미 회원이신가요?"
        headerlink="로그인 하기"
        buttonText="회원가입"
        socialProvidersText="다른 방식으로 가입하기"
        isPasswordConfirmation={true}
        isSignUp={true}
      />
    </div>
  );
}

export default SignupPage;
