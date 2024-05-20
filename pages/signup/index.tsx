import { useCheckLogin } from "@//shared/model/hooks/useCheckLogin";
import PagePadding from "@/widgets/signin/ui/pagePadding/PagePadding";
import Header from "@/widgets/signup/ui/header/Header";
import SignupForm from "@/widgets/signup/ui/signupForm/SignupForm";
import React from "react";

const Home = () => {
  useCheckLogin();

  return (
    <>
      <PagePadding>
        <Header />
        <SignupForm />
      </PagePadding>
    </>
  );
};

export default Home;
