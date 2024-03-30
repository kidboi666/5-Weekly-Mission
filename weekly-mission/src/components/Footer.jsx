import {
  BiLogoFacebookCircle,
  BiLogoTwitter,
  BiLogoYoutube,
  BiLogoInstagramAlt,
} from "react-icons/bi";
import styled from "styled-components";

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
`;

const Icons = styled.div`
  display: flex;
  column-gap: 12px;
  height: 20px;
`;

const StyledLink = styled.a`
  gap: 30px;
  font-family: "Acme";
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  text-decoration-line: none;
  color: #cfcfcf;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBox>
        <CodeitLogo>©codeit - 2023</CodeitLogo>
        <Info>
          <StyledLink href="/privacy">Privacy Policy</StyledLink>
          <StyledLink href="/faq">FAQ</StyledLink>
        </Info>
        <Icons>
          <StyledLink
            href="https://www.facebook.com/?locale=ko_KR"
            target="_blank"
          >
            <BiLogoFacebookCircle />
          </StyledLink>
          <StyledLink href="https://twitter.com/?lang=ko" target="_blank">
            <BiLogoTwitter />
          </StyledLink>
          <StyledLink
            href="https://www.youtube.com/?gl=KR&hl=ko"
            target="_blank"
          >
            <BiLogoYoutube />
          </StyledLink>
          <StyledLink href="https://www.instagram.com/" target="_blank">
            <BiLogoInstagramAlt />
          </StyledLink>
        </Icons>
      </FooterBox>
    </FooterContainer>
  );
};

export default Footer;
