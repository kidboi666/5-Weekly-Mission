import { ROUTE } from "../../utill/constant";
import { TEXT } from "./constant";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-items">
        <span className="footer-copyright">{TEXT.codeit}</span>
        <div className="footer-links">
          <a className="footer-link" href={ROUTE.개인정보처리방침}>
            {TEXT.privacyPolicy}
          </a>
          <a className="footer-link" href={ROUTE.FAQ}>
            {TEXT.faq}
          </a>
        </div>
        <div className="footer-sns">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="images/icon/facebook.svg" alt="facebook 로고" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="images/icon/twitter.svg" alt="twitter 로고" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="images/icon/youtube.svg" alt="youtube 로고" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="images/icon/instagram.svg" alt="instagram 로고" />
          </a>
        </div>
      </div>
    </footer>
  );
};
