import React from "react";
import profileInit from "../../assets/profile_init.png";
import * as S from "./ProfileImage.styled";

export default function ProfileImage({ src, size = "s" }) {
  return (
    <S.StyledImg
      size={size}
      src={src ? src : profileInit}
      alt='프로필 이미지'
    />
  );
}
