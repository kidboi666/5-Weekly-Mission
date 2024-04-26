import styles from './ModalContents.module.css';

export default function FolderDelete({ folderName }) {
  return (
    <div className={styles.modalContentWrapper}>
      <div className={styles.modalHeaderWrapper}>
        <span className={styles.modalHeader}>폴더 삭제</span>
        <span className={styles.modalSubHeader}>{folderName}</span>
      </div>

      <button className={styles.deleteButton}>삭제하기</button>
    </div>
  );
}
