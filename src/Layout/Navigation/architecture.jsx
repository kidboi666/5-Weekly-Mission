import React from "react";
import LogoImgSrc from "./imgSrc/Linkbrary.svg";
import { ButtonLabel } from "components/button";
import { NavTemplate, ContentsFrame, Logo, LoginButton } from "./design";
import { Profile } from "./ui";

export const Navigation = function ({ profile, position }) {
  return (
    <NavTemplate position={position}>
      <ContentsFrame>
        <Logo href="/">
          <img src={LogoImgSrc} />
        </Logo>
        {profile ? (
          <Profile profile={profile} />
        ) : (
          <LoginButton href="/login" as="a">
            <ButtonLabel>로그인</ButtonLabel>
          </LoginButton>
        )}
      </ContentsFrame>
    </NavTemplate>
  );
};
