import React from "react";
import * as S from "./AddFolderLink.styled";
import linkIcon from "../../../image/link.png";
import { useModal } from "../Context/ModalContext";

const AddFolderLink = () => {
  const { openModal, closeModal } = useModal();

  const handleOpenAddLinkModal = () => {
    openModal("addLink");
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
    </>
  );
};

export default AddFolderLink;
