import facebookLogo from '../../assets/images/facebook_logo.svg';
import twitterLogo from '../../assets/images/twitter_logo.svg';
import youtubeLogo from '../../assets/images/youtube_logo.svg';
import instagramLogo from '../../assets/images/instagram_logo.svg';
import './Footer.css';

const STYLE_MAIN_FOOTER_CLASS_NAME = 'main-footer';
const STYLE_FOOTER_BAR_CLASS_NAME = 'footer-bar';
const STYLE_COPYRIGHT_CLASS_NAME = 'copyright';
const STYLE_POLICY_BAR_CLASS_NAME = 'policy-bar';
const STYLE_FOOTER_LINK_CLASS_NAME = 'footer-link';
const STYLE_INFO_LINK_BAR_CLASS_NAME = 'info-link-bar';

export default function Footer() {
  return (
    <footer className={STYLE_MAIN_FOOTER_CLASS_NAME}>
      <div className={STYLE_FOOTER_BAR_CLASS_NAME}>
        <div className={STYLE_COPYRIGHT_CLASS_NAME}>©codeit - 2023</div>
        <div className={STYLE_POLICY_BAR_CLASS_NAME}>
          <a href="/" className={STYLE_FOOTER_LINK_CLASS_NAME}>
            Privacy Policy
          </a>
          <a href="/" className={STYLE_FOOTER_LINK_CLASS_NAME}>
            FAQ
          </a>
        </div>
        <div className={STYLE_INFO_LINK_BAR_CLASS_NAME}>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={facebookLogo} alt="Facebook link logo" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={twitterLogo} alt="Twitter link logo" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={youtubeLogo} alt="Youtube link logo" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={instagramLogo} alt="Instagram link logo" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
