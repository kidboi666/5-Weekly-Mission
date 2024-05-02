import * as S from "./LinksContent.styled";
import Card from "../Card/Card";
import NoLink from "../NoLink/NoLinks";
import ActionButton from "../ActionButton/ActionButton";
import Modal from "../Modal/Modal";
import { useModal } from "../Context/ModalContext";

const LinksContent = ({
  foldersData,
  linksData,
  activeFolderName,
  activeFolderId,
  onClick,
}) => {
  const isEmpty = !linksData || linksData.length === 0;
  const { modalState, openModal, closeModal } = useModal();

  return (
    <>
      <S.FoldermenuToolbar>
        <S.SelectedFolder>{activeFolderName}</S.SelectedFolder>
        {activeFolderId !== null && (
          <ActionButton
            activeFolderName={activeFolderName}
            activeFolderId={activeFolderId}
            onClick={onClick}
          />
        )}
      </S.FoldermenuToolbar>

      <S.FolderContainer>
        {isEmpty ? (
          <NoLink />
        ) : (
          linksData.map((link) => (
            <Card key={link.id} link={link} isFolderPage={true} />
          ))
        )}
      </S.FolderContainer>

      {modalState.deleteLink && (
        <Modal
          text="링크 삭제"
          showButton={true}
          buttonText="삭제하기"
          buttonType="red"
          content={
            linksData.find((link) => link.id === modalState.deleteLink)?.url
          }
          onClick={() => closeModal("deleteLink")}
        />
      )}

      {modalState.addLink && (
        <Modal
          text="폴더에 추가"
          showButton={true}
          buttonText="추가하기"
          buttonType="primary"
          content="링크 주소"
          folderMenu={foldersData.data.map((folder) => folder.name)}
          linkCount={foldersData.data.map((folder) =>
            folder.link ? folder.link.count : 0
          )}
          onClick={() => closeModal("addLink")}
        />
      )}
    </>
  );
};

export default LinksContent;
