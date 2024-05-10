import Nav from "./Nav/Nav";
import Header from "./Header/Header";
import CardList from "./CardList/CardList";
import Footer from "./Footer/Footer";
import Layout from "./Layout/Layout";

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
