import React from "react";
import folderCheckImg from "../../../assets/icon/svg/folder-check.svg";

interface FolderAddButtonType {
  id: number;
  name: string;
  linkCount: number;
  activeId: number | null;
  handleClick: (folderId: number) => void;
}

function FolderAddButton({ name, linkCount, id, activeId, handleClick }: FolderAddButtonType) {
  const onClick = () => {
    handleClick(id);
  };

  return (
    <button onClick={onClick} className={id === activeId ? "active" : ""}>
      <h3>
        {name} <span>{linkCount}개 링크</span>
        <img src={folderCheckImg} alt="" />
      </h3>
    </button>
  );
}

export default FolderAddButton;
