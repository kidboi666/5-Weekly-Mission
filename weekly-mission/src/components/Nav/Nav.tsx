import React from "react";
import { Link } from "react-router-dom";
import LinkbraryImage from "../../../image/Linkbrary.png";
import profileImage from "../../../image/profileimg.jpg";
import * as S from "./Nav.styled";
import useProfileData from "../../hooks/useProfileData";

const Nav = () => {
  const { data, isLoading } = useProfileData();

  return (
    <S.NavContainer>
      <S.Gnb>
        <S.GnbLogo href="index.html">
          <img src={LinkbraryImage} alt="Linkbrary Logo" />
        </S.GnbLogo>
        {data ? (
          <S.ProfileInfo>
            <img
              className="profile-image"
              src={profileImage}
              alt="프로필 이미지"
            />
            <span className="email">{data.email}</span>
          </S.ProfileInfo>
        ) : (
          <Link to="../../signin/signin.html">
            <S.GnbButton>로그인</S.GnbButton>
          </Link>
        )}
      </S.Gnb>
    </S.NavContainer>
  );
};

export default Nav;
