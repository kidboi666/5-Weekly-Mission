import styles from "@/src/components/Modal/Modal.module.css";
import { RenderModalType } from "./Modal";

function EditModal({
  modalTypeLabels,
  modalType,
}: Omit<RenderModalType, "folderTabDataList" | "cardUrl" | "folderTabName">) {
  return (
    <div className={styles.modalForm1}>
      <h2>{modalTypeLabels && modalTypeLabels[modalType]}</h2>
      <div className={styles.conWrap}>
        <input type="text" className={styles.modalInput} placeholder="내용 입력" />
        <button className="btnForm01">변경하기</button>
      </div>
    </div>
  );
}

export default EditModal;
