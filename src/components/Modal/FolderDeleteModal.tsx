import styles from "@/src/components/Modal/Modal.module.css";
import { RenderModalType } from "./Modal";

function FolderDeleteModal({
  modalTypeLabels,
  modalType,
  folderTabName,
}: Omit<RenderModalType, "folderTabDataList" | "cardUrl">) {
  return (
    <div className={`${styles.modalForm1} ${styles.modalDelete}`}>
      <h2>{modalTypeLabels && modalTypeLabels[modalType]}</h2>
      <div className={styles.conWrap}>
        <div className={styles.folderLinkWrap}>{folderTabName}</div>
      </div>
      <button className="btnForm01">삭제하기</button>
    </div>
  );
}

export default FolderDeleteModal;
