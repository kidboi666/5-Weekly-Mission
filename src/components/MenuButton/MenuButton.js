import React from "react";
import * as S from "./MenuButton.styled";

export default function menuButton({ item }) {
  return <S.StyledButton>{item}</S.StyledButton>;
}
