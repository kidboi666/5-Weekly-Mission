import React, { useState } from "react";
import styles from "@/src/components/Modal/Modal.module.css";

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
    <div className={styles.modalForm1}>
      <h2>{modalTypeLabels[modalType]}</h2>
      <div className={styles.conWrap}>
        <div className={styles.folderLinkWrap}>{cardUrl}</div>
        <ul className={styles.addFolderWrap}>
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
        <button className="btnForm01">추가하기</button>
      </div>
    </div>
  );
}

export default FolderAddModal;
