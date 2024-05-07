import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Button.styled';

interface Props {
  text: string;
  className?: string;
  link?: string;
}

export default function Button({ text, className = '', link }: Props) {
  return (
    <S.Button className={className}>
      {link ? <Link to={link}>{text}</Link> : <span>{text}</span>}
    </S.Button>
  );
}
