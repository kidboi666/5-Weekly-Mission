import React from "react";
import { useState, memo } from "react";
import shareIcon from "../../images/share.svg";
import deleteIcon from "../../images/delete.png";
import renameIcon from "../../images/pen.png";
import Image from "next/image";
import Modal from "../Modal";
import { useModal } from "src/context/ModalContext";
import { FolderId } from "@components/Folder";
import styles from "./ActionButton.module.css";

interface CustomButtonProps {
  onClick: () => void;
  icon?: string;
  text: string;
}

const CustomButton = ({ onClick, text }: CustomButtonProps) => {
  return (
    <button className={styles.custombutton} onClick={onClick}>
      {text}
    </button>
  );
};

interface ActiveButtonProps {
  activeFolderName: string;
  activeFolderId: FolderId;
}

const ActionButton = ({
  activeFolderName,
  activeFolderId,
}: ActiveButtonProps) => {
  const { modalState, openModal, closeModal } = useModal();

  const handleModalToggle = (modalType: string) => {
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
          alt="공유아이콘"
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
          alt="이름 변경 아이콘"
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
          alt="삭제 아이콘"
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
