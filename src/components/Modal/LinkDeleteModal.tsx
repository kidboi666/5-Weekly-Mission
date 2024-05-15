import styles from "@/src/components/Modal/Modal.module.css";
import { RenderModalType } from "./Modal";

function LinkDeleteModal({ cardUrl }: Partial<RenderModalType>) {
  return (
    <div className={`${styles.modalForm1} ${styles.modalDelete}`}>
      <h2>링크 삭제</h2>
      <div className={styles.conWrap}>
        <div className={styles.folderLinkWrap}>{cardUrl}</div>
      </div>
      <button className="btnForm01">삭제하기</button>
    </div>
  );
}

export default LinkDeleteModal;
