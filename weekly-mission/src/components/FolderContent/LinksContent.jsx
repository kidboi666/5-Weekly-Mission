import * as S from "./LinksContent.styled";
import Card from "../Card/Card";
import NoLink from "../NoLink/NoLinks";
import ActionButton from "../ActionButton/ActionButton";

const LinksContent = ({
  linksData,
  activeFolderName,
  activeFolderId,
  onClick,
}) => {
  const isEmpty = !linksData || linksData.data.length === 0;

  return (
    <>
      <S.FoldermenuToolbar>
        <S.SelectedFolder>{activeFolderName}</S.SelectedFolder>
        {activeFolderId !== null && (
          <ActionButton activeFolderId={activeFolderId} onClick={onClick} />
        )}
      </S.FoldermenuToolbar>

      <S.FolderContainer>
        {isEmpty ? (
          <NoLink />
        ) : (
          linksData.data.map((link) => <Card key={link.id} link={link} />)
        )}
      </S.FolderContainer>
    </>
  );
};

export default LinksContent;
