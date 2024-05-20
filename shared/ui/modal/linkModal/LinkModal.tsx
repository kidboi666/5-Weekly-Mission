import React from "react";
import styles from "./linkModal.module.css";
import Image from "next/image";
import closeIcon from "@/public/img/close.svg";

interface ModalProps {
  children: React.ReactNode;
  onClickCloseModal: () => void;
}

const Modal = ({ children, onClickCloseModal }: ModalProps) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        {children}
        <button className={styles.closeBtn} onClick={onClickCloseModal}>
          <Image src={closeIcon} alt="close icon" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
