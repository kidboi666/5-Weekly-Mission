import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";
import instagram from "../../assets/instagram.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer_container">
        <span className="footer_codeit">©codeit - 2024</span>
        <div className="footer_center_div">
          <p>Privacy Policy</p>
          <p>FAQ</p>
        </div>
        <div className="footer_icon_div">
          <a href="https://facebook.com/">
            <img src={facebook} width="20" height="20" alt="페이스북 아이콘" />
          </a>
          <a href="https://twitter.com/">
            <img src={twitter} width="20" height="20" alt="트위터 아이콘" />
          </a>
          <a href="https://youtube.com/">
            <img src={youtube} width="20" height="20" alt="유튜브 아이콘" />
          </a>
          <a href="https://instagram.com/">
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
