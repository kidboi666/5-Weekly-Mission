import * as FolderToolBarLayout from "./FolderToolBar.style";

export const FolderToolBar = ({ folderList }) => {
  return (
    <FolderToolBarLayout.FolderToolBarWrap>
      {/* TooBar Button */}
      <FolderToolBarLayout.FolderToolBarButtonWrap>
        <FolderToolBarLayout.FolderToolBarButton className="selected">
          전체
        </FolderToolBarLayout.FolderToolBarButton>
        {folderList?.map(({ id, name }) => (
          <FolderToolBarLayout.FolderToolBarButton key={id}>
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
      <FolderToolBarLayout.FolderName>전체</FolderToolBarLayout.FolderName>
    </FolderToolBarLayout.FolderToolBarWrap>
  );
};
