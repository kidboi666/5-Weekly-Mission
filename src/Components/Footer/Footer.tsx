// Footer.js
import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";

function Footer() {
    return (
        <footer className={styles.footer}>
            <span className={`${styles.footer_codeit} span`}>©codeit - 2024</span>
            <div className={styles.footer_center_div}>
                <Link href='/privacy' className={styles.footer_txt}>
                    Privacy Policy
                </Link>
                <Link href='/faq' className={styles.footer_txt}>
                    FAQ
                </Link>
            </div>
            <div className={styles.footer_icon_div}>
                <Link target='_blank' href='https://www.facebook.com/'>
                    <Image src='/assets/facebook.svg' width={20} height={20} alt='facebook' />
                </Link>
                <Link target='_blank' href='https://www.twitter.com/'>
                    <Image src='/assets/twitter.svg' width={20} height={20} alt='twitter' />
                </Link>
                <Link target='_blank' href='https://www.youtube.com/'>
                    <Image src='/assets/youtube.svg' width={20} height={20} alt='youtube' />
                </Link>
                <Link target='_blank' href='https://www.instagram.com/'>
                    <Image src='/assets/instagram.svg' width={20} height={20} alt='instagram' />
                </Link>
            </div>
        </footer>
    );
}

export default Footer;
