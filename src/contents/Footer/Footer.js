import "./Footer.css";
import facebookLogo from "../../images/facebook.svg";
import twitterLogo from "../../images/twitter.svg";
import youtubeLogo from "../../images/youtube.svg";
import instagramLogo from "../../images/instagram.svg";

function Footer() {
  <div className="footer">
    <div className="footerBox">
      <span className="copyright">©codeit - 2023</span>
      <div className="footerLinks">
        <p className="footerLink">Privacy</p>
        <p className="footerLink">FAQ</p>
      </div>
      <div className="sns">
        <img
          src={facebookLogo}
          alt="facebook 홈페이지로 연결된 facebook 로고"
          className="logoImage"
        />
        <img
          src={twitterLogo}
          alt="twitter 홈페이지로 연결된 twitter 로고"
          className="logoImage"
        />
        <img
          src={youtubeLogo}
          alt="youtube 홈페이지로 연결된 youtube 로고"
          className="logoImage"
        />
        <img
          src={instagramLogo}
          alt="instagram 홈페이지로 연결된 instagram 로고"
          className="logoImage"
        />
      </div>
    </div>
  </div>;
}

export default Footer;
