import Card from "../Card/Card";
import NoLink from "../NoLink/NoLinks";
import ActionButton from "../ActionButton/ActionButton";
import Modal from "../Modal/Modal";
import { useModal } from "../Context/ModalContext";
import styles from "./LinksContent.module.css";

const LinksContent = ({
  foldersData,
  linksData,
  activeFolderName,
  activeFolderId,
  onClick,
}) => {
  const isEmpty = !linksData || linksData.length === 0;
  const { modalState, openModal, closeModal } = useModal();

  console.log(typeof modalState.deleteLink);

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
            onClick={onClick}
          />
        )}
      </div>

      <div className={styles.folder_containter}>
        {isEmpty ? (
          <NoLink />
        ) : (
          linksData.map((link) => (
            <Card key={link.id} link={link} isFolderPage={true} />
          ))
        )}
      </div>

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
