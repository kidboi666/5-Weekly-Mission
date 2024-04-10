import { useState } from "react";
import styled from "styled-components";
import FolderButton from "./Button/FolderButton";
import addIcon from "../assets/svg/plus.svg";
import addIconWhite from "../assets/svg/plus-white.svg";
import shareIcon from "../assets/svg/share.svg";
import editIcon from "../assets/svg/pen.svg";
import deleteIcon from "../assets/svg/trash.svg";

function FolderButton({ setFolderId, folderId, folderName, selected }) {
  const handleOnClick = () => {
    setFolderId(folderId);
    selected(folderName);
  };

  return (
    <FolderListButton onClick={handleOnClick}>{folderName}</FolderListButton>
  );
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
          return (
            <FolderButton
              key={folder.id}
              setFolderId={setFolderId}
              folderId={folder.id}
              folderName={folder.name}
              selected={setSelectedFolderName}
            />
          );
        })}
      </FolderListWrapper>
      <AddFolderButton>
        <p>폴더 추가</p>
        <div className="icon"></div>
      </AddFolderButton>
      <FolderName>{selectedFolderName}</FolderName>
      {selectedFolderName === "전체" ? null : (
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
      )}
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
  @media screen and (max-width: 767px) {
    grid-template-areas:
      "folderList"
      "folderName"
      "option";
  }
`;

const FolderListWrapper = styled.div`
  display: flex;
  grid-area: folderList;
  column-gap: 0.8rem;
  flex-wrap: wrap;
  row-gap: 1.2rem;
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
  & .icon {
    width: 16px;
    height: 16px;
    background-image: url(${addIcon});
  }
  @media screen and (max-width: 767px) {
    border-radius: 20px;
    border: 1px solid var(--Linkbrary-white, #fff);
    background: var(--Linkbrary-primary-color, #6d6afe);
    padding: 8px 24px;
    height: 35px;
    color: #fff;
    z-index: 10;
    position: fixed;
    bottom: 101px;
    left: 50%;
    transform: translate(-50%, 0);
    & .icon {
      background-image: url(${addIconWhite});
    }
  }
`;

const FolderName = styled.h2`
  grid-area: folderName;
  margin: 0;
`;

const OptionWrapper = styled.div`
  display: flex;
  grid-area: option;
  justify-self: flex-end;
  @media screen and (max-width: 767px) {
    justify-self: flex-start;
  }
`;

const OptionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  border: none;
  background-color: transparent;
`;

export default Sorting;
