import styles from "./modalComponentStyle.module.css";

function DeleteFolder({ madalTitle, title, onClose }) {
  const onClosing = (e) => {
    e.preventDefault();
    onClose(false);
  };

  const deleteButton = `${styles.modal__Button} ${styles.delete}`;

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
        <div className={styles.modal__link}>{title}</div>
        <button className={deleteButton} onClick={(e) => e.preventDefault()}>
          삭제하기
        </button>
      </div>
    </div>
  );
}

export default DeleteFolder;
