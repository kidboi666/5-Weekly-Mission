import Link from "next/link";
import {
  FootInner,
  FootNav,
  FootSign,
  FootSocial,
  FootWrap,
} from "./footerStyle";
import { imageSnsArr } from "@/src/constant/snsLink";
import { useRouter } from "next/router";
import { pageLayoutConfig, urlName } from "@/src/constant/layoutConfig";
import { useContext, useEffect } from "react";
import { LayoutContext } from "@/lib/LayoutContext";
import LinkButton from "./atoms/LinkButton";

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
          {imageSnsArr.map((sns) => (
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
