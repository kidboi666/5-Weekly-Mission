import Button from '../Button/Button';
import styles from './ModalContents.module.css';

export default function FolderAdd(params) {
  return (
    <div className={styles.modalContentWrapper}>
      <span className={styles.modalHeader}>폴더 추가</span>
      <form className={styles.modalForm}>
        <input placeholder='내용 입력' className={styles.modalInput} />
        <Button className={styles.modalButton}>추가하기</Button>
      </form>
    </div>
  );
}
