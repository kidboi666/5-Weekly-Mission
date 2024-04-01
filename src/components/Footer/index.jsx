import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";
import instagram from "../../assets/instagram.svg";
import styles from "./index.module.css";

function Footer() {
  return (
    <footer>
      <div className={styles.footer_container}>
        <span className={styles.footer_codeit}>©codeit - 2024</span>
        <div className={styles.footer_center_div}>
          <p>Privacy Policy</p>
          <p>FAQ</p>
        </div>
        <div className={styles.footer_icon_div}>
          <a href="https://facebook.com/" target="_blank">
            <img src={facebook} width="20" height="20" alt="페이스북 아이콘" />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitter} width="20" height="20" alt="트위터 아이콘" />
          </a>
          <a href="https://youtube.com/" target="_blank">
            <img src={youtube} width="20" height="20" alt="유튜브 아이콘" />
          </a>
          <a href="https://instagram.com/" target="_blank">
            <img
              src={instagram}
              width="20"
              height="20"
              alt="인스타그램 아이콘"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
