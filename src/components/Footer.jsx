import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-items">
        <span className="footer-codeit">"©codeit - 2023"</span>
        <div className="footer-links">
          <a className="footer-link" href="/privacy">
            Privacy Policy
          </a>
          <a className="footer-link" href="/faq">
            FAQ
          </a>
        </div>
        <div className="footer-sns-logo">
          <a href="https://www.facebook.com/">
            <img src="/images/facebook.png" alt="facebook 로고" />
          </a>
          <a href="https://twitter.com/">
            <img src="/images/twitter.png" alt="twitter 로고" />
          </a>
          <a href="https://www.youtube.com/">
            <img src="/images/youtube.png" alt="youtube 로고" />
          </a>
          <a href="https://www.instagram.com/">
            <img src="/images/instagram.png" alt="instagram 로고" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
