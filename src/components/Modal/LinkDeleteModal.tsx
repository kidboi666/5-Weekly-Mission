import styles from "@/src/components/Modal/Modal.module.css";
import { RenderModalType } from "./Modal";

function LinkDeleteModal({
  modalType,
  modalTypeLabels,
  cardUrl,
}: Omit<RenderModalType, "folderTabDataList" | "folderTabName">) {
  return (
    <div className={`${styles.modalForm1} ${styles.modalDelete}`}>
      <h2>{modalTypeLabels && modalTypeLabels[modalType]}</h2>
      <div className={styles.conWrap}>
        <div className={styles.folderLinkWrap}>{cardUrl}</div>
      </div>
      <button className="btnForm01">삭제하기</button>
    </div>
  );
}

export default LinkDeleteModal;
