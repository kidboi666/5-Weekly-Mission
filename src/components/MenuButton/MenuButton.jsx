import React, { useEffect, useState } from 'react';
import * as S from './MenuButton.styled';

export default function MenuButton({ folderName, onClick, currentFolder }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(folderName === currentFolder?.name);
  }, [currentFolder, folderName]);

  return (
    <S.Button $isActive={isActive} value={folderName} onClick={onClick}>
      {folderName}
    </S.Button>
  );
}
