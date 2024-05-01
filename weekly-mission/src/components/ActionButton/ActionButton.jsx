import * as S from "./ActionButton.styled";
import { useState, memo } from "react";
import shareIcon from "../../../image/share.png";
import deleteIcon from "../../../image/delete.png";
import renameIcon from "../../../image/pen.png";
import Modal from "../Modal/Modal";
import { useModal } from "../Context/ModalContext";

const CustomButton = ({ onClick, icon, text }) => {
  return (
    <S.Button onClick={onClick} style={{ backgroundImage: `url(${icon})` }}>
      {text}
    </S.Button>
  );
};

const ActionButton = ({ activeFolderId }) => {
  const { isModalOpen, openModal, closeModal } = useModal();

  const handleModalToggle = (modalType) => {
    if (isModalOpen[modalType]) {
      closeModal(modalType);
    } else {
      openModal(modalType);
    }
  };

  return (
    <S.ButtonWrapper>
      <CustomButton
        onClick={() => handleModalToggle("shareFolder")}
        icon={shareIcon}
        text="공유"
      />
      {isModalOpen.shareFolder && (
        <Modal
          activeFolderId={activeFolderId}
          text="폴더 공유"
          content="폴더명"
          showShareIcons={true}
          onClick={() => closeModal("shareFolder")}
        />
      )}

      <CustomButton
        onClick={() => handleModalToggle("renameFolder")}
        icon={renameIcon}
        text="이름 변경"
      />
      {isModalOpen.renameFolder && (
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
      {isModalOpen.deleteFolder && (
        <Modal
          text="폴더 삭제"
          showButton={true}
          buttonText="삭제하기"
          buttonType="red"
          content="폴더명"
          onClick={() => closeModal("deleteFolder")}
        />
      )}
    </S.ButtonWrapper>
  );
};

export default memo(ActionButton);
