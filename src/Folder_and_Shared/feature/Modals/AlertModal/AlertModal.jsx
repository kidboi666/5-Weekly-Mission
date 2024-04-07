import styles from "./AlertModal.module.scss";
import classNames from "classnames/bind";
import { Modal } from "../Template/Modal";
import { ModalContentBox } from "../Template/ModalContentBox";
import { ModalContentButton } from "../Template/ModalContentButton";
import { ModalContentDescription } from "../Template/ModalContentDescription";
import { ModalContentTitle } from "../Template/ModalContentTitle";

const cx = classNames.bind(styles);

export const AlertModal = ({
  isOpen,
  title,
  description,
  buttonText,
  onClick,
  onCloseClick,
  onKeyDown,
}) => {
  return (
    <Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        header={
          <div className={cx("modal-header")}>
            <ModalContentTitle>{title}</ModalContentTitle>
            <ModalContentDescription>{description}</ModalContentDescription>
          </div>
        }
        content={
          <ModalContentButton onClick={onClick} themeColor="red">
            {buttonText}
          </ModalContentButton>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};
