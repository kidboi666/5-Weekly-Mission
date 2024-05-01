import { Modal } from "../Modal/Modal";
import { ModalContentBox } from "../Modal/ModalContentBox";

import * as S from "./Modals.style";

export const DeleteModal = ({
  isOpen,
  title,
  description,
  buttonText,
  onCloseClick,
  onKeyDown,
}) => {
  return (
    <Modal isOpen={isOpen} onCloseClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        title={
          <S.ModalTitle>
            <h2>{title}</h2>
            <p>{description}</p>
          </S.ModalTitle>
        }
        content={
          <S.ModalContent>
            <button className="btn-primary red">{buttonText}</button>
          </S.ModalContent>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};
