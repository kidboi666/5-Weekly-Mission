import React, { useContext, useEffect, useState } from "react";
import Search from "../../components/Search/Search";
import Card from "../../components/Card/Card";
import { getSharedList } from "../../api";
import { UserContext } from "../../contexts/UserContext";
import { StyledSectionWrap, StyledTopWrap } from "../Common.styled";
import * as S from "./SharedPage.styled";
import ProfileImage from "../../components/Profile/Profile";

export default function SharedPage() {
  const [folder, setFolder] = useState();
  const { user } = useContext(UserContext);

  const handleLoad = async () => {
    const nextFolder = await getSharedList();
    setFolder(nextFolder);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <StyledTopWrap>
        <ProfileImage
          src={user?.profileImageSource}
          $size='m'
          user={user?.name}
          $flextype='column'
        />
        <S.StyledTitle>{folder?.name}</S.StyledTitle>
      </StyledTopWrap>
      <StyledSectionWrap>
        <Search />
        <S.StyledList>
          {folder?.links.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </S.StyledList>
      </StyledSectionWrap>
    </>
  );
}
