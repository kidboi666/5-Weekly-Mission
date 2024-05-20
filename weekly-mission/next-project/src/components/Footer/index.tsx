import React from "react";
import Link from "next/link";
import FooterIcons from "./FooterIcon";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footercontainer}>
      <div className={styles.footerbox}>
        <span className={styles.codeitlogo}>©codeit - 2023</span>
        <div className={styles.info}>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/faq">FAQ</Link>
        </div>
        <FooterIcons />
      </div>
    </footer>
  );
};

export default Footer;
