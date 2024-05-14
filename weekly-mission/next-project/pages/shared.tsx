import React from "react";
import Nav from "@components/Nav";
import Header from "@components/Header";
import CardList from "@components/CardList";
import Footer from "@components/Footer";
import Layout from "@components/Layout";

function LinkShare() {
  return (
    <Layout>
      <Nav />
      <Header isFolderPage={false} />
      <CardList isFolderPage={false} />
      <Footer />
    </Layout>
  );
}
export default LinkShare;
