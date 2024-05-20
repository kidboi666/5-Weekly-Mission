import React from "react";
import { ModalProvider } from "src/context/ModalContext";
import Nav from "@components/Nav";
import Header from "@components/Header";
import CardList from "@components/CardList";
import Footer from "@components/Footer";
import Layout from "@components/Layout";

function FolderPage() {
  return (
    <ModalProvider>
      <Layout>
        <Nav />
        <Header isFolderPage={true} />
        <CardList isFolderPage={true} />
        <Footer />
      </Layout>
    </ModalProvider>
  );
}

export default FolderPage;
