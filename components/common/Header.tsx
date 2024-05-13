import { useState } from "react";
import useFetch from "@/src/hook/useFetch";
import { IHeaderUserLoginInfoApi } from "./interface";
import { BASE_URL } from "@/src/constant/api";
import { Email, HeaderControl, HeaderInner, HeaderLogo, HeaderUserInfo, HeaderWrap } from "./headerStyle";
import Link from "next/link";
import { Profile } from "@/styles/commonStyle";
import LinkButton from "./atoms/LinkButton";

const logo = '/assets/logo/logo.svg';

function Header() {
  // const { pathname } = useLocation();
  const { value } = useFetch<IHeaderUserLoginInfoApi>(BASE_URL);
  const [fixed, setFixed] = useState(true);
  // useEffect(() => {
  //   if (pathname === '/folder') {
  //     setFixed(false);
  //   }
  // }, [pathname]);
  const userInfo = value?.data[0] ?? undefined;
  return (
    <HeaderWrap className="head__wrap" $position={fixed}>
      <HeaderInner>
        <HeaderLogo>
          <Link href="/">
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
            <LinkButton $link={'/signin'} $linkClass={'link--gradient link--login large'}>
              로그인
            </LinkButton>
          )}
        </HeaderControl>
      </HeaderInner>
    </HeaderWrap>
  );
}
export default Header;
