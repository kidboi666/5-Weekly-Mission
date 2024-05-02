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
    <S.ButtonWrapper>
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
    </S.ButtonWrapper>
  );
};

export default memo(ActionButton);
