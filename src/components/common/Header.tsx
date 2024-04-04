import { Link } from "react-router-dom";
import {
  Email,
  HaderWrap,
  HeaderControl,
  HeaderInner,
  HeaderLogo,
  HeaderUserInfo,
} from "./headerStyle";
import { IHeaderUserLoginInfo, headerUserLoginInfo } from "../../constant/api";
import { Profile } from "../../styles/commonStyle";
import { useEffect, useState } from "react";
import Button from "./atoms/Button";
import LinkButton from "./atoms/LinkButton";
const logo = "/assets/logo/logo.svg";

function Header() {
  const [userInfo, setUserInfo] = useState<IHeaderUserLoginInfo>();
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
            <LinkButton $link={"/signin"} $linkClass={"link__gradient large"}>
              로그인
            </LinkButton>
          )}
        </HeaderControl>
      </HeaderInner>
    </HaderWrap>
  );
}
export default Header;
