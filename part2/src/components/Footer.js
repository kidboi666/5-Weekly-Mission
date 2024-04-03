import "./Footer.css";
import SnsButton from "./SnsButton";

function Footer() {
  return (
    <footer>
      <div className="info">
        <div className="license">©codeit - 2023</div>
        <div className="privacy">
          <button>Privacy Policy</button>
          <button>FAQ</button>
        </div>
        <div className="sns">
          <SnsButton icon="facebook" />
          <SnsButton icon="twitter" />
          <SnsButton icon="youtube" />
          <SnsButton icon="instagram" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
