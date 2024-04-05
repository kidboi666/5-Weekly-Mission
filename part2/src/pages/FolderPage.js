import { useLinkList } from "../components/App";
import Nav from "../components/Nav/Nav";
import AddLink from "../components/AddLink/AddLink";
import Search from "../components/Search/Search";
import Sorting from "../components/Sorting/Sorting";
import CardList from "../components/CardList/CardList";
import Footer from "../components/Footer/Footer";
import "../components/MainContent.css";

function FolderPage({ userInfo, folderInfo, folderList }) {
  const { linkList } = useLinkList();

  return (
    <>
      <Nav email={userInfo.email} imgUrl={userInfo.profileImageSource} />
      <AddLink />
      <div className="mainContent-wrapper">
        <div className="mainContent">
          <Search />
          <Sorting folderList={folderList.data} />
          <CardList links={linkList.data} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FolderPage;
