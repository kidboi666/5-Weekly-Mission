import styles from './ModalContents.module.css';
import Button from '../Button/Button';
import { useState } from 'react';

export default function FolderNameChange({ folderName }) {
  const [inputValue, setInputValue] = useState(folderName);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={styles.modalContentWrapper}>
      <span className={styles.modalHeader}>폴더 추가</span>
      <form className={styles.modalForm}>
        <input
          placeholder='내용 입력'
          value={inputValue}
          className={styles.modalInput}
          onChange={handleInputChange}
        />
        <Button className={styles.modalButton}>변경하기</Button>
      </form>
    </div>
  );
}
