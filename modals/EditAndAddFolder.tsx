import styles from "./modalComponentStyle.module.css";
import classNames from "classnames";
import { MouseEvent } from "react";

interface EditAndAddFolderProps {
  madalTitle: string;
  alter: string;
  onClose: (close: string) => void;
}

const EditAndAddFolder: React.FC<EditAndAddFolderProps> = ({
  madalTitle,
  alter,
  onClose,
}) => {
  const onClosing = (e: MouseEvent) => {
    e.preventDefault();
    onClose("");
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
        <form className={styles.modal__form}>
          <input
            className={styles.modal__input}
            placeholder="내용을 입력해주세요."
          />
          <button
            className={classNames(styles.modal__Button, styles.edit)}
            onClick={(e) => e.preventDefault()}
          >
            {alter}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditAndAddFolder;
