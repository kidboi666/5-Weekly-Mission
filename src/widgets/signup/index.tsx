import React from "react";
import styles from "@/src/widgets/signIn/Auth.module.css";
import SignUpForm from "./SignUpForm/SignUpForm";
import AuthHeader from "../../components/AuthHeader";
import AuthContainer from "@/src/components/AuthContainer/AuthContainer";

function SignUp() {
  return (
    <AuthContainer>
      <div className={styles.loginCon}>
        <AuthHeader />
        <article className={styles.conArticle}>
          <SignUpForm />
        </article>
      </div>
    </AuthContainer>
  );
}

export default SignUp;
