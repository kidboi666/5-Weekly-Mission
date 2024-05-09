import styles from "@/src/components/Card/KebabList.module.css";
import ModalContext from "../Modal/ModalContext";
import React from "react";
import { useContext } from "react";

interface KebabListInterface {
  url: string;
  setDisplay: boolean | (() => void);
}

function KebabList({ url, setDisplay }: KebabListInterface) {
  const { openModal, setModalType, setCardUrl } = useContext(ModalContext)!;

  const onClickDeleteLinkModalOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setModalType("linkDelete");
    setCardUrl(url);
    openModal();
    if (typeof setDisplay === "function") setDisplay();
  };

  const onClickAddFolderModalOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setModalType("folderAdd");
    setCardUrl(url);
    openModal();
    if (typeof setDisplay === "function") setDisplay();
  };
  return (
    <ul className={styles.KebabList}>
      <li>
        <button onClick={onClickDeleteLinkModalOpen}>삭제하기</button>
      </li>
      <li>
        <button onClick={onClickAddFolderModalOpen}>폴더에 추가</button>
      </li>
    </ul>
  );
}

export default KebabList;
