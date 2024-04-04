import React, { useEffect, useState } from "react";
import { StyledSectionWrap } from "../Common.styled";
import LinkInput from "../../components/LinkInput/LinkInput";
import * as S from "./FolderPage.styled";
import { getFoldersItems, getFoldersList } from "../../api";
import Search from "../../components/Search/Search";
import CardList from "../../components/CardList.js/CardList";

export default function FolderPage() {
  const [items, setItems] = useState([]);

  const handleLoad = async () => {
    const folderList = await getFoldersList();
    const nextItems = await getFoldersItems();
    setItems(nextItems);
    console.log(folderList);
  };
  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <S.StyledTopWrap>
        <LinkInput />
      </S.StyledTopWrap>
      <StyledSectionWrap>
        <Search />
        {!items && <p>저장된 링크가 없습니다</p>}
        {items && <CardList items={items} />}
      </StyledSectionWrap>
    </>
  );
}
