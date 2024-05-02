import { Link, useLocation } from 'react-router-dom';
import {
  Email,
  HeaderControl,
  HeaderInner,
  HeaderLogo,
  HeaderUserInfo,
  HeaderWrap,
} from './headerStyle';
import { Profile } from '../../styles/commonStyle';
import LinkButton from './atoms/LinkButton';
import useFetch from '../../hook/useFetch';
import { USERLOGINAPI } from '../../constant/api';
import { IHeaderUserLoginInfoApi } from './interface';
import { useEffect, useState } from 'react';
const logo = '/assets/logo/logo.svg';

function Header() {
  const { pathname } = useLocation();
  const { value } = useFetch<IHeaderUserLoginInfoApi>(USERLOGINAPI);
  const [fixed, setFixed] = useState(true);
  useEffect(() => {
    if (pathname === '/folder') {
      setFixed(false);
    }
  }, [pathname]);
  const userInfo = value?.data[0] ?? undefined;
  return (
    <HeaderWrap className="head__wrap" $position={fixed}>
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
            <LinkButton $link={'/signin'} $linkClass={'link--gradient large'}>
              로그인
            </LinkButton>
          )}
        </HeaderControl>
      </HeaderInner>
    </HeaderWrap>
  );
}
export default Header;
