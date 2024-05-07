import React from 'react';
import * as S from './Button.styled';

interface Props {
  text: string;
  className?: string;
  link?: string;
}

export default function Button({ text, className = '', link }: Props) {
  return (
    <>
      {link ? (
        <S.StyledLink to={link} className={className}>
          {text}
        </S.StyledLink>
      ) : (
        <S.Button className={className}>{text}</S.Button>
      )}
    </>
  );
}
