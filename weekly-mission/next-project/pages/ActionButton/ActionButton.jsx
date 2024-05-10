import { useState, memo } from "react";
import Image from "next/image";
import shareIcon from "../../public/images/share.png";
import deleteIcon from "../../public/images/delete.png";
import renameIcon from "../../public/images/pen.png";
import Modal from "../Modal/Modal";
import { useModal } from "../Context/ModalContext";
import styles from "./ActionButton.module.css";

const CustomButton = ({ onClick, icon, text }) => {
  return (
    <button
      className={styles.custombutton}
      onClick={onClick}
      style={{ backgroundImage: `url(${icon})` }}
    >
      {text}
    </button>
  );
};

const ActionButton = ({ activeFolderName, activeFolderId }) => {
  const { modalState, openModal, closeModal } = useModal();

  const handleModalToggle = (modalType) => {
    if (modalState[modalType]) {
      closeModal(modalType);
    } else {
      openModal(modalType);
    }
  };

  return (
    <div className={styles.buttonwrapper}>
      <CustomButton
        onClick={() => handleModalToggle("shareFolder")}
        icon={shareIcon}
        text="공유"
      />
      {modalState.shareFolder && (
        <Modal
          activeFolderId={activeFolderId}
          text="폴더 공유"
          content={activeFolderName}
          showShareIcons={true}
          onClick={() => closeModal("shareFolder")}
        />
      )}

      <CustomButton
        onClick={() => handleModalToggle("renameFolder")}
        icon={renameIcon}
        text="이름 변경"
      />
      {modalState.renameFolder && (
        <Modal
          text="폴더 이름 변경"
          showButton={true}
          buttonText="변경하기"
          buttonType="primary"
          showInput={true}
          onClick={() => closeModal("renameFolder")}
        />
      )}

      <CustomButton
        onClick={() => handleModalToggle("deleteFolder")}
        icon={deleteIcon}
        text="삭제"
      />
      {modalState.deleteFolder && (
        <Modal
          text="폴더 삭제"
          showButton={true}
          buttonText="삭제하기"
          buttonType="red"
          content={activeFolderName}
          onClick={() => closeModal("deleteFolder")}
        />
      )}
    </div>
  );
};

export default memo(ActionButton);
