import addBtnImg from "@/src/assets/svg/add.svg";
import ModalContext from "../Modal/ModalContext";
import { useContext } from "react";
import styles from "@/src/components/FolderTabList/FolderAddButton.module.css";
import Image from "next/image";
import { ModalTypeLabels } from "../Modal/ModalTypeLabels";

function FolderAddButton() {
  const { openModal, setModalType } = useContext(ModalContext)!;

  const onClickButton = () => {
    setModalType(ModalTypeLabels.ADD);
    openModal();
  };

  return (
    <button className={styles.folderAddButton} onClick={onClickButton}>
      폴더 추가 <Image alt="" src={addBtnImg} className={styles.addIcon} />
    </button>
  );
}

export default FolderAddButton;
