import { Link } from "react-router-dom";
import SocialLinkButton from "./SocialLinkButton";
import {
  FootInner,
  FootNav,
  FootSign,
  FootSocial,
  FootWrap,
} from "./footerStyle";
export interface IImageSnsArr {
  id: string;
  src: string;
  link: string;
}
const imageSnsArr: IImageSnsArr[] = [
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
  return (
    <FootWrap className="foot__main">
      <FootInner className="foot__inner">
        <FootSign className="foot__sign">
          <Link to="https://www.codeit.kr/" target="_blank">
            ©codeit - 2023
          </Link>
        </FootSign>

        <FootNav className="d__flex foot__nav">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/faq">FAQ</Link>
        </FootNav>

        <FootSocial className="d__flex foot__btn__sns">
          {imageSnsArr.map((sns) => (
            <SocialLinkButton key={sns.id} {...sns} />
          ))}
        </FootSocial>
      </FootInner>
    </FootWrap>
  );
}
export default Footer;
