import React from "react";
import styled from "styled-components";
const StyledFooter = styled.footer`
& {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 16rem;
    background-color: var(--black);
  }
  
  .footer-box {
    display: grid;
    justify-content: space-between;
    grid-template:
      "footer-links sns"
      ". ." 1fr
      "copyright .";
    width: 100%;
    padding: 3.2rem;
  
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      grid-template: "copyright footer-links sns";
      height: fit-content;
      max-width: 192rem;
      padding: 3.2rem 10.4rem 0;
    }
  }
  
  .copyright {
    grid-area: copyright;
    color: #676767;
    font-family: Arial;
    font-size: 1.6rem;
  }
  
  .footer-links {
    grid-area: footer-links;
    display: flex;
    column-gap: 3rem;
    padding-right: 1.8rem;
  }
  
  .footer-link {
    color: #cfcfcf;
    font-family: Arial;
    font-size: 1.6rem;
  }
  
  .sns {
    grid-area: sns;
    display: flex;
    column-gap: 1.2rem;
    height: 2rem;
  }
`

function Footer () {

    return (
    <StyledFooter>
        <div class="footer-box">
            <span class="copyright">©codeit - 2023</span>
            <div class="footer-links">
                <a class="footer-link" href="privacy.html">Privacy Policy</a>
                <a class="footer-link" href="faq.html">FAQ</a>
                </div>
                <div class="sns">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <img src="./images/facebook.svg" alt="facebook 홈페이지로 연결된 facebook 로고" />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    <img src="./images/twitter.svg" alt="twitter 홈페이지로 연결된 twitter 로고" />
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                    <img src="./images/youtube.svg" alt="youtube 홈페이지로 연결된 youtube 로고" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <img src="./images/instagram.svg" alt="instagram 홈페이지로 연결된 instagram 로고" />
                </a>
            </div>
        </div>
    </StyledFooter>
    );
}

export default Footer;