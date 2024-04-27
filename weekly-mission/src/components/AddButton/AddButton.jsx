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
  const { isModalOpen, openModal, closeModal } = useModal();

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
      {isModalOpen.addFolder && (
        <AddFolderModal
          text="폴더 추가"
          buttonText="추가하기"
          buttonType="primary"
          onClick={handleCloseAddFolderModal}
        />
      )}
    </>
  );
};

export default AddButton;
