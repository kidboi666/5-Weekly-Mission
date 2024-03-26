import facebookLogo from '../../assets/images/facebook_logo.svg';
import twitterLogo from '../../assets/images/twitter_logo.svg';
import youtubeLogo from '../../assets/images/youtube_logo.svg';
import instagramLogo from '../../assets/images/instagram_logo.svg';
import './Footer.css';
export default function Footer() {
  return (
    <footer className='main-footer'>
      <div className='footer-bar'>
        <div className='copyright'>©codeit - 2023</div>
        <div className='policy-bar'>
          <a href='#' className='footer-link'>
            Privacy Policy
          </a>
          <a href='#' className='footer-link'>
            FAQ
          </a>
        </div>
        <div className='info-link-bar'>
          <ul>
            <li>
              <a href='#' target='_blank' rel='noreferrer noopener'>
                <img src={facebookLogo} alt='Facebook link logo' />
              </a>
            </li>
            <li>
              <a href='#' target='_blank' rel='noreferrer noopener'>
                <img src={twitterLogo} alt='Twitter link logo' />
              </a>
            </li>
            <li>
              <a href='#' target='_blank' rel='noreferrer noopener'>
                <img src={youtubeLogo} alt='Youtube link logo' />
              </a>
            </li>
            <li>
              <a href='#' target='_blank' rel='noreferrer noopener'>
                <img src={instagramLogo} alt='Instagram link logo' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
