import styles from "./AddLinkModal.module.scss";
import classNames from "classnames/bind";
import { Folder } from "@/src/type";
import { FolderItem } from "@/src/ui";
import { Dispatch, KeyboardEventHandler, SetStateAction } from "react";
import {
  ModalTemplate,
  ContentBox,
  ContentButton,
  ModalContentDescription,
  ModalContentTitle,
} from "../parts";

const cx = classNames.bind(styles);

type AddLinkModalProps = {
  isOpen: boolean;
  folders: Folder[];
  description: string;
  selectedFolderId: number | null;
  setSelectedFolderId: Dispatch<SetStateAction<number | null>>;
  onAddClick: () => void;
  onCloseClick: () => void;
  onKeyDown: KeyboardEventHandler<HTMLDivElement>;
};

export const AddLinkModal = ({
  isOpen,
  folders,
  description,
  selectedFolderId,
  setSelectedFolderId,
  onAddClick,
  onCloseClick,
  onKeyDown,
}: AddLinkModalProps) => {
  return (
    <ModalTemplate
      isOpen={isOpen}
      onBackdropClick={onCloseClick}
      onKeyDown={onKeyDown}
    >
      <ContentBox
        header={
          <div className={cx("modal-header")}>
            <ModalContentTitle>폴더에 추가</ModalContentTitle>
            <ModalContentDescription>{description}</ModalContentDescription>
          </div>
        }
        content={
          <div className={cx("modal-content")}>
            <div className={cx("folder-list")}>
              {folders?.map(({ id, name, linkCount }) => (
                <FolderItem
                  key={id}
                  isSelected={id === selectedFolderId}
                  folderName={name}
                  linkCount={linkCount}
                  onClick={() => setSelectedFolderId(id)}
                />
              ))}
            </div>
            <ContentButton onClick={onAddClick}>추가하기</ContentButton>
          </div>
        }
        onCloseClick={onCloseClick}
      />
    </ModalTemplate>
  );
};
