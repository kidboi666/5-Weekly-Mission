import SubHeader from "../components/SubHeader";
import AddLink from "../components/AddLink";
import Folder from "../components/FolderPage/Folder";
import App from "../components/App";
import { useData } from "../Hooks/useData";
import { getLinksData, getFoldersData } from "../components/Api/Api";
import { MouseEvent, useCallback, useEffect, useState } from "react";
import { LinkItem } from "../components/CardList";
import { useInView } from "react-intersection-observer";

interface Item {
  name: string;
  id: number;
  email: string;
  profileImageSource: string;
}

export interface FolderType {
  id: number;
  name: string;
  owner: { id: number; name: string; profileImageSource: string };
  links: LinkItem[];
  count: number;
}

function folder() {
  const [folderInfo, getFolderInfo] = useData(getFoldersData);
  const [linkData, getLinkData] = useData(getLinksData);
  const [selectedFolder, setSelectedFolder] = useState<FolderType>();
  const [foot, footView] = useInView();

  const selectFolder = (e: MouseEvent<any, MouseEvent>) => {
    const target = e.target;
    if (target instanceof HTMLButtonElement) {
      const folderId = Number(target.name);
      const selected = folderInfo?.data.filter(
        (item: Item) => item.id === folderId
      );
      setSelectedFolder(selected[0]);
    }
  };

  const getData = useCallback(async () => {
    await getLinkData(selectedFolder?.id ?? "");
    await getFolderInfo();
  }, [getFolderInfo, getLinkData, selectedFolder]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <App headerFixed={false} foot={foot}>
      <SubHeader headerfixed={false}>
        <AddLink folder={folderInfo} footView={footView} />
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

export default folder;
