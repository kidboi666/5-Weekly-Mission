import Nav from "../components/Nav/Nav";
import Header from "../components/Header/Header";
import CardList from "../components/CardList/CardList";
import Footer from "../components/Footer/Footer";
import Layout from "../components/Layout/Layout";

function FolderPage() {
  return (
    <Layout>
      <Nav />
      <Header isFolderPage={true} />
      <CardList isFolderPage={true} />
      <Footer />
    </Layout>
  );
}

export default FolderPage;
