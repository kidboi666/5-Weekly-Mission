// Footer.js
import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";
import instagram from "../../assets/instagram.svg";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <span className={styles.footer_codeit}>©codeit - 2024</span>
            <div className={styles.footer_center_div}>
                <Link to='/privacy' className={styles.footer_txt}>
                    Privacy Policy
                </Link>
                <Link to='/faq' className={styles.footer_txt}>
                    FAQ
                </Link>
            </div>
            <div className={styles.footer_icon_div}>
                <Link target='_blank' to='https://www.facebook.com/'>
                    <img src={facebook} width='20' height='20' alt='facebook' />
                </Link>
                <Link target='_blank' to='https://www.twitter.com/'>
                    <img src={twitter} width='20' height='20' alt='twitter' />
                </Link>
                <Link target='_blank' to='https://www.youtube.com/'>
                    <img src={youtube} width='20' height='20' alt='youtube' />
                </Link>
                <Link target='_blank' to='https://www.instagram.com/'>
                    <img src={instagram} width='20' height='20' alt='instagram' />
                </Link>
            </div>
        </footer>
    );
}

export default Footer;
