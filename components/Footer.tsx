import styles from "./Footer.module.css";
import facebook from "@/public/akar-icons_facebook-fill.svg";
import twitter from "@/public/akar-icons_twitter-fill.svg";
import youtube from "@/public/akar-icons_youtube-fill.svg";
import instagram from "@/public/ant-design_instagram-filled.svg";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrap}>
        <div className={styles.footer__content}>
          <div className={styles.footer__history}>©codeit - 2023</div>
          <div className={styles.footer__supportLink}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/faq">FAQ</Link>
          </div>
          <div className={styles.footer__snsLink}>
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={facebook} alt="페이스북 바로가기" />
            </Link>
            <Link
              href="https://twitter.com/?lang=ko"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={twitter} alt="트위터 바로가기" />
            </Link>
            <Link
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={youtube} alt="유튜브 바로가기" />
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={instagram} alt="인스타그램 바로가기" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
