import styles from "./modalComponentStyle.module.css";
import classNames from "classnames";

function DeleteFolder({ madalTitle, title, onClose }) {
  const onClosing = (e) => {
    e.preventDefault();
    onClose(false);
  };

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
        <button
          className={classNames(styles.modal__Button, styles.delete)}
          onClick={(e) => e.preventDefault()}
        >
          삭제하기
        </button>
      </div>
    </div>
  );
}

export default DeleteFolder;
