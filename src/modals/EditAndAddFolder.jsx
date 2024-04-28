import styles from "./modalComponentStyle.module.css";

function EditAndAddFolder({ madalTitle, alter, onClose }) {
  const onClosing = (e) => {
    e.preventDefault();
    onClose(false);
  };

  const editButton = `${styles.modal__Button} ${styles.edit}`;

  return (
    <div className={styles.modalBackdrop} onClick={onClosing}>
      <div
        className={styles.modal}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        <button
          className={styles.modal__closeButton}
          onClick={onClosing}
        ></button>
        <div className={styles.modal__title}> {madalTitle}</div>
        <form className={styles.modal__form}>
          <input
            className={styles.modal__input}
            placeholder="내용을 입력해주세요."
          />
          <button className={editButton} onClick={(e) => e.preventDefault()}>
            {alter}
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditAndAddFolder;
