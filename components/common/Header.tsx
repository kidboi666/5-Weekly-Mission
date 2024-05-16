import { useContext, useEffect, useState } from 'react';
import { joinInstance } from '@/lib/axios';
import { Email, HeaderControl, HeaderInner, HeaderLogo, HeaderWrap } from './headerStyle';
import { useRouter } from 'next/router';
import { Profile } from '@/styles/commonStyle';
import LinkButton from './atoms/LinkButton';
import Link from 'next/link';
import { LayoutContext } from '@/lib/LayoutContext';
import { pageLayoutConfig, urlName } from '@/src/constant/layoutConfig';
import Button from './atoms/Button';

const logo = '/assets/logo/logo.svg';

export interface IHeaderUser {
  id: number;
  email: string;
  name?: string;
  image_source?: string;
  created_at?: string;
  auth_id: string;
}

function Header() {
  const router = useRouter();
  const { pathname } = router;
  const results: urlName = pathname.split('/')[1];
  const layoutConfig = pageLayoutConfig[results] || { header: true };
  const { headerShow, setHeaderShow, isLoggedIn, setIsLoggedIn } = useContext(LayoutContext);
  const [fixed, setFixed] = useState(true);
  const [userInfo, setUserInfo] = useState<IHeaderUser | null>();

  const handleUserinfo = async () => {
    const res = await joinInstance.get(`/sample/user`);
    setUserInfo(JSON.parse(JSON.stringify(res.data)));
  };

  const handleLogout = () => {
    localStorage.removeItem('linkbrary');
    if (setIsLoggedIn) setIsLoggedIn(false);
    router.push('/');
  };

  useEffect(() => {
    // 유저정보
    handleUserinfo();
    if (setIsLoggedIn) {
      if (localStorage.getItem('linkbrary')) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    }
  }, []);

  useEffect(() => {
    // 페이지 컴포넌트 유무
    if (setHeaderShow) {
      setHeaderShow(layoutConfig.header);
    }
  }, [pathname]);

  if (!headerShow) return null;
  return (
    <HeaderWrap
      className='head__wrap'
      $position={fixed}>
      <HeaderInner>
        <HeaderLogo className='head__logo'>
          <Link href='/'>
            <img
              src={logo}
              alt='linkbrary'
            />
          </Link>
        </HeaderLogo>
        <HeaderControl className='head__login__box'>
          {isLoggedIn ? (
            <Button onclick={handleLogout}>
              <Profile></Profile>
              <Email>{userInfo?.email}</Email>
            </Button>
          ) : (
            <LinkButton
              $link={'/login'}
              $linkClass={'link--gradient link--login large'}>
              로그인
            </LinkButton>
          )}
        </HeaderControl>
      </HeaderInner>
    </HeaderWrap>
  );
}
export default Header;
