import styles from "./modalComponentStyle.module.css";
import classNames from "classnames";
import checkIcon from "@/public/check.svg";
import { useState, MouseEvent } from "react";
import Image from "next/image";

interface Folder {
  created_at: string;
  favorite: boolean;
  id: number;
  link: {
    count: number;
  };
  name: string;
  user_id: number;
}

interface AddLinkToFolderProps {
  title: string;
  folders: Folder[];
  onClose: () => void;
}

const AddLinkToFolder: React.FC<AddLinkToFolderProps> = ({
  title,
  folders,
  onClose,
}) => {
  const [linkClick, setLinkClick] = useState<number | null>(null);

  const onClosing = (e: MouseEvent): void => {
    e.preventDefault();
    onClose();
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
        <div className={styles.modal__title}>폴더에 추가</div>
        <div className={styles.modal__link}>{title}</div>
        <div className={styles.modal__linkList}>
          {folders.map((folder) => (
            <div
              key={folder.id}
              className={classNames(styles.modal__linkItem, {
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
                <Image
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
};

export default AddLinkToFolder;
