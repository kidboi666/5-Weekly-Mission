import React from "react";
import AllButton from "../AllButton/AllButton";
import * as S from "./FolderMenuList.styled";
import { Folder } from "../../hooks/useFoldersByUserId";
import { FolderId } from "../Folder/Folder";

interface FolderMenuListProps {
  folders: Folder[];
  activeButton: FolderId;
  handleButtonClick: (folderId: FolderId, folderName: string) => void;
}

const FolderMenuList = ({
  folders,
  activeButton,
  handleButtonClick,
}: FolderMenuListProps) => {
  if (!Array.isArray(folders) || folders.length === 0) {
    return null; // 폴더가 없거나 유효하지 않은 형태일 경우 렌더링하지 않음
  }

  return (
    <S.FolderButtonWrapper>
      <AllButton
        active={activeButton === null}
        onClick={() => handleButtonClick(null, "전체")}
      />
      {folders.map((folder) => (
        <S.FoldermenuToolbarButton
          active={activeButton === folder.id}
          key={folder.id}
          onClick={() => handleButtonClick(folder.id, folder.name)}
        >
          {folder.name}
        </S.FoldermenuToolbarButton>
      ))}
    </S.FolderButtonWrapper>
  );
};

export default FolderMenuList;
