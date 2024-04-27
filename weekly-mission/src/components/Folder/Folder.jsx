import * as S from "./Folder.styled";
import { useState, useEffect, memo } from "react";
import useFetchData from "../../Hooks/useFetchData";
import FolderMenuList from "../FolderMenuList/FolderMenuList";
import FolderContent from "../FolderContent/FolderContent";
import AddButton from "../AddButton/AddButton";
import Modal from "../Modal/Modal";

import { fetchLinkData } from "../../utils/FetchFolderLinksData";

const Folder = ({ folderId }) => {
  const { data: foldersData, isLoading } = useFetchData(
    `${import.meta.env.VITE_BASE_URL}/users/1/folders`
  );

  const [activeButton, setActiveButton] = useState(null);
  const [allLinksData, setAllLinksData] = useState(null);
  const [activeFolderName, setActiveFolderName] = useState("전체");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchLinkData(folderId);
        setAllLinksData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [folderId]);

  const handleButtonClick = async (folderId, folderName) => {
    if (folderId === activeButton) {
      return;
    }

    setActiveButton(folderId === "전체" ? null : folderId);
    setActiveFolderName(folderName);
    const data = await fetchLinkData(folderId);
    setAllLinksData(data);
  };

  if (!foldersData) return null;

  return (
    <>
      <S.FoldermenuToolbar>
        <FolderMenuList
          folders={foldersData.data}
          activeButton={activeButton}
          handleButtonClick={handleButtonClick}
        />
        <AddButton />
      </S.FoldermenuToolbar>

      <FolderContent
        allLinksData={allLinksData}
        activeFolderName={activeFolderName}
        activeFolderId={activeButton}
      />
    </>
  );
};

export default memo(Folder);
