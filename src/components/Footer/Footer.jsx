/* eslint-disable jsx-a11y/anchor-is-valid */

import "../Footer/Footer.css";
import footerLogoList from "./constant";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <p className="footer-copyright">©codeit - 2023</p>
        <div className="footer-faq">
          <a>Privacy Policy</a>
          <a>FAQ</a>
        </div>
        <div className="footer-logos">
          {footerLogoList.map((item) => (
            <a
              href={item.link}
              rel="noreferrer"
              target="_blank"
              key={item.name}
            >
              <img src={item.url} alt={item.name} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
