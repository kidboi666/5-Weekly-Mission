import { Modal } from "../Modal/Modal";
import { ModalContentBox } from "../Modal/ModalContentBox";

import * as S from "./AddLinkModal.style";

export const AddLinkModal = ({
  folderList,
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
                <p>
                  {name} / {link?.count}
                </p>
              ))}
            </S.WrapFolderList>
          </S.ModalContent>
        }
      />
    </Modal>
  );
};
