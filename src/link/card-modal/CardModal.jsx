import * as S from './Modal.styled.js';

function Modal() {
  return (
    <S.StyledModal>
      <S.ModalWrapper>
        <S.XButton>logo</S.XButton>
        <span>폴더 이름 변경</span>
        <S.InputWrapper>
          <S.InputBox type="text" />
          <S.Button>변경하기</S.Button>
        </S.InputWrapper>
      </S.ModalWrapper>
    </S.StyledModal>
  );
}

export default Modal;
