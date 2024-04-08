import React from "react";
import profileInit from "../../assets/profile_init.png";
import * as S from "./Profile.styled";

export default function Profile({ user, src, $size = "s", $flextype = "row" }) {
  return (
    <S.StyledWrap $flextype={$flextype}>
      <S.StyledImg
        $size={$size}
        src={src ? src : profileInit}
        alt='프로필 이미지'
      />
      <S.StyledText $flextype={$flextype}>{user}</S.StyledText>
    </S.StyledWrap>
  );
}
