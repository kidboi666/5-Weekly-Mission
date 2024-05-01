import { Modal } from "../Modal/Modal";
import { ModalContentBox } from "../Modal/ModalContentBox";
import { ModalFolderItem } from "../Modal/ModalFolderItem";

import * as S from "./Modals.style";

export const AddLinkModal = ({
  folderList,
  selectedFolderId,
  setSelectedFolderId,
  isOpen,
  onCloseClick,
  onKeyDown,
}) => {
  return (
    <Modal isOpen={isOpen} onCloseClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        title={
          <S.ModalTitle>
            <h2>폴더에 추가</h2>
            <p></p>
          </S.ModalTitle>
        }
        content={
          <S.ModalContent>
            <S.WrapFolderList>
              {folderList?.map(({ id, name, link }) => (
                <ModalFolderItem
                  key={id}
                  isSelected={id === selectedFolderId}
                  folderName={name}
                  linkCount={link?.count}
                  onClick={() => setSelectedFolderId(id)}
                />
              ))}
            </S.WrapFolderList>
            <button className="btn-primary">추가하기</button>
          </S.ModalContent>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};
