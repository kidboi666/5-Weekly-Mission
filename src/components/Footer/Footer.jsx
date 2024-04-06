import { Link } from "react-router-dom";
import { ROUTE } from "../../utill/constant";
import { TEXT } from "./constant";
import * as FooterLayout from "./Footer.style";

export const Footer = () => {
  return (
    <FooterLayout.FooterWrap>
      <FooterLayout.FooterItems>
        <FooterLayout.FooterCopyright>
          {TEXT.codeit}
        </FooterLayout.FooterCopyright>
        <FooterLayout.FooterLinks>
          <Link to={ROUTE.개인정보처리방침}>{TEXT.privacyPolicy}</Link>
          <Link to={ROUTE.FAQ}>{TEXT.faq}</Link>
        </FooterLayout.FooterLinks>
        <FooterLayout.FooterSns>
          <Link
            to="https://www.facebook.com/"
            target="blank"
            rel="noopener noreferrer"
          >
            <img src="images/icon/facebook.svg" alt="facebook 로고" />
          </Link>
          <Link
            to="https://twitter.com/"
            target="blank"
            rel="noopener noreferrer"
          >
            <img src="images/icon/twitter.svg" alt="twitter 로고" />
          </Link>
          <Link
            to="https://www.youtube.com/"
            target="blank"
            rel="noopener noreferrer"
          >
            <img src="images/icon/youtube.svg" alt="youtube 로고" />
          </Link>
          <Link
            to="https://www.instagram.com/"
            target="blank"
            rel="noopener noreferrer"
          >
            <img src="images/icon/instagram.svg" alt="instagram 로고" />
          </Link>
        </FooterLayout.FooterSns>
      </FooterLayout.FooterItems>
    </FooterLayout.FooterWrap>
  );
};
