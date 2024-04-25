import SearchBar from "../Searchbar/Searchbar";
import Folder from "../Folder/Folder";
import useFetchData from "../../hooks/useFetchData";
import Card from "../Card/Card";
import * as S from "./CardList.styled";

const CardList = ({ isFolderPage }) => {
  const { data: folderData, isLoading } = useFetchData(
    `${import.meta.env.VITE_BASE_URL}/sample/folder`
  );

  if (isLoading) return <div>Loading...</div>;
  if (!folderData) return null;

  const folderId = null;

  return (
    <S.CardListWrapper>
      <SearchBar />
      {isFolderPage ? (
        <Folder folderId={folderId} />
      ) : (
        <S.CardContainer>
          {folderData.folder.links.map((link) => (
            <Card key={link.id} link={link} />
          ))}
        </S.CardContainer>
      )}
    </S.CardListWrapper>
  );
};

export default CardList;
