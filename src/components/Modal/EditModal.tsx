import styles from "@/src/components/Modal/Modal.module.css";

function EditModal() {
  return (
    <div className={styles.modalForm1}>
      <h2>폴더 이름 변경</h2>
      <div className={styles.conWrap}>
        <input type="text" className={styles.modalInput} placeholder="내용 입력" />
        <button className="btnForm01">변경하기</button>
      </div>
    </div>
  );
}

export default EditModal;
