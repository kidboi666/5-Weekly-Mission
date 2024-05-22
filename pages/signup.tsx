import React, { useEffect } from "react";
import AuthFrame from "../components/auth/AuthFrame";
import AuthSocial from "../components/auth/AuthSocial";
import AuthFormCase from "../components/auth/AuthFormCase";
import { useRouter } from "next/router";
import { SIGN_UP_TOKKEN } from "../components/Api/Api";

export default function signup() {
  const router = useRouter();

  const checkSignUpToken = function () {
    const userToken = window.localStorage.getItem(SIGN_UP_TOKKEN);
    if (userToken) {
      router.push("./folder");
    }
  };

  useEffect(() => {
    checkSignUpToken();
  }, [checkSignUpToken]);

  return (
    <AuthFrame>
      <AuthFormCase auth="signup"></AuthFormCase>
      <AuthSocial auth="signup"></AuthSocial>
    </AuthFrame>
  );
}
