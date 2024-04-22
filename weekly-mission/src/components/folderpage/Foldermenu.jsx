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

const FolderMenu = ({ folderId }) => {
  const foldersData = useFetchData(
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
      return; // 이미 활성화된 버튼을 클릭한 경우 아무 작업도 수행하지 않음
    }

    setActiveButton(folderId === "전체" ? null : folderId); // 전체 버튼을 클릭할 때는 null로 설정
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
        <AddButton />
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
