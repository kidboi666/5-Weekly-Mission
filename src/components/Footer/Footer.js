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
