import { LINK, ROUTE } from "utils/constant";
import "./Footer.css";
import TEXT from "./constant";

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer-items">
        <span className="Footer-copyright">{TEXT.copyRight}</span>
        <div className="Footer-links">
          <a className="Footer-link" href={ROUTE.개인정보처리방침}>
            {TEXT.privacyPolicy}
          </a>
          <a className="Footer-link" href={ROUTE.FAQ}>
            {TEXT.faq}
          </a>
        </div>
        <div className="Footer-sns">
          <a href={LINK.facebook} rel="noopener noreferrer" target="_blank">
            <img
              src="images/facebook.svg"
              alt="페이스북 홈페이지로 연결된 로고"
            />
          </a>
          <a href={LINK.twitter} rel="noopener noreferrer" target="_blank">
            <img src="images/twitter.svg" alt="트위터 홈페이지로 연결된 로고" />
          </a>
          <a href={LINK.youtube} rel="noopener noreferrer" target="_blank">
            <img src="images/youtube.svg" alt="유투브 홈페이지로 연결된 로고" />
          </a>
          <a href={LINK.facebook} rel="noopener noreferrer" target="_blank">
            <img
              src="images/instagram.svg"
              alt="인스타그램 홈페이지로 연결된 로고"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
