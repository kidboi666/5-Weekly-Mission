import Nav from "../components/Nav/Nav";
import Folder from "../components/Folder/Folder";
import Search from "../components/Search/Search";
import CardList from "../components/CardList/CardList";
import Footer from "../components/Footer/Footer";
import "../components/MainContent.css";

function SharedPage({ userInfo, folderInfo }) {
  return (
    <>
      <Nav userInfo={userInfo} />
      <Folder owner={folderInfo.owner} folderName={folderInfo.name} />
      <div className="mainContent-wrapper">
        <div className="mainContent">
          <Search />
          <CardList links={folderInfo.links} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SharedPage;
