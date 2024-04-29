import React, { useState } from "react";
import FolderAddButton from "./FolderAddButton";

function FolderAddModal({ modalTypeLabels, modalType, cardUrl, folderTabDataList }) {
  const [activeId, setActiveId] = useState(null);

  const handleClick = (folderId) => {
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
