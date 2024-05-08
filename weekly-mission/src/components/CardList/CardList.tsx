import React from "react";
import SearchBar from "../Searchbar/Searchbar";
import Folder from "../Folder/Folder";
import useFolderList from "../../hooks/useFolderList";
import { useState, memo } from "react";
import Card from "../Card/Card";

import * as S from "./CardList.styled";

interface CardListProps {
  isFolderPage: boolean;
}

const CardList = ({ isFolderPage }: CardListProps) => {
  const { data: folderData, isLoading } = useFolderList();

  if (isLoading) return <div>Loading...</div>;
  if (!folderData) return null;

  const folderId: string = "";

  return (
    <S.CardListWrapper>
      {isFolderPage ? (
        <Folder folderId={folderId} />
      ) : (
        <>
          <SearchBar />
          <S.CardContainer>
            {folderData.folder.links.map((link: any) => (
              <Card key={link.id} link={link} isFolderPage={isFolderPage} />
            ))}
          </S.CardContainer>
        </>
      )}
    </S.CardListWrapper>
  );
};

export default memo(CardList);
