import styles from "@/src/components/Modal/Modal.module.css";
import { RenderModalType } from "./Modal";

function AddModal({
  modalTypeLabels,
  modalType,
}: Omit<RenderModalType, "cardUrl" | "folderTabName" | "folderTabDataList">) {
  return (
    <div className={styles.modalForm1}>
      <h2>{modalTypeLabels && modalTypeLabels[modalType]}</h2>
      <div className={styles.conWrap}>
        <input type="text" className={styles.modalInput} placeholder="내용 입력" />
        <button className="btnForm01">추가하기</button>
      </div>
    </div>
  );
}

export default AddModal;
