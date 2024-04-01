import { Link } from "react-router-dom";
import {
  Email,
  HaderWrap,
  HeaderControl,
  HeaderInner,
  HeaderLogo,
  HeaderUserInfo,
} from "./headerStyle";
import { IheaderUserLoginInfo, headerUserLoginInfo } from "../../constant/api";
import { LinkGradient, Profile } from "../../styles/commonStyle";
import { useEffect, useState } from "react";
const logo = "/assets/logo/logo.svg";

function Header() {
  const [userInfo, setUserInfo] = useState<IheaderUserLoginInfo>();
  useEffect(() => {
    // 유저정보 받아오기
    (async () => {
      try {
        const data = await headerUserLoginInfo();
        setUserInfo(data);
      } catch (e) {
        console.error("유저 정보를 가지고 올수 없습니다.", e);
      }
    })();
  }, []);
  return (
    <HaderWrap>
      <HeaderInner>
        <HeaderLogo className="head__logo">
          <Link to="/">
            <img src={logo} alt="linkbrary" />
          </Link>
        </HeaderLogo>
        <HeaderControl className="head__login__box">
          {userInfo ? (
            <HeaderUserInfo>
              <Profile></Profile>
              <Email>{userInfo?.email}</Email>
            </HeaderUserInfo>
          ) : (
            <LinkGradient
              to="/signin.html"
              width={128}
              fontSize={18}
              height={52}
            >
              로그인
            </LinkGradient>
          )}
        </HeaderControl>
      </HeaderInner>
    </HaderWrap>
  );
}
export default Header;
