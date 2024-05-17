import styles from "./FolderList.module.css";
import addBtn from "@/public/add.svg";
import addBtnMobile from "@/public/add 2.svg";
import Image from "next/image";

interface addFolderButtonProps {
  isMobile: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<string>>;
}

const AddFolderButton: React.FC<addFolderButtonProps> = ({
  isMobile,
  setModalOpen,
}) => {
  if (isMobile) {
    return (
      <button
        className={styles.folderLinkList__addFolderButton__mobile}
        onClick={(e) => {
          e.preventDefault();
          setModalOpen("addFolder");
        }}
      >
        폴더 추가
        <div className={styles.folderLinkList__addFolderIcon}>
          <Image fill src={addBtnMobile} alt="폴더추가" />
        </div>
      </button>
    );
  } else {
    return (
      <button
        className={styles.folderLinkList__addFolderButton}
        onClick={(e) => {
          e.preventDefault();
          setModalOpen("addFolder");
        }}
      >
        폴더 추가
        <div className={styles.folderLinkList__addFolderIcon}>
          <Image fill src={addBtn} alt="폴더추가" />
        </div>
      </button>
    );
  }
};
export default AddFolderButton;
