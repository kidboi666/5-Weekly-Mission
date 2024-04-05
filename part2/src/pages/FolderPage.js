import { useEffect, useState } from "react";
import { getLinkList } from "../api";
import Nav from "../components/Nav/Nav";
import AddLink from "../components/AddLink";
import Search from "../components/Search/Search";
import Sorting from "../components/Sorting";
import NoLink from "../components/NoLink";
import CardList from "../components/CardList/CardList";
import Footer from "../components/Footer/Footer";
import "../components/MainContent.css";

function FolderPage({ userInfo, folderInfo, folderList }) {
  const id = 1;
  const [folderId, setFolderId] = useState(0);
  const [linkList, setLinkList] = useState({});

  useEffect(() => {
    (async function loadData() {
      const result = await getLinkList(id, folderId);
      if (!result) return;

      const { data } = result;
      setLinkList({ data });
    })();
  }, [folderId]);
  if (!linkList.data) return;

  return (
    <>
      <Nav email={userInfo.email} imgUrl={userInfo.profileImageSource} />
      <AddLink />
      <div className="mainContent-wrapper">
        <div className="mainContent">
          <Search />
          <Sorting folderList={folderList.data} setFolderId={setFolderId} />
          {linkList.data.length === 0 ? <NoLink /> : <CardList links={linkList.data} />}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FolderPage;
