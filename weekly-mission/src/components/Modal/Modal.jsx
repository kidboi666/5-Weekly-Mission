import * as S from "./Modal.styled";
import closeButton from "../../../image/_close.svg";
import Button from "../Button/Button";

const Modal = ({ text, buttonText, buttonType, onClick }) => {
  return (
    <S.ModalContainer>
      <S.ModalContent>
        <S.CloseButton src={closeButton} onClick={onClick} />
        <S.ModalName>{text}</S.ModalName>
        <S.ModalInput placeholder="내용 입력" />
        <Button text={buttonText} type={buttonType} />
      </S.ModalContent>
    </S.ModalContainer>
  );
};

export default Modal;
