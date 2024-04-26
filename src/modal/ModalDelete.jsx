import closeIcon from '../assets/_close.svg';

import styles from './modalDelete.module.css';

export default function ModalDelete({
  title,
  DeleteName,
  onClose,
  isModalOpen,
}) {
  const handleCloseModal = () => {
    onClose(false);
  };

  return (
    isModalOpen && (
      <div className={styles.modal}>
        <div className={styles.modal__content}>
          <div className={styles.modal__content__header}>{title}</div>

          <div className={styles.modal__content__body}>{DeleteName}</div>
          <button className={styles.delete__action__button}>삭제하기</button>

          <button className={styles.exit_button} onClick={handleCloseModal}>
            <img src={closeIcon} alt="닫기버튼" />
          </button>
        </div>
      </div>
    )
  );
}
