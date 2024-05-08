import React from "react";
import * as S from "./LinksContent.styled";
import Card from "../Card/Card";
import NoLink from "../NoLink/NoLinks";
import ActionButton from "../ActionButton/ActionButton";
import Modal from "../Modal/Modal";
import { useModal } from "../Context/ModalContext";
import { Folder } from "../../hooks/useFoldersByUserId";
import { FolderId } from "../Folder/Folder";
import { LinkData } from "../../services/fetchFolderLinksData";

interface LinksContentProps {
  foldersData: Folder[];
  linksData: LinkData[];
  activeFolderName: string;
  activeFolderId: FolderId;
}

const LinksContent = ({
  foldersData,
  linksData,
  activeFolderName,
  activeFolderId,
}: LinksContentProps) => {
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
          />
        )}
      </S.FoldermenuToolbar>

      <S.FolderContainer>
        {isEmpty ? (
          <NoLink />
        ) : (
          linksData.map((link) => (
            <Card key={link.data.id} link={link.data} isFolderPage={true} />
          ))
        )}
      </S.FolderContainer>

      {modalState.deleteLink && (
        <Modal
          text="링크 삭제"
          showButton={true}
          buttonText="삭제하기"
          buttonType="red"
          content={"링크주소"}
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
          folderMenu={foldersData.map((folder) => folder.name)}
          linkCount={foldersData.map((folder) =>
            folder.link ? folder.link.count : 0
          )}
          onClick={() => closeModal("addLink")}
        />
      )}
    </>
  );
};

export default LinksContent;
