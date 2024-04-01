import FacebookLogo from "../assets/facebook.svg";
import TwitterLogo from "../assets/twitter.svg";
import YoutubeLogo from "../assets/youtube.svg";
import InstagramLogo from "../assets/instagram.svg";

import "../components/Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <p className="footer-copyright">©codeit - 2023</p>
        <div className="footer-faq">
          <a>Privacy Policy</a>
          <a>FAQ</a>
        </div>
        <div className="footer-logos">
          <img src={FacebookLogo} alt="facebook-logo" />
          <img src={TwitterLogo} alt="twitter-logo" />
          <img src={YoutubeLogo} alt="youtube-logo" />
          <img src={InstagramLogo} alt="instagram-logo" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
