import React from "react";
import LogoImgSrc from "./imgSrc/Linkbrary.svg";
import { ButtonLabel } from "components/button";
import { NavTemplate, ContentsFrame, Logo, LoginButton } from "./design";

export const Navigation = function () {
  return (
    <NavTemplate>
      <ContentsFrame>
        <Logo href="/">
          <img src={LogoImgSrc} />
        </Logo>
        <LoginButton href="/login" as="a">
          <ButtonLabel>로그인</ButtonLabel>
        </LoginButton>
      </ContentsFrame>
    </NavTemplate>
  );
};
