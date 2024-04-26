import styles from './Modal.module.css';

export default function Modal({ modalText, children, onClose }) {
  return (
    <div className={styles.modalContainer}>
      <button onClick={onClose}>close</button>
      <span className={styles.modalText}>{modalText}</span>
      {children}
    </div>
  );
}
