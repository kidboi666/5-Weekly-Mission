import styles from './modalFolder.module.css';
import closeIcon from '../assets/_close.svg';

export default function ModalFolder({
  title,
  folderName,
  buttonName,
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

          <div className={styles.modal__content__body}>
            <input placeholder="내용 입력" value={folderName} />
          </div>
          <button className={styles.actionButton}>{buttonName}</button>

          <button className={styles.exit_button} onClick={handleCloseModal}>
            <img src={closeIcon} alt="닫기버튼" />
          </button>
        </div>
      </div>
    )
  );
}
