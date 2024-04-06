import * as FolderToolBarLayout from "./FolderToolBar.style";

export const FolderToolBar = ({ folderList }) => {
  return (
    <FolderToolBarLayout.FolderToolBarWrap>
      <FolderToolBarLayout.FolderToolBarButtonWrap>
        <FolderToolBarLayout.FolderToolBarButton>
          전체
        </FolderToolBarLayout.FolderToolBarButton>
        {folderList?.map(({ id, name }) => (
          <FolderToolBarLayout.FolderToolBarButton key={id}>
            {name}
          </FolderToolBarLayout.FolderToolBarButton>
        ))}
      </FolderToolBarLayout.FolderToolBarButtonWrap>
    </FolderToolBarLayout.FolderToolBarWrap>
  );
};
