import React from "react";
import { MainSection, FirstSection, Sections } from "./architecture";
import Layout from "Layout";

const LandingPage = function () {
  return (
    <Layout>
      <MainSection />
      <FirstSection />
      <Sections />
    </Layout>
  );
};

export default LandingPage;
