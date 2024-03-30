import React from "react";
import Navigation from "../components/Navigation";
import MainProfile from "../components/MainProfile";
import Search from "../components/Search";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

function NoLogin() {
  return (
    <>
      <Navigation />
      {/* <MainProfile /> */}
      <Search />
      {/* <Cards /> */}
      <Footer />
    </>
  );
}

export default NoLogin;
