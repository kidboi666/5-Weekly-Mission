import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import { Email, HeaderControl, HeaderInner, HeaderLogo, HeaderUserInfo, HeaderWrap } from "./headerStyle";
import { useRouter } from "next/router";
import { Profile } from "@/styles/commonStyle";
import LinkButton from "./atoms/LinkButton";
import Link from "next/link";
import Image from "next/image";

const logo = '/assets/logo/logo.svg';

export interface IHeaderUser {
  id:number,
  email:string,
  name?:string,
  image_source?:string,
  created_at?:string,
  auth_id:string
}

export interface IHeaderUserLoginInfoApi {
  userInfo?: {
    data: IHeaderUser[];
  };
}

export async function getStaticProps() {
  const res = await axios.get(``);
  const userInfo = res.data;

  return {
    props:{
      userInfo,
    }
  }
}

function Header({userInfo}:IHeaderUserLoginInfoApi) {
  const {pathname} = useRouter();
  const [fixed, setFixed] = useState(true);

  useEffect(() => {
    if (pathname === '/folder') {
      setFixed(false);
    }
  }, [pathname]);

  return (
    <HeaderWrap className="head__wrap" $position={fixed}>
      <HeaderInner>
        <HeaderLogo className="head__logo">
          <Link href="/">
            <img src={logo} alt="linkbrary" />
          </Link>
        </HeaderLogo>
        <HeaderControl className="head__login__box">
          {userInfo ? (
            <HeaderUserInfo>
              <Profile></Profile>
              <Email>{userInfo?.data[0].email}</Email>
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
