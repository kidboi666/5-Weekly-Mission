import React from "react";
import { memo } from "react";
import { useModal } from "src/context/ModalContext";
import styles from "./Popover.module.css";

const Popover = () => {
  const { modalState, openModal, closeModal } = useModal();

  const handleModalToggle = (modalType: string) => {
    if (modalState[modalType]) {
      closeModal(modalType);
    } else {
      openModal(modalType);
    }
  };

  return (
    <div className={styles.popover_container}>
      <button
        className={styles.popoverbutton}
        onClick={() => {
          handleModalToggle("deleteLink");
        }}
      >
        삭제하기
      </button>

      <button
        className={styles.popoverbutton}
        onClick={() => {
          handleModalToggle("addLink");
        }}
      >
        폴더에 추가
      </button>
    </div>
  );
};

export default memo(Popover);
