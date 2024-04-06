import styled from "styled-components";
import { useState, useEffect } from "react";
import useFetchData from "../../hooks/useFetchData";
import AllButton from "./buttons/AllButton";
import AddButton from "./buttons/AddButton";

import { fetchLinkData } from "../../utils/FetchFolderLinksData";
import LinksContent from "./LinksContent";

const FoldermenuToolbar = styled.div`
  display: flex;
  padding: 0 32px;
  justify-content: space-between;
`;

const FolderButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const FoldermenuToolbarButton = styled.button`
  height: auto;
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid #6d6afe;
  background-color: ${(props) => (props.active ? "#6d6afe" : "#ffffff")};
  color: ${(props) => (props.active ? "#ffffff" : "#000000")};
  font-size: 16px;
  font-weight: 400;
  max-width: 150px;
  white-space: nowrap;
`;

const Foldermenu = () => {
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
        <FolderButtonWrapper>
          <AllButton
            active={activeButton === null}
            onClick={() => handleButtonClick(null, "전체")}
          />
          {foldersData.data.map((folder) => (
            <FoldermenuToolbarButton
              active={activeButton === folder.id}
              key={folder.id}
              onClick={() => handleButtonClick(folder.id, folder.name)}
            >
              {folder.name}
            </FoldermenuToolbarButton>
          ))}
        </FolderButtonWrapper>
        <AddButton onClick={onclick} />
      </FoldermenuToolbar>

      <LinksContent
        linksData={allLinksData}
        activeFolderName={activeFolderName}
        activeFolderId={activeButton === null ? null : activeButton}
      />
    </>
  );
};

export default Foldermenu;
