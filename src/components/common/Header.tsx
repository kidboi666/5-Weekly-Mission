import { Link, NavLink } from "react-router-dom";
import {
  Email,
  HaderWrap,
  HeaderControl,
  HeaderInner,
  HeaderLogo,
  HeaderUserInfo,
} from "./headerStyle";
import { LinkGradient, Profile } from "../../styles/commonStyle";
const logo = "/assets/logo/logo.svg";

function Header() {
  return (
    <HaderWrap>
      <HeaderInner>
        <HeaderLogo className="head__logo">
          <Link to="/">
            <img src={logo} alt="linkbrary" />
          </Link>
        </HeaderLogo>
        <HeaderControl className="head__login__box">
          {/* <LinkGradient
            to="/signin.html"
            width={128}
            fontSize={18}
            lineHeight={52}
          >
            로그인
          </LinkGradient> */}
          <HeaderUserInfo>
            <Profile></Profile>
            <Email>Codeit@codeit.com</Email>
          </HeaderUserInfo>
        </HeaderControl>
      </HeaderInner>
    </HaderWrap>
  );
}
export default Header;
