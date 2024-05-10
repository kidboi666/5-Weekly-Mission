import React, { useState } from "react";
import FolderAddButton from "./FolderAddButton";

interface UserFolderdataList {
  data: {
    id: number;
    name: string;
    link: {
      count: number;
    };
  };
}

interface FolderAddModalType {
  modalType: string;
  modalTypeLabels: Record<string, string>;
  folderTabDataList: UserFolderdataList["data"][];
  cardUrl: string;
}

function FolderAddModal({
  modalTypeLabels,
  modalType,
  cardUrl,
  folderTabDataList,
}: FolderAddModalType) {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleClick = (folderId: number) => {
    setActiveId(folderId === activeId ? null : folderId);
  };

  return (
    <div className="modal-form1">
      <h2>{modalTypeLabels[modalType]}</h2>
      <div className="con-wrap">
        <div className="folder-link-wrap">{cardUrl}</div>
        <ul className="add-folder-wrap">
          {folderTabDataList.map(({ id, name, link }) => (
            <li key={id}>
              <FolderAddButton
                id={id}
                name={name}
                linkCount={link.count}
                activeId={activeId}
                handleClick={handleClick}
              />
            </li>
          ))}
        </ul>
        <button className="btn-form01">추가하기</button>
      </div>
    </div>
  );
}

export default FolderAddModal;
