import React, { useState } from "react";
import styles from "@/src/components/Modal/Modal.module.css";

import FolderAddButton from "./FolderAddButton";
import { RenderModalType } from "../Modal";

function FolderAddModal({ cardUrl, folderTabDataList }: Omit<RenderModalType, "folderTabName">) {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleClick = (folderId: number) => {
    setActiveId(folderId === activeId ? null : folderId);
  };

  return (
    <div className={styles.modalForm1}>
      <h2>폴더에 추가</h2>
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
