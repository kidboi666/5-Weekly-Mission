import styled from "styled-components";
import { useState } from "react";
import FolderListButton from "./Button/FolderListButton";
import addIcon from "../assets/plus.svg";
import shareIcon from "../assets/share.svg";
import editIcon from "../assets/pen.svg";
import deleteIcon from "../assets/trash.svg";

function FolderButton({ setFolderId, folderId, folderName, selected }) {
  const handleOnClick = () => {
    setFolderId(folderId);
    selected(folderName);
  };

  return <FolderListButton onClick={handleOnClick}>{folderName}</FolderListButton>;
}

function Sorting({ folderList, setFolderId }) {
  const [selectedFolderName, setSelectedFolderName] = useState("전체");
  if (!folderList) return;

  const handelOnClickTotal = () => {
    setFolderId(null);
    setSelectedFolderName("전체");
  };

  return (
    <FolderToolBarWrap>
      <FolderListWrapper>
        <FolderListButton onClick={handelOnClickTotal}>전체</FolderListButton>
        {Object.values(folderList).map((folder) => {
          return <FolderButton key={folder.id} setFolderId={setFolderId} folderId={folder.id} folderName={folder.name} selected={setSelectedFolderName} />;
        })}
      </FolderListWrapper>
      <AddFolderButton>
        <p>폴더 추가</p>
        <img src={addIcon} alt="폴더 추가"></img>
      </AddFolderButton>
      <FolderName>{selectedFolderName}</FolderName>
      <OptionWrapper>
        <OptionButton>
          <img className="icon" src={shareIcon} alt="아이콘" />
          공유
        </OptionButton>
        <OptionButton>
          <img className="icon" src={editIcon} alt="아이콘" />
          이름 변경
        </OptionButton>
        <OptionButton>
          <img className="icon" src={deleteIcon} alt="아이콘" />
          삭제
        </OptionButton>
      </OptionWrapper>
    </FolderToolBarWrap>
  );
}

const FolderToolBarWrap = styled.div`
  display: grid;
  grid-template-areas: "folderList folderList addFolder" "folderName option option";
  grid-row-gap: 2.4rem;
  grid-column-gap: 1.2rem;
  align-items: center;
  margin-bottom: 2.4rem;
`;

const FolderListWrapper = styled.div`
  display: flex;
  grid-area: folderList;
  column-gap: 0.8rem;
`;

const AddFolderButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border: none;
  background-color: transparent;
  height: 20px;
  color: var(--primary);
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  grid-area: addFolder;
`;

const FolderName = styled.h2`
  grid-area: folderName;
  margin: 0;
`;

const OptionWrapper = styled.div`
  display: flex;
  grid-area: option;
  justify-self: flex-end;
`;

const OptionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  border: none;
  background-color: transparent;
`;

export default Sorting;
