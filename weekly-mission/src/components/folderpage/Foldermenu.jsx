import styled from "styled-components";
import { useState, useEffect } from "react";
import useFetchData from "../../hooks/useFetchData";
import FolderList from "./FolderLists";
import FolderContent from "./FolderContent";
import AddButton from "./buttons/AddButton";

import { fetchLinkData } from "../../utils/FetchFolderLinksData";

const FoldermenuToolbar = styled.div`
  display: flex;
  padding: 0 32px;
  justify-content: space-between;
`;

const FolderMenu = () => {
  const foldersData = useFetchData(
    `${import.meta.env.VITE_BASE_URL}/users/1/folders`
  );

  const [activeButton, setActiveButton] = useState(null);
  const [allLinksData, setAllLinksData] = useState(null);
  const [activeFolderName, setActiveFolderName] = useState("전체");

  useEffect(() => {
    handleButtonClick(null, "전체");
  }, []);

  const handleButtonClick = async (folderId, folderName) => {
    setActiveButton(folderId);
    setActiveFolderName(folderName);
    const data = await fetchLinkData(folderId);
    setAllLinksData(data);
  };

  if (!foldersData) return null;

  return (
    <>
      <FoldermenuToolbar>
        <FolderList
          folders={foldersData.data}
          activeButton={activeButton}
          handleButtonClick={handleButtonClick}
        />
        <AddButton onClick={onclick} />
      </FoldermenuToolbar>

      <FolderContent
        allLinksData={allLinksData}
        activeFolderName={activeFolderName}
        activeFolderId={activeButton}
      />
    </>
  );
};

export default FolderMenu;
