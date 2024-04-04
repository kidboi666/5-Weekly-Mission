import { useEffect, useState } from "react";
import { getFolderInfo } from "../api";
import Folder from "../components/Folder/Folder";
import MainContent from "../components/MainContent/MainContent";

function SharedPage() {
  const [folderInfo, setFolderInfo] = useState({});

  const handleLoadFolder = async () => {
    const result = await getFolderInfo();
    if (!result) return;

    const { folder } = result;
    setFolderInfo((prevInfo) => ({
      ...prevInfo,
      owner: folder.owner,
      name: folder.name,
      links: folder.links,
    }));
  };

  useEffect(() => {
    handleLoadFolder();
  }, []);

  return (
    <>
      <Folder owner={folderInfo.owner} folderName={folderInfo.name} />
      <MainContent links={folderInfo.links} />
    </>
  );
}

export default SharedPage;
