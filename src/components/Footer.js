import "./Footer.css";
import facebook from "../assets/svg/akar-icons_facebook-fill.svg";
import twitter from "../assets/svg/akar-icons_twitter-fill.svg";
import youtube from "../assets/svg/akar-icons_youtube-fill.svg";
import instagram from "../assets/svg/ant-design_instagram-filled.svg";

function Footer() {
  return (
    <footer>
      <div className="footerWrap">
        <div className="footerContent">
          <div className="footerHistory">©codeit - 2023</div>
          <div className="footerSupportLink">
            <a href="/privacy">Privacy Policy</a>
            <a href="/faq">FAQ</a>
          </div>
          <div className="footerSnsLink">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="페이스북 바로가기" />
            </a>
            <a
              href="https://twitter.com/?lang=ko"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="트위터 바로가기" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtube} alt="유튜브 바로가기" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="인스타그램 바로가기" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
import { ROUTE } from "util/constant";
import "./Footer.css";
import { TEXT } from "./constant";

export const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-items">
        <span className="Footer-copyright">{TEXT.codeit}</span>
        <div className="Footer-links">
          <a className="Footer-link" href={ROUTE.개인정보처리방침}>
            {TEXT.privacyPolicy}
          </a>
          <a className="Footer-link" href={ROUTE.FAQ}>
            {TEXT.faq}
          </a>
        </div>
        <div className="Footer-sns">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="images/facebook.svg"
              alt="facebook 홈페이지로 연결된 facebook 로고"
            />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="images/twitter.svg"
              alt="twitter 홈페이지로 연결된 twitter 로고"
            />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="images/youtube.svg"
              alt="youtube 홈페이지로 연결된 youtube 로고"
            />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="images/instagram.svg"
              alt="instagram 홈페이지로 연결된 instagram 로고"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
