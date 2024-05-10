import { ModalProvider } from "./Context/ModalContext";
import Nav from "./Nav/Nav";
import Header from "./Header/Header";
import CardList from "./CardList/CardList";
import Footer from "./Footer/Footer";
import Layout from "./Layout/Layout";

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
