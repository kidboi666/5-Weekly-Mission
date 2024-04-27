import * as S from "./AddFolderLink.styled";
import linkIcon from "../../../image/link.png";
import { useModal } from "../Context/ModalContext";
import Modal from "../Modal/Modal";

const AddFolderLink = () => {
  const { isModalOpen, openModal, closeModal } = useModal();

  const handleOpenAddLinkModal = () => {
    openModal("addLink");
  };

  const handleCloseAddLinkModal = () => {
    closeModal("addLink");
  };

  return (
    <>
      <S.AddFolderLink_Container>
        <S.InputWrapper>
          <S.Image src={linkIcon} alt="Link Icon" />
          <S.Input type="text" placeholder="링크를 추가해 보세요." />
        </S.InputWrapper>
        <S.AddButton onClick={handleOpenAddLinkModal}>추가하기</S.AddButton>
      </S.AddFolderLink_Container>

      {isModalOpen.addLink && (
        <Modal
          text="폴더에 추가"
          buttonText="추가하기"
          buttonType="primary"
          onClick={handleCloseAddLinkModal}
        />
      )}
    </>
  );
};

export default AddFolderLink;
