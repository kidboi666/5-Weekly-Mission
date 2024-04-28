import SubHeader from "../components/SubHeader";
import AddLink from "../components/AddLink";
import Folder from "../components/FolderPage/Folder";
import App from "../components/App";
import { useData } from "../Hooks/useData";
import { getLinksData, getFoldersData } from "../components/Api/Api";
import { useCallback, useEffect, useState } from "react";

function FolderPage() {
  const [folderInfo, getFolderInfo] = useData(getFoldersData);
  const [linkData, getLinkData] = useData(getLinksData);
  const [selectedFolder, setSelectedFolder] = useState(null);

  const selectFolder = (e) => {
    const folderId = Number(e.target.name);
    if (Number.isNaN(folderId)) return;
    const selected = folderInfo?.data.filter((item) => item.id === folderId);
    setSelectedFolder(selected[0]);
  };

  const getData = useCallback(async () => {
    await getLinkData(selectedFolder?.id ?? "");
    await getFolderInfo();
  }, [getFolderInfo, getLinkData, selectedFolder?.id]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <App headerFixed={false}>
      <SubHeader headerfixed={false}>
        <AddLink folder={folderInfo} />
      </SubHeader>
      <Folder
        linkData={linkData}
        selectFolder={selectFolder}
        folderInfo={folderInfo}
        selectedFolder={selectedFolder}
      />
    </App>
  );
}

export default FolderPage;
