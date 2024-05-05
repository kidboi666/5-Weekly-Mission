import { EditableCard } from "link/ui-editable-card";
import { NoLink } from "link/ui-no-link";
import { useRef, useState } from "react";
import { CardList as UiCardList } from "link/ui-card-list";
import { MODALS_ID } from "./constant";
import { AlertModal } from "link/ui-alert-modal";
import { AddLinkModal } from "link/ui-addlink-modal";

export const CardList = ({ links, folders }) => {
  const cardListRef = useRef(null);
  const [currentModal, setCurrentModal] = useState(null);
  const [selectedLinkUrl, setSelectedLinkUrl] = useState(null);
  const [selectedFolderId, setSelectedFolderId] = useState(null);

  const closeModal = () => {
    setCurrentModal(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === "escape") {
      closeModal();
    }
  };

  if (links.length === 0) return <NoLink />;
  return (
    <UiCardList ref={cardListRef}>
      {links.map((link, index) => (
        <EditableCard
          key={link?.id}
          {...link}
          onDeleteClick={() => {
            setSelectedLinkUrl(link?.url);
            setCurrentModal(MODALS_ID.deleteLink);
          }}
          onAddLinkClick={() => {
            setSelectedLinkUrl(link?.url);
            setCurrentModal(MODALS_ID.addToFolder);
          }}
        />
      ))}
      <AlertModal
        isOpen={currentModal === MODALS_ID.deleteLink}
        title="링크 삭제"
        buttonText="삭제하기"
        selectedLinkUrl={selectedLinkUrl}
        onCloseClick={closeModal}
        onKeyDown={handleKeyDown}
      />
      <AddLinkModal
        isOpen={currentModal === MODALS_ID.addToFolder}
        title="폴더에 추가"
        buttonText="추가하기"
        selectedLinkUrl={selectedLinkUrl}
        selectedFolderId={selectedFolderId}
        setSelectedFolderId={setSelectedFolderId}
        onCloseClick={closeModal}
        onKeyDown={handleKeyDown}
        folders={folders}
      />
    </UiCardList>
  );
};
