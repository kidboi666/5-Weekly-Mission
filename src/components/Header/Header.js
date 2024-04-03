import React, { useContext } from "react";
import logoImg from "../../assets/logo.svg";
import { UserContext } from "../../contexts/UserContext";
import ProfileImage from "../ProfileImage/ProfileImage";
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
          <S.StyledProfileWrap>
            <ProfileImage src={user.profileImageSource} size='s' />
            <S.StyledProfileText>{user.email}</S.StyledProfileText>
          </S.StyledProfileWrap>
        )}
      </S.StyledInner>
    </S.StyledHeader>
  );
}
