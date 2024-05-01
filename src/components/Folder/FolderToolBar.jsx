import { useState } from "react";
import { ALL_LINKS_ID } from "../../api/constant";
import { ALL_LINKS_TEXT, MODALS_ID, BUTTONS } from "./constant";
import * as FolderToolBarLayout from "./FolderToolBar.style";
import { AddFolderModal } from "../\bModals/AddFolderModal";
import { DeleteModal } from "../\bModals/DeleteModal";

export const FolderToolBar = ({
  folderList,
  selectedFolderId,
  onFolderClick,
}) => {
  const [currentModal, setCurrentModal] = useState(null);
  // 현재 폴더 이름
  const folderName =
    ALL_LINKS_ID === selectedFolderId
      ? ALL_LINKS_TEXT
      : folderList?.find(({ id }) => id === selectedFolderId)?.name;

  const closeModal = () => {
    setCurrentModal(null);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };
  return (
    <FolderToolBarLayout.FolderToolBarWrap>
      {/* TooBar Button */}
      <FolderToolBarLayout.FolderToolBarButtonWrap>
        <FolderToolBarLayout.FolderToolBarButton
          className={ALL_LINKS_ID === selectedFolderId ? "selected" : ""}
          onClick={() => onFolderClick(ALL_LINKS_ID)}
        >
          {ALL_LINKS_TEXT}
        </FolderToolBarLayout.FolderToolBarButton>
        {folderList?.map(({ id, name }) => (
          <FolderToolBarLayout.FolderToolBarButton
            key={id}
            className={id === selectedFolderId ? "selected" : ""}
            onClick={() => onFolderClick(id)}
          >
            {name}
          </FolderToolBarLayout.FolderToolBarButton>
        ))}
      </FolderToolBarLayout.FolderToolBarButtonWrap>

      {/* add Foler Button */}
      <FolderToolBarLayout.AddFolderButtonWrap>
        <FolderToolBarLayout.AddFolderButton
          onClick={() => setCurrentModal(MODALS_ID.addFolder)}
        >
          <span>폴더 추가</span>
          <FolderToolBarLayout.AddFolderSvg />
        </FolderToolBarLayout.AddFolderButton>
        <AddFolderModal
          isOpen={currentModal === MODALS_ID.addFolder}
          title="폴더 추가"
          placeholder="내용 입력"
          buttonText="추가하기"
          onCloseClick={closeModal}
          onKeyDown={handleKeyDown}
        />
      </FolderToolBarLayout.AddFolderButtonWrap>

      {/* 폴더 이름 */}
      <FolderToolBarLayout.FolderName>
        {folderName}
      </FolderToolBarLayout.FolderName>

      {/* "전체" 일 때를 제외한 버튼 출력 */}
      {selectedFolderId !== ALL_LINKS_ID && (
        <FolderToolBarLayout.IconButtonWrap>
          {BUTTONS.map(({ text, iconSource, modalId }, index) => (
            <FolderToolBarLayout.IconButton
              key={index}
              onClick={() => setCurrentModal(modalId)}
            >
              <FolderToolBarLayout.IconImage
                src={iconSource}
                alt={`${text} 아이콘`}
              />
              <FolderToolBarLayout.IconText>
                {text}
              </FolderToolBarLayout.IconText>
            </FolderToolBarLayout.IconButton>
          ))}
          <AddFolderModal
            isOpen={currentModal === MODALS_ID.rename}
            title="폴더 이름 변경"
            placeholder="내용 입력"
            description={folderName}
            buttonText="변경하기"
            onCloseClick={closeModal}
            onKeyDown={handleKeyDown}
          />
          <DeleteModal
            isOpen={currentModal === MODALS_ID.delete}
            title="폴더 삭제"
            description={folderName}
            buttonText="삭제하기"
            onCloseClick={closeModal}
            onKeyDown={handleKeyDown}
          />
        </FolderToolBarLayout.IconButtonWrap>
      )}
    </FolderToolBarLayout.FolderToolBarWrap>
  );
};
