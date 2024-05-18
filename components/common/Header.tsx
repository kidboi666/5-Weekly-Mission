import { useContext, useEffect, useState } from 'react';
import { Email, HeaderControl, HeaderInner, HeaderLogo, HeaderWrap } from './headerStyle';
import { Profile } from '@/styles/commonStyle';
import { AuthContext } from '@/lib/auto.context';
import { joinInstance } from '@/lib/axios';
import LinkButton from './atoms/LinkButton';
import Button from './atoms/Button';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const logo = '/assets/logo/logo.svg';

export interface IHeaderUser {
  id: number;
  email: string;
  name?: string;
  image_source?: string;
  created_at?: string;
  auth_id: string;
}

const hidePages = ['/signin', '/signup'];
const noHeaderFixed = ['/folder'];

function Header() {
  const router = useRouter();
  const { pathname } = router;
  const { isLoggedIn, handleLogout } = useContext(AuthContext);
  const [isfixed, setIsFixed] = useState(true);
  const [hideHeader, setHideHeader] = useState(true);
  const [userInfo, setUserInfo] = useState<IHeaderUser | null>();

  const handleUserInfo = async () => {
    const res = await joinInstance.get(`/sample/user`);
    setUserInfo(JSON.parse(JSON.stringify(res.data)));
  };

  useEffect(() => {
    handleUserInfo();
    setHideHeader(hidePages.includes(pathname));
    setIsFixed(noHeaderFixed.includes(pathname));
  }, [pathname]);

  if (hideHeader) return null;

  return (
    <HeaderWrap
      className='head__wrap'
      $position={isfixed}>
      <HeaderInner>
        <HeaderLogo className='head__logo'>
          <Link href='/'>
            <Image
              src={logo}
              alt='linkbrary'
              width={133}
              height={25}
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
