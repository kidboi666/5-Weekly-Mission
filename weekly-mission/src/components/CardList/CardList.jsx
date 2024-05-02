import SearchBar from "../Searchbar/Searchbar";
import Folder from "../Folder/Folder";
import useFolderList from "../../hooks/useFolderList";
import { useState, memo } from "react";
import Card from "../Card/Card";

import * as S from "./CardList.styled";

const CardList = ({ isFolderPage }) => {
  const { data: folderData, isLoading } = useFolderList();

  if (isLoading) return <div>Loading...</div>;
  if (!folderData) return null;

  const folderId = null;

  return (
    <S.CardListWrapper>
      {isFolderPage ? (
        <Folder folderId={folderId} />
      ) : (
        <>
          <SearchBar />
          <S.CardContainer>
            {folderData.folder.links.map((link) => (
              <Card key={link.id} link={link} isFolderPage={isFolderPage} />
            ))}
          </S.CardContainer>
        </>
      )}
    </S.CardListWrapper>
  );
};

export default memo(CardList);
