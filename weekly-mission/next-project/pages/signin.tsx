import React from "react";
import { useRouter } from "next/router";
import instance from "lib/api";
import styles from "@/styles/sign.module.css";
import Form from "@components/Form";

function SigninPage() {
  const router = useRouter();

  const handleSignIn = async (data: any) => {
    const { email, password } = data;

    try {
      const response = await instance.post(`/sign-in`, { email, password });
      if (response.status === 200) {
        // 로그인 성공
        router.push("/folder");
      } else {
        // 로그인 실패
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("로그인 요청 중 에러 발생:", error);
    }
  };

  return (
    <div className={styles.sign_container}>
      <Form
        onSubmit={handleSignIn}
        headermessage="회원이 아니신가요?"
        headerlink="회원가입 하기"
        buttonText="로그인"
        socialProvidersText="소셜 로그인"
        isPasswordConfirmation={false}
        isSignUp={false}
      />
    </div>
  );
}

export default SigninPage;
