"use client";

import PagePadding from "@/widgets/signin/ui/pagePadding/PagePadding";
import SocialLoginFrom from "@/widgets/signin/ui/socialForm/SocialLoginFrom";
import React from "react";
import { useCheckLogin } from "@//shared/model/hooks/useCheckLogin";
import Header from "@/widgets/signin/ui/header/Header";
import LoginForm from "@/widgets/signin/ui/loginForm/LoginForm";

const Home = () => {
  useCheckLogin();

  return (
    <PagePadding>
      <Header />
      <LoginForm />
      <SocialLoginFrom />
    </PagePadding>
  );
};

export default Home;
