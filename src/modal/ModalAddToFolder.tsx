import React from 'react';
import styles from './modalAddToFolder.module.css';
import closeIcon from '../assets/_close.svg';

interface ModalAddToFolderProps {
  title: string;
  targetName: string;
  isModalOpen: boolean;
  onClose: (isOpen: boolean) => void;
}

const ModalAddToFolder: React.FC<ModalAddToFolderProps> = ({
  title,
  targetName,
  isModalOpen,
  onClose,
}) => {
  const handleCloseModal = () => {
    onClose(false);
  };

  return isModalOpen ? (
    <div className={styles.modal}>
      <div className={styles.modal__content}>
        <div className={styles.modal__content__header}>{title}</div>

        <div className={styles.modal__content__body}>{targetName}</div>

        <div className={styles.option__container}>
          <button className={styles.options}>
            <p>코딩팁</p> <span>7개 링크</span>
          </button>
          <button className={styles.options}>
            <p>채용 사이트</p> <span>12개 링크</span>
          </button>
          <button className={styles.options}>
            <p>유용한글</p> <span>30개 링크</span>
          </button>
          <button className={styles.options}>
            <p>나만의 장소</p> <span>3개 링크</span>
          </button>
        </div>
        <button className={styles.action__button}>추가하기</button>

        <button className={styles.exit_button} onClick={handleCloseModal}>
          <img src={closeIcon} alt="닫기버튼" />
        </button>
      </div>
    </div>
  ) : null;
};

export default ModalAddToFolder;
