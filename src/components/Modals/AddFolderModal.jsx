import { Modal } from "../Modal/Modal";
import { ModalContentBox } from "../Modal/ModalContentBox";

import * as S from "./Modals.style";

export const AddFolderModal = ({
  isOpen,
  title,
  placeholder,
  description,
  buttonText,
  onCloseClick,
  onKeyDown,
  value,
  onChange,
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
            <S.ModalInput
              type="text"
              value={value}
              onChange={onChange}
              placeholder={placeholder}
            />
            <button className="btn-primary">{buttonText}</button>
          </S.ModalContent>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};
