import React, { useContext } from 'react';
import logoImg from '../../assets/images/logo.svg';
import { UserContext } from '../../contexts/UserContext';
import Profile from '../Profile/Profile';
import { Link, useLocation } from 'react-router-dom';
import * as S from './Header.styled';

export default function Header() {
  const { user } = useContext(UserContext);
  const location = useLocation();

  const $isSticky = location.pathname !== '/folder';

  return (
    <S.Header $isSticky={$isSticky}>
      <S.Inner>
        <S.Logo>
          <Link to='/'>
            <img src={logoImg} alt='linkbrary logo' />
          </Link>
        </S.Logo>
        {!user && <S.StyledButton link='/signin.html' text='로그인' />}
        {user && (
          <Profile user={user.email} src={user.image_source} $size='s' />
        )}
      </S.Inner>
    </S.Header>
  );
}
