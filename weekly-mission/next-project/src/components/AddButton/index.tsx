import React from "react";
import AddFolderModal from "../Modal";
import { useModal } from "src/context/ModalContext";
import styles from "./AddButton.module.css";

const AddButton = () => {
  const { modalState, openModal, closeModal } = useModal();

  const handleOpenAddFolderModal = () => {
    openModal("addFolder");
  };

  const handleCloseAddFolderModal = () => {
    closeModal("addFolder");
  };

  return (
    <>
      <button className={styles.addbutton} onClick={handleOpenAddFolderModal}>
        폴더 추가 +
      </button>
      {modalState.addFolder && (
        <AddFolderModal
          text="폴더 추가"
          showButton={true}
          buttonText="추가하기"
          buttonType="primary"
          showInput={true}
          onClick={handleCloseAddFolderModal}
        />
      )}
    </>
  );
};

export default AddButton;
