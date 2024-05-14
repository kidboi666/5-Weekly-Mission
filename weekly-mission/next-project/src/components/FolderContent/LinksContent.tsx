import React from "react";
import Card from "@components/Card";
import NoLink from "@components/NoLink";
import ActionButton from "@components/ActionButton";
import Modal from "@components/Modal";
import { useModal } from "src/context/ModalContext";
import { Folder } from "@api/useFoldersByUserId";
import { FolderId } from "@components/Folder";
import styles from "./LinksContent.module.css";

interface LinksContentProps {
  foldersData: Folder;
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
      <div className={styles.foldermenu_toolbar}>
        <div className={styles.foldermenu_selectedfolder}>
          {activeFolderName}
        </div>
        {activeFolderId !== null && (
          <ActionButton
            activeFolderName={activeFolderName}
            activeFolderId={activeFolderId}
          />
        )}
      </div>

      <div className={styles.folder_containter}>
        {isEmpty ? (
          <NoLink />
        ) : (
          linksData.map((link) => (
            <Card key={link.data.id} link={link.data} isFolderPage={true} />
          ))
        )}
      </div>

      {modalState.deleteLink && (
        <Modal
          text="링크 삭제"
          showButton={true}
          buttonText="삭제하기"
          buttonType="red"
          content={"링크 주소"}
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
