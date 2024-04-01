import { SharedPageTemplate, Items } from "./design";

export const PageLayout = ({ folderInfo, searchBar, cardList }) => {
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
