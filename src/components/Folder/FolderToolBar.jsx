import { ALL_LINKS_ID } from "../../api/constant";
import { ALL_LINKS_TEXT } from "./constant";
import * as FolderToolBarLayout from "./FolderToolBar.style";

export const FolderToolBar = ({
  folderList,
  selectedFolderId,
  onFolderClick,
}) => {
  // 현재 폴더 이름
  const folderName =
    ALL_LINKS_ID === selectedFolderId
      ? ALL_LINKS_TEXT
      : folderList?.find(({ id }) => id === selectedFolderId)?.name;
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
        <FolderToolBarLayout.AddFolderButton>
          <span>폴더 추가</span>
          <FolderToolBarLayout.AddFolderSvg />
        </FolderToolBarLayout.AddFolderButton>
      </FolderToolBarLayout.AddFolderButtonWrap>

      {/* 폴더 이름 */}
      <FolderToolBarLayout.FolderName>
        {folderName}
      </FolderToolBarLayout.FolderName>
    </FolderToolBarLayout.FolderToolBarWrap>
  );
};
