import React, { ButtonHTMLAttributes, useEffect, useState } from 'react';
import * as S from './MenuButton.styled';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  folderName: string;
  currentFolder: {
    name: string;
  };
}

export default function MenuButton({
  folderName,
  onClick,
  currentFolder,
}: Props) {
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
