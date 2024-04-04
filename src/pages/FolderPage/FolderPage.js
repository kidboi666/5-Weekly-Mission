import React, { useEffect, useState } from "react";
import { StyledSectionWrap } from "../Common.styled";
import LinkInput from "../../components/LinkInput/LinkInput";
import * as S from "./FolderPage.styled";
import { getFoldersItems, getFoldersList } from "../../api";
import Search from "../../components/Search/Search";
import Card from "../../components/Card/Card";

export default function FolderPage() {
  const [items, setItems] = useState([]);

  const handleLoad = async () => {
    const folderList = await getFoldersList();
    const nextItems = await getFoldersItems();
    setItems(nextItems);
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

        {items && (
          <ul>
            {items.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </ul>
        )}
      </StyledSectionWrap>
    </>
  );
}
