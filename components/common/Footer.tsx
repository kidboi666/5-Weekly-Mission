import Link from "next/link";
import {
  FootInner,
  FootNav,
  FootSign,
  FootSocial,
  FootWrap,
} from "./footerStyle";
import { useRouter } from "next/router";
import { pageLayoutConfig, urlName } from "@/src/constant/layoutConfig";
import { useContext, useEffect } from "react";
import { LayoutContext } from "@/lib/LayoutContext";
import LinkButton from "./atoms/LinkButton";

export const snsIconSrc = [
  {
    id: "Facebook",
    src: "/assets/icon/icons_face.svg",
    link: "https://www.facebook.com/?locale=ko_KR",
  },
  {
    id: "Twitter",
    src: "/assets/icon/icons_twt.svg",
    link: "https://twitter.com/?lang=ko",
  },
  {
    id: "YouTube",
    src: "/assets/icon/icons_you.svg",
    link: "https://www.youtube.com/",
  },
  {
    id: "Instagram",
    src: "/assets/icon/icons_ins.svg",
    link: "https://www.instagram.com/",
  },
];

function Footer() {
  const { pathname } = useRouter();
  const results: urlName = pathname.split('/')[1];
  const layoutConfig = pageLayoutConfig[results] || { footer: true };
  const {headerShow, setHeaderShow} = useContext(LayoutContext)
  
  useEffect(()=>{
    if (setHeaderShow) {
      setHeaderShow(layoutConfig.footer);
    }
  },[pathname])
  if(!headerShow) return null;
  
  return (
    <FootWrap className="foot__main">
      <FootInner className="foot__inner">
        <FootSign className="foot__sign">
          <Link href="https://www.codeit.kr/" target="_blank">
            ©codeit - 2024
          </Link>
        </FootSign>

        <FootNav className="d__flex foot__nav">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/faq">FAQ</Link>
        </FootNav>

        <FootSocial className="d__flex foot__btn__sns">
          {snsIconSrc.map((sns) => (
            <LinkButton key={sns.id} $link={sns.link} $linkClass={`link--social-emoji`}>
              <img src={sns.src} alt={sns.id} />
            </LinkButton>
          ))}
        </FootSocial>
      </FootInner>
    </FootWrap>
  );
}
export default Footer;
