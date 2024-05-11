import Link from "next/link";
import {
  BiLogoFacebookCircle,
  BiLogoTwitter,
  BiLogoYoutube,
  BiLogoInstagramAlt,
} from "react-icons/bi";
import styles from "./FooterIcon.module.css";

const FooterIcons = () => {
  return (
    <div className={styles.footericons}>
      <Link href="https://www.facebook.com/?locale=ko_KR" target="_blank">
        <BiLogoFacebookCircle />
      </Link>
      <Link href="https://twitter.com/?lang=ko" target="_blank">
        <BiLogoTwitter />
      </Link>
      <Link href="https://www.youtube.com/?gl=KR&hl=ko" target="_blank">
        <BiLogoYoutube />
      </Link>
      <Link href="https://www.instagram.com/" target="_blank">
        <BiLogoInstagramAlt />
      </Link>
    </div>
  );
};

export default FooterIcons;
