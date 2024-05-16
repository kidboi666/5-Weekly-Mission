import LinkIcon from "../../assets/icon/link.png";
import { useContext } from "react";
import ModalContext from "../Modal/ModalContext";
import styles from "@/src/components/AddLinkForm/AddLinkForm.module.css";
import Image from "next/image";
import { ModalTypeLabels } from "../Modal/ModalTypeLabels";

function AddLinkForm() {
  const { openModal, setModalType } = useContext(ModalContext)!;
  const onClickModalOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    openModal();
    setModalType(ModalTypeLabels.FOLDER_ADD);
  };
  return (
    <div className={styles.linkWrap}>
      <div className={styles.linkConWrap}>
        <Image width={20} height={20} src={LinkIcon} alt="" />
        <input className={styles.linkInput} type="text" placeholder="링크를 추가해보세요." />
        <button className={styles.linkButton} onClick={onClickModalOpen}>
          추가하기
        </button>
      </div>
    </div>
  );
}

export default AddLinkForm;
