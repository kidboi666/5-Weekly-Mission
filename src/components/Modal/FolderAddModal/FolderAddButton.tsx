import styles from "@/src/components/Modal/Modal.module.css";
import folderCheckImg from "../../../assets/icon/svg/folder-check.svg";
import Image from "next/image";

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
    <button
      onClick={onClick}
      className={
        id === activeId ? `${styles.active} ${styles.modalCheckBtn}` : `${styles.modalCheckBtn}`
      }
    >
      <h3>
        {name} <span>{linkCount}개 링크</span>
        <Image src={folderCheckImg} alt="" />
      </h3>
    </button>
  );
}

export default FolderAddButton;
