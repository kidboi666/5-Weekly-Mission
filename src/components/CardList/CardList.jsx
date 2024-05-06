import React from 'react';
import * as S from './CardList.styled';
import Card from '../Card/Card';

export default function CardList({
  items,
  folderNames,
  itemCountsInEachFolder,
}) {
  return (
    <S.List>
      {items?.map((item) => (
        <Card
          key={item.id}
          item={item}
          folderNames={folderNames}
          itemCountsInEachFolder={itemCountsInEachFolder}
        />
      ))}
    </S.List>
  );
}
