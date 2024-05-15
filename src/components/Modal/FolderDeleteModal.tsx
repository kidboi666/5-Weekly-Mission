import styles from "@/src/components/Modal/Modal.module.css";
import { RenderModalType } from "./Modal";

function FolderDeleteModal({ folderTabName }: Partial<RenderModalType>) {
  return (
    <div className={`${styles.modalForm1} ${styles.modalDelete}`}>
      <h2>폴더 삭제</h2>
      <div className={styles.conWrap}>
        <div className={styles.folderLinkWrap}>{folderTabName}</div>
      </div>
      <button className="btnForm01">삭제하기</button>
    </div>
  );
}

export default FolderDeleteModal;
