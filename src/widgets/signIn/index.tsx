import React from "react";
import styles from "./Auth.module.css";
import LoginForm from "./SignInForm";
import LoginHeader from "./SignInHeader";
import AuthContainer from "@/src/components/AuthContainer/AuthContainer";

function SignIn() {
  return (
    <AuthContainer>
      <div className={styles.loginCon}>
        <LoginHeader />
        <article className={styles.conArticle}>
          <LoginForm />
        </article>
      </div>
    </AuthContainer>
  );
}

export default SignIn;
