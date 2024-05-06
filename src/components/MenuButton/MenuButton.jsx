import React, { useEffect, useState } from 'react';
import * as S from './MenuButton.styled';

export default function MenuButton({ item, onClick, value, currentFolder }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(value === currentFolder?.name);
  }, [currentFolder, value]);

  return (
    <S.Button $isActive={isActive} value={value} onClick={onClick}>
      {item}
    </S.Button>
  );
}
