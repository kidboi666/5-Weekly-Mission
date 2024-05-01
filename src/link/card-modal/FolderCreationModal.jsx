import * as S from './Modal.styled.js';

function FolderCreationModal() {
  return (
    <S.StyledModal>
      <S.ModalWrapper>
        <S.XButton>logo</S.XButton>
        <span>폴더 추가</span>
        <S.InputWrapper>
          <S.InputBox type="text" />
          <S.Button>변경하기</S.Button>
        </S.InputWrapper>
      </S.ModalWrapper>
    </S.StyledModal>
  );
}

export default FolderCreationModal;
