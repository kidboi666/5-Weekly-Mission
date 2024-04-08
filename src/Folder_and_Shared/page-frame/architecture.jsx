import {
  SharedPageTemplate,
  FolderPageTemplate,
  Items,
  Container,
} from "./design";

export const SharedPageLayout = ({ folderInfo, searchBar, cardList }) => {
  return (
    <SharedPageTemplate>
      {folderInfo}
      <Items>
        {searchBar}
        {cardList}
      </Items>
    </SharedPageTemplate>
  );
};

export const FolderPageLayout = ({ linkForm, searchBar, folderToolBar, cardList }) => {
  return (
    <FolderPageTemplate>
      {linkForm}
      <Items>
        {searchBar}
        <Container>
			{folderToolBar}
			{cardList}
		</Container>
      </Items>
    </FolderPageTemplate>
  );
};
