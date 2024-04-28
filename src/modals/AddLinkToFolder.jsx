import styles from "./modalComponentStyle.module.css";
import classNames from "classnames";
import checkIcon from "../assets/check.svg";
import { useState } from "react";

function AddLinkToFolder({ title, folders, onClose }) {
  const [linkClick, setLinkClick] = useState(null);

  const onClosing = (e) => {
    e.preventDefault();
    onClose(false);
  };

  const addButton = `${styles.modal__Button} ${styles.edit}`;
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
        <div className={styles.modal__title}>폴더에 추가</div>
        <div className={styles.modal__link}>{title}</div>
        <div className={styles.modal__linkList}>
          {folders.map((folder) => (
            <div
              key={folder.id}
              className={classNames(styles.modal__link, {
                [styles.selectList]: linkClick === folder.id,
              })}
              onClick={() => setLinkClick(folder.id)}
            >
              <div className={styles.modal__linkInfo}>
                <div
                  className={classNames(styles.modal__linkName, {
                    [styles.selectName]: linkClick === folder.id,
                  })}
                >
                  {folder.name}
                </div>
                <div className={styles.modal__linkCount}>
                  {folder.link.count}개 링크
                </div>
              </div>
              {linkClick === folder.id && (
                <img
                  src={checkIcon}
                  className={styles.modal__checkIcon}
                  alt="체크아이콘"
                />
              )}
            </div>
          ))}
        </div>
        <button
          className={classNames(styles.modal__Button, styles.edit)}
          onClick={(e) => e.preventDefault()}
        >
          추가하기
        </button>
      </div>
    </div>
  );
}

export default AddLinkToFolder;
