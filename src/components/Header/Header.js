import React, { useContext } from "react";
import logoImg from "../../assets/logo.svg";
import { UserContext } from "../../contexts/UserContext";
import Profile from "../Profile/Profile";
import { Link } from "react-router-dom";
import * as S from "./Header.styled";

export default function Header() {
  const { user } = useContext(UserContext);
  return (
    <S.StyledHeader>
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
