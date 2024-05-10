import styles from "./AlertModal.module.scss";
import classNames from "classnames/bind";
import { Modal } from "@/sharing/ui-modal";
import { ModalContentBox } from "@/sharing/ui-modal-content-box";
import { ModalContentButton } from "@/sharing/ui-modal-content-button";
import { ModalContentTitle } from "@/sharing/ui-modal-content-title";
import { ModalContentDescription } from "@/sharing/ui-modal-content-description";

const cx = classNames.bind(styles);

export const AlertModal = ({
  isOpen,
  title,
  buttonText,
  onCloseClick,
  selectedLinkUrl,
  onKeyDown,
}) => {
  return (
    <Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        header={
          <div className={cx("modal-header")}>
            <ModalContentTitle>{title}</ModalContentTitle>
            <ModalContentDescription>{selectedLinkUrl}</ModalContentDescription>
          </div>
        }
        content={
          <div className={cx("modal-content")}>
            <ModalContentButton themeColor="red">
              {buttonText}
            </ModalContentButton>
          </div>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};
