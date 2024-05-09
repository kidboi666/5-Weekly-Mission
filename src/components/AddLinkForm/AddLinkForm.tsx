import LinkIcon from "../../assets/icon/link.png";
import { useContext } from "react";
import ModalContext from "../Modal/ModalContext";
import styles from "@/src/components/AddLinkForm/AddLinkForm.module.css";
import Image from "next/image";

function AddLinkForm() {
  const { openModal, setModalType } = useContext(ModalContext)!;
  const onClickModalOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    openModal();
    setModalType("folderAdd");
  };
  return (
    <div className={styles.linkWrap}>
      <form className={styles.linkAddForm}>
        <div className={styles.linkConWrap}>
          <Image width={20} height={20} src={LinkIcon} alt="" />
          <input className={styles.linkInput} type="text" placeholder="링크를 추가해보세요." />
          <button className={styles.linkButton} onClick={onClickModalOpen}>
            추가하기
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddLinkForm;
