import React from "react";
import * as S from "./CardList.styled";
import Card from "../Card/Card";

export default function CardList({ items }) {
  return (
    <S.StyledList>
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </S.StyledList>
  );
}
