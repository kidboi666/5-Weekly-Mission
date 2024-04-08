import styles from "./InputModal.module.scss";
import classNames from "classnames/bind";
import { Input } from "./Input";
import { Modal } from "../Template/Modal";
import { ModalContentBox } from "../Template/ModalContentBox";
import { ModalContentButton } from "../Template/ModalContentButton";
import { ModalContentTitle } from "../Template/ModalContentTitle";

const cx = classNames.bind(styles);

export const InputModal = ({
  isOpen,
  title,
  placeholder,
  buttonText,
  onCloseClick,
  onKeyDown,
  value,
  onChange,
}) => {
  return (
    <Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        header={<ModalContentTitle>{title}</ModalContentTitle>}
        content={
          <div className={cx("modal-content")}>
            <Input
              value={value}
              onChange={onChange}
              placeholder={placeholder}
            />
            <ModalContentButton>{buttonText}</ModalContentButton>
          </div>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};
