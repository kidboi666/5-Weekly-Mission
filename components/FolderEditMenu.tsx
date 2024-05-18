import shareBtn from "@/public/share.svg";
import renameBtn from "@/public/pen.svg";
import deleteBtn from "@/public/Group 36.svg";
import Image from "next/image";
import styles from "./FolderEditMenu.module.css";

interface FolderEditMenu {
  setModalOpen: React.Dispatch<React.SetStateAction<string>>;
}

function FolderEditMenu({ setModalOpen }: FolderEditMenu) {
  return (
    <div className={styles.folderLinkList__folderEditBtns}>
      <button
        className={styles.folderLinkList__folderEditBtn}
        onClick={(e) => {
          e.preventDefault();
          setModalOpen("shareLink");
        }}
      >
        <div className={styles.folderLinkList__folderEditIcon}>
          <Image fill src={shareBtn} alt="공유하기" />
        </div>
        공유
      </button>
      <button
        className={styles.folderLinkList__folderEditBtn}
        onClick={(e) => {
          e.preventDefault();
          setModalOpen("alterName");
        }}
      >
        <div className={styles.folderLinkList__folderEditIcon}>
          <Image fill src={renameBtn} alt="이름변경" />
        </div>
        이름 변경
      </button>
      <button
        className={styles.folderLinkList__folderEditBtn}
        onClick={(e) => {
          e.preventDefault();
          setModalOpen("delete");
        }}
      >
        <div className={styles.folderLinkList__folderEditIcon}>
          <Image fill src={deleteBtn} alt="삭제" />
        </div>
        삭제
      </button>
    </div>
  );
}

export default FolderEditMenu;
