import React, { useEffect } from "react";
import { StyledSectionWrap } from "../Common.styled";
import LinkInput from "../../components/LinkInput/LinkInput";
import * as S from "./FolderPage.styled";
import { getFoldersItems, getFoldersList } from "../../api";

export default function FolderPage() {
  const handleLoad = async () => {
    const folderList = await getFoldersList();
    const folderItems = await getFoldersItems();
    console.log(folderItems, folderList);
  };
  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <S.StyledTopWrap>
        <LinkInput />
      </S.StyledTopWrap>
      <StyledSectionWrap></StyledSectionWrap>
    </>
  );
}
