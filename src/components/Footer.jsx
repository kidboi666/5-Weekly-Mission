import "./Footer.css";
import youtube from "../assets/youtube.svg";
import instagram from "../assets/insta.svg";
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook.svg";
import { FACEBOOK_URL, INSTAGRAM_URL, TWITTER_URL, YOUTUBE_URL } from "../api";

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='codeit-text'>
        <span>©codeit - 2023</span>
      </div>
      <div className='help'>
        <a href='privacy.html'>Privacy Policy</a>
        <a href='faq.html'>FAQ</a>
      </div>
      <div className='social'>
        <a href={FACEBOOK_URL} target='_blank' rel='noreferrer'>
          <img src={facebook} alt='facebook' />
        </a>
        <a href={TWITTER_URL} target='_blank' rel='noreferrer'>
          <img src={twitter} alt='twitter' />
        </a>
        <a href={YOUTUBE_URL} target='_blank' rel='noreferrer'>
          <img src={youtube} alt='youtube' />
        </a>
        <a href={INSTAGRAM_URL} target='_blank' rel='noreferrer'>
          <img src={instagram} alt='instagram' />
        </a>
      </div>
    </div>
  );
};
export default Footer;
