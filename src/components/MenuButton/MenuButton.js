import React from "react";
import * as S from "./MenuButton.styled";

export default function menuButton({ item, onClick, value }) {
  return (
    <S.StyledButton value={value} onClick={onClick}>
      {item}
    </S.StyledButton>
  );
}
