import fbImg from "../../assets/icon/svg/akar-icons_facebook-fill.svg";
import twImg from "../../assets/icon/svg/akar-icons_twitter-fill.svg";
import ytImg from "../../assets/icon/svg/akar-icons_youtube-fill.svg";
import igImg from "../../assets/icon/svg/ant-design_instagram-filled.svg";
import styles from "@/src/components/Footer/Footer.module.css";
import Image from "next/image";

const footerDatas = [
  {
    imgUrl: fbImg,
    alt: "페이스북 바로가기 새창열림",
    link: "https://www.facebook.com/",
  },
  {
    imgUrl: twImg,
    alt: "트위터 바로가기 새창열림",
    link: "https://www.twitter.com/",
  },
  {
    imgUrl: ytImg,
    alt: "유투브 바로가기 새창열림",
    link: "https://www.youtube.com/",
  },
  {
    imgUrl: igImg,
    alt: "인스타그램 바로가기 새창열림",
    link: "https://www.instagram.com/",
  },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copy}>©codeit - 2023</div>
      <ul className={`${styles.menu} flexBox`}>
        <li>
          <a href="./html/privacy.html">Privacy Policy</a>
        </li>
        <li>
          <a href="./html/faq.html">FAQ</a>
        </li>
      </ul>
      <ul className={`${styles.snsMenu} flexBox`}>
        {footerDatas.map(({ imgUrl, alt, link }) => {
          return (
            <li key={link}>
              <a href={link} target="_blank">
                <Image src={imgUrl} alt={alt} />
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}

export default Footer;
