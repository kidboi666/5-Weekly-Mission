import {
  BiLogoFacebookCircle,
  BiLogoTwitter,
  BiLogoYoutube,
  BiLogoInstagramAlt,
} from "react-icons/bi";

import styled from "styled-components";

const FooterContainer = styled.footer`
  footer {
    width: 100%;
    height: 160px;
    display: flex;
    justify-content: center;
    padding-top: 32px;
    background-color: #111322;
  }

  .footerbox {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    max-width: 1920px;
    padding: 0 104px;
  }

  .codeitlogo {
    font-family: "Acme";
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    color: #676767;
  }

  .info {
    display: flex;
    column-gap: 30px;
    padding-right: 18px;
  }

  .icons {
    display: flex;
    column-gap: 12px;
    height: 20px;
  }

  footer a {
    gap: 30px;
    font-family: "Acme";
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    text-decoration-line: none;
    color: #cfcfcf;
  }

  footer i {
    color: #ffffff;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <footer>
        <div className="footerbox">
          <span className="codeitlogo">©codeit - 2023</span>
          <div className="info">
            <a href="/privacy">Privacy Policy</a>
            <a href="/faq">FAQ</a>
          </div>
          <div className="icons">
            <a href="https://www.facebook.com/?locale=ko_KR" target="_blank">
              <BiLogoFacebookCircle />
            </a>
            <a href="https://twitter.com/?lang=ko" target="_blank">
              <BiLogoTwitter />
            </a>
            <a href="https://www.youtube.com/?gl=KR&hl=ko" target="_blank">
              <BiLogoYoutube />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <BiLogoInstagramAlt />
            </a>
          </div>
        </div>
      </footer>
    </FooterContainer>
  );
};

export default Footer;
