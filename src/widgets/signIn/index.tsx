import React from "react";
import styles from "./Auth.module.css";
import SignInForm from "./SignInForm/SignInForm";
import AuthHeader from "../../components/AuthHeader";
import AuthContainer from "@/src/components/AuthContainer/AuthContainer";

function SignIn() {
  return (
    <AuthContainer>
      <div className={styles.loginCon}>
        <AuthHeader />
        <article className={styles.conArticle}>
          <SignInForm />
        </article>
      </div>
    </AuthContainer>
  );
}

export default SignIn;
