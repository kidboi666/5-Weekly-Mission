import { Link } from "react-router-dom";
import {
  Email,
  HaderWrap,
  HeaderControl,
  HeaderInner,
  HeaderLogo,
  HeaderUserInfo,
} from "./headerStyle";
import { Profile } from "../../styles/commonStyle";
import LinkButton from "./atoms/LinkButton";
import useFetch from "../../hook/useFetch";
import { USERLOGINAPI } from "../../constant/api";
import { IHeaderUserLoginInfoApi } from "../../constant/interface";
const logo = "/assets/logo/logo.svg";

function Header() {
  const { value: userInfo } = useFetch<IHeaderUserLoginInfoApi>(USERLOGINAPI);

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
