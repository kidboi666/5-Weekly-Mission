import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Button.styled';

export default function Button({ text, className = '', link }) {
  return (
    <S.StyledButton className={className}>
      {link ? <Link to={link}>{text}</Link> : <span>{text}</span>}
    </S.StyledButton>
  );
}
