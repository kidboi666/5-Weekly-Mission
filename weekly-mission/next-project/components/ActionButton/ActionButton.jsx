import { useState, memo } from "react";
import Image from "next/image";
import shareIcon from "@/public/images/share.svg";
import deleteIcon from "@/public/images/delete.png";
import renameIcon from "@/public/images/pen.png";
import Modal from "../Modal/Modal";
import { useModal } from "../Context/ModalContext";
import styles from "./ActionButton.module.css";

const CustomButton = ({ onClick, text }) => {
  return (
    <button className={styles.custombutton} onClick={onClick}>
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
      <div className={styles.actionbutton}>
        <Image
          className={styles.actionbutton_image}
          src={shareIcon}
          width={18}
          height={18}
        />
        <CustomButton
          onClick={() => handleModalToggle("shareFolder")}
          text="공유"
        />
      </div>
      {modalState.shareFolder && (
        <Modal
          activeFolderId={activeFolderId}
          text="폴더 공유"
          content={activeFolderName}
          showShareIcons={true}
          onClick={() => closeModal("shareFolder")}
        />
      )}

      <div className={styles.actionbutton}>
        <Image
          className={styles.actionbutton_image}
          src={renameIcon}
          width={18}
          height={18}
        />
        <CustomButton
          onClick={() => handleModalToggle("renameFolder")}
          text="이름 변경"
        />
      </div>
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

      <div className={styles.actionbutton}>
        <Image
          className={styles.actionbutton_image}
          src={deleteIcon}
          width={18}
          height={18}
        />
        <CustomButton
          onClick={() => handleModalToggle("deleteFolder")}
          text="삭제"
        />
      </div>
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
