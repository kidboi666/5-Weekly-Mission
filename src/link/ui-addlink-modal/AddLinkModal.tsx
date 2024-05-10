import styles from "./AddLink.module.scss";
import classNames from "classnames/bind";
import { Modal } from "@/sharing/ui-modal";
import { ModalContentBox } from "@/sharing/ui-modal-content-box";
import { ModalContentButton } from "@/sharing/ui-modal-content-button";
import { ModalContentTitle } from "@/sharing/ui-modal-content-title";
import { ModalContentDescription } from "@/sharing/ui-modal-content-description";
import { FolderItem } from "@/folder/ui-folder-item";

const cx = classNames.bind(styles);

export const AddLinkModal = ({
  isOpen,
  folders,
  title,
  buttonText,
  selectedLinkUrl,
  selectedFolderId,
  setSelectedFolderId,
  onAddClick,
  onCloseClick,
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
            <div className={cx("folder-list")}>
              {folders?.map(({ id, name, link }) => {
                return (
                  <FolderItem
                    key={id}
                    isSelected={id === selectedFolderId}
                    folderName={name}
                    linkCount={link?.count}
                    onClick={() => {
                      setSelectedFolderId(id);
                    }}
                  />
                );
              })}
            </div>
            <ModalContentButton onClick={onAddClick}>
              {buttonText}
            </ModalContentButton>
          </div>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};
