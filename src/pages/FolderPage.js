import { useEffect, useState } from "react";
import { getLinkList } from "../utils/api";
import Navigator from "../components/Navigator/Navigator";
import AddLink from "../components/AddLink";
import SearchInput from "../components/SearchInput/SearchInput";
import FolderToolBar from "../components/Folder/FolderToolBar";
import CardList from "../components/CardList/CardList";
import Footer from "../components/Footer/Footer";

function FolderPage({ userInfo, folderList }) {
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
      <Navigator userInfo={userInfo} isfixed={false} />
      <AddLink />
      <div className="mainContent-wrapper">
        <div className="mainContent">
          <SearchInput />
          <FolderToolBar
            folderList={folderList.data}
            setFolderId={setFolderId}
          />
          {linkList.data.length === 0 ? (
            <NoLink />
          ) : (
            <CardList links={linkList.data} isFolderPage={true} />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FolderPage;
