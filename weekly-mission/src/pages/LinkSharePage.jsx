import Nav from "../components/Nav/Nav";
import Header from "../components/Header/Header";
import CardList from "../components/CardList/CardList";
import Footer from "../components/Footer/Footer";
import Layout from "../components/Layout/Layout";

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
