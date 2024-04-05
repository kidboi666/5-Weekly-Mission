import React, { useContext } from "react";
import logoImg from "../../assets/logo.svg";
import { UserContext } from "../../contexts/UserContext";
import Profile from "../Profile/Profile";
import { Link, useLocation } from "react-router-dom";
import * as S from "./Header.styled";

export default function Header() {
  const { user } = useContext(UserContext);
  const location = useLocation();

  const $isSticky = location.pathname !== "/folder";

  return (
    <S.StyledHeader $isSticky={$isSticky}>
      <S.StyledInner>
        <S.StyledLogo>
          <Link to='/'>
            <img src={logoImg} alt='linkbrary logo' />
          </Link>
        </S.StyledLogo>
        {!user && <S.StyledButton link='/signin.html' text='로그인' />}
        {user && (
          <Profile user={user.email} src={user.profileImageSource} $size='s' />
        )}
      </S.StyledInner>
    </S.StyledHeader>
  );
}
