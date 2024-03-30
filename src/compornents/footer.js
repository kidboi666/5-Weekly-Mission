import React from 'react';
import facebookImg from '../imgs/facebook.svg';
import twitterImg from '../imgs/twiter.svg';
import youtubeImg from '../imgs/youtube.svg';
import instagramImg from '../imgs/instagram.svg';
import '../style/footer.css';

function Footer() {
    return (
        <>
            <footer>
                <div className="footer-container">
                    <div className="footer-content">
                        <p className="codeit">©codeit - 2023</p>
                        <div className="footer-menu">
                            <a href="/privacy.html">Privacy Policy</a>
                            <a href="/faq.html">FAQ</a>
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
        </>
    );
}

export default Footer;
