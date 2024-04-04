import { Link } from "react-router-dom";
import styled from "styled-components";
import FooterIcons from "./FooterIcon";

const FooterContainer = styled.footer`
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: center;
  padding-top: 32px;
  background-color: #111322;
`;

const FooterBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  max-width: 1920px;
  padding: 0 104px;

  @media (max-width: 769px) {
    padding: 32px 32px;
  }
`;

const CodeitLogo = styled.span`
  font-family: "Acme";
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  color: #676767;
`;

const Info = styled.div`
  display: flex;
  column-gap: 30px;
  padding-right: 18px;
  color: #676767;

  a {
    font-family: "Acme";
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    text-decoration-line: none;
    color: #cfcfcf;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBox>
        <CodeitLogo>©codeit - 2023</CodeitLogo>
        <Info>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/faq">FAQ</Link>
        </Info>
        <FooterIcons />
      </FooterBox>
    </FooterContainer>
  );
};

export default Footer;
