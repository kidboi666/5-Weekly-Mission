import Link from "next/link";
import { TEXT } from "./constant";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.wrapFooter}>
      <div className={styles.footerItems}>
        <span className={styles.footerCopyright}>{TEXT.codeit}</span>
        <div className={styles.footerLinks}>
          <Link href="/privacy">{TEXT.privacyPolicy}</Link>
          <Link href="/faq">{TEXT.faq}</Link>
        </div>
        <div className={styles.footerSns}>
          <Link
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="images/icon/facebook.svg" alt="facebook 로고" />
          </Link>
          <Link
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="images/icon/twitter.svg" alt="twitter 로고" />
          </Link>
          <Link
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="images/icon/youtube.svg" alt="youtube 로고" />
          </Link>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="images/icon/instagram.svg" alt="instagram 로고" />
          </Link>
        </div>
      </div>
    </footer>
  );
};
