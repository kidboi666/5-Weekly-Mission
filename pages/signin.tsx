import React, { useEffect } from "react";
import AuthFrame from "../components/auth/AuthFrame";
import AuthSocial from "../components/auth/AuthSocial";
import AuthFormCase from "../components/auth/AuthFormCase";
import { LOGIN_TOKEN } from "../components/Api/Api";
import { useRouter } from "next/router";

export default function signin() {
  const router = useRouter();

  const checkSignInToken = function () {
    const userToken = window.localStorage.getItem(LOGIN_TOKEN);
    if (userToken) {
      router.push("./folder");
    }
  };

  useEffect(() => {
    checkSignInToken();
  }, [checkSignInToken]);
  return (
    <AuthFrame>
      <AuthFormCase auth="signin"></AuthFormCase>
      <AuthSocial auth="signin"></AuthSocial>
    </AuthFrame>
  );
}
