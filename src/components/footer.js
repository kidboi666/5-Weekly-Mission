import React from 'react';
import facebookImg from '../assets/facebook.svg';
import twitterImg from '../assets/twiter.svg';
import youtubeImg from '../assets/youtube.svg';
import instagramImg from '../assets/instagram.svg';
import '../styles/footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    const LinkStyle = {
        textDecoration: 'none',
    };
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-content">
                    <p className="footer-codeit">©codeit - 2023</p>
                    <div className="footer-menu">
                        <Link to="privacy" style={LinkStyle}>
                            <p>Privacy Policy</p>
                        </Link>
                        <Link to="/faq" style={LinkStyle}>
                            <p>FAQ</p>
                        </Link>
                    </div>
                    <div className="footer-icon">
                        <a href="https://www.facebook.com/" target="_blank">
                            <img src={facebookImg} alt="facebook" />
                        </a>
                        <a href="https://twitter.com/" target="_blank">
                            <img src={twitterImg} alt="twitter" />
                        </a>
                        <a href="https://youtube.com" target="_blank">
                            <img src={youtubeImg} alt="youtube" />
                        </a>
                        <a href="https://instagram.com" target="_blank">
                            <img src={instagramImg} alt="instagram" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
