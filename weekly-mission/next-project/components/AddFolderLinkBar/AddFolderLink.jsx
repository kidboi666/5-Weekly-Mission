import Image from "next/image";
import linkIcon from "../../public/images/link.png";
import { useModal } from "../Context/ModalContext";
import styles from "./AddFolderLink.module.css";

const AddFolderLink = () => {
  const { openModal, closeModal } = useModal();

  const handleOpenAddLinkModal = () => {
    openModal("addLink");
  };

  return (
    <div className={styles.addfolderlink_container}>
      <div className={styles.inputwrapper}>
        <Image
          className={styles.linkicon_image}
          src={linkIcon}
          alt="Link Icon"
          width={20}
          height={20}
        />

        <input
          className={styles.textinput}
          type="text"
          placeholder="링크를 추가해 보세요."
        />
      </div>
      <button className={styles.addbutton} onClick={handleOpenAddLinkModal}>
        추가하기
      </button>
    </div>
  );
};

export default AddFolderLink;
