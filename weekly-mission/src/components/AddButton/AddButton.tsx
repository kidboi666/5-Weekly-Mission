import React from "react";
import styled from "styled-components";
import AddFolderModal from "../Modal/Modal";
import { useModal } from "../Context/ModalContext";

const StyledAddButton = styled.button`
  width: 79px;
  height: 19px;
  font-size: 16px;
  font-weight: 500;
  color: #6d6afe;
  background-color: white;
  border: none;
  white-space: nowrap;
  cursor: pointer;
`;

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
      <StyledAddButton onClick={handleOpenAddFolderModal}>
        폴더 추가 +
      </StyledAddButton>
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
