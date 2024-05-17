import { EditableCard } from "@/components-SharedPage/ui-editable-card";
import { NoLink } from "@/components-SharedPage/ui-no-link";
import React, { useCallback, useRef, useState } from "react";
import { CardList as UiCardList } from "@/components-SharedPage/ui-card-list";
import { modalsId } from "./constant";
import { AlertModal } from "@/components-SharedPage/ui-alert-modal";
import { AddLinkModal } from "@/components-SharedPage/ui-addlink-modal";
import { useGetFolders } from "@/components-FolderPage/data-access-folder";
import { EditedSampleLink } from "@/common/types/data-access-types";

interface CardListProps {
  links: EditedSampleLink[];
}

export const CardList: React.FC<CardListProps> = ({ links }) => {
  const { data: folders } = useGetFolders();
  const cardListRef = useRef(null);
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);
  const [currentModal, setCurrentModal] = useState<string | null>(null);
  const [selectedLinkUrl, setSelectedLinkUrl] = useState<string | null>(null);

  const closeModal = () => {
    setCurrentModal(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "escape") {
      closeModal();
    }
  };

  const getPopoverPosition = useCallback(
    (cardIndex: number): { [position: string]: number } => {
      const count =
        cardListRef?.current !== null
          ? window
              .getComputedStyle(cardListRef?.current)
              .getPropertyValue("grid-template-columns")
              .split(" ").length
          : 1;
      if ((cardIndex + 1) % count === 0) {
        return { right: 0 };
      }
      return { left: 0 };
    },
    [cardListRef]
  );

  if (links.length === 0) return <NoLink />;
  return (
    <UiCardList ref={cardListRef}>
      {links.map((link, index) => (
        <EditableCard
          key={link?.id}
          {...link}
          popoverPosition={getPopoverPosition(index)}
          onDeleteClick={() => {
            setSelectedLinkUrl(link?.url);
            setCurrentModal(modalsId.deleteLink);
          }}
          onAddLinkClick={() => {
            setSelectedLinkUrl(link?.url);
            setCurrentModal(modalsId.addToFolder);
          }}
        />
      ))}
      <AlertModal
        isOpen={currentModal === modalsId.deleteLink}
        title="링크 삭제"
        buttonText="삭제하기"
        selectedLinkUrl={selectedLinkUrl}
        onCloseClick={closeModal}
        onKeyDown={handleKeyDown}
      />
      <AddLinkModal
        isOpen={currentModal === modalsId.addToFolder}
        title="폴더에 추가"
        buttonText="추가하기"
        selectedLinkUrl={selectedLinkUrl}
        onCloseClick={closeModal}
        onKeyDown={handleKeyDown}
        selectedFolderId={selectedFolderId}
        setSelectedFolderId={setSelectedFolderId}
        folders={folders}
        onAddClick={() => {}} //TODO: 링크추가 기능 구현 시 완성할 것
      />
    </UiCardList>
  );
};
