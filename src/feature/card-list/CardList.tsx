import { useGetFolders } from "@/src/data-access";
import { KeyboardEventHandler, useCallback, useRef, useState } from "react";
import {
  AlertModal,
  AddLinkModal,
  CardList as UiCardList,
  EditableCard,
  NoLink,
} from "@/src/ui";
import { MODALS_ID } from "./constant";
import { Link } from "@/src/type";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames/bind";
import styles from "./modal-animation.module.scss"; 

const cx = classNames.bind(styles);

type CardListProps = {
  links: Link[];
};

export const CardList = ({ links }: CardListProps) => {
  const { data: folders } = useGetFolders();
  const cardListRef = useRef<HTMLDivElement>(null);
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);
  const [currentModal, setCurrentModal] = useState<string | null>(null);
  const [selectedLinkUrl, setSelectedLinkUrl] = useState<string>("");

  const closeModal = () => setCurrentModal(null);
  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  const getPopoverPosition = useCallback(
    (cardIndex: number) => {
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
            setSelectedLinkUrl(link?.url ?? "");
            setCurrentModal(MODALS_ID.deleteLink);
          }}
          onAddToFolderClick={() => {
            setSelectedLinkUrl(link?.url ?? "");
            setCurrentModal(MODALS_ID.addToFolder);
          }}
        />
      ))}
      <CSSTransition
        in={currentModal === MODALS_ID.deleteLink}
        timeout={300}
        classNames={{
          enter: cx("modal-enter"),
          enterActive: cx("modal-enter-active"),
          exit: cx("modal-exit"),
          exitActive: cx("modal-exit-active"),
        }}
        unmountOnExit
      >
        <AlertModal
          isOpen={currentModal === MODALS_ID.deleteLink}
          title="링크 삭제"
          description={selectedLinkUrl}
          buttonText="삭제하기"
          onClick={() => {}}
          onCloseClick={closeModal}
          onKeyDown={handleKeyDown}
        />
      </CSSTransition>
      <CSSTransition
        in={currentModal === MODALS_ID.addToFolder}
        timeout={300}
        classNames={{
          enter: cx("modal-enter"),
          enterActive: cx("modal-enter-active"),
          exit: cx("modal-exit"),
          exitActive: cx("modal-exit-active"),
        }}
        unmountOnExit
      >
        <AddLinkModal
          isOpen={currentModal === MODALS_ID.addToFolder}
          folders={folders}
          description={selectedLinkUrl}
          selectedFolderId={selectedFolderId}
          setSelectedFolderId={setSelectedFolderId}
          onAddClick={() => {}}
          onCloseClick={() => {
            setSelectedFolderId(null);
            closeModal();
          }}
          onKeyDown={handleKeyDown}
        />
      </CSSTransition>
    </UiCardList>
  );
};
