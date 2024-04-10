import { styled } from "styled-components";
import facebookIcon from "../assets/facebookIcon.svg";
import twitterIcon from "../assets/twitterIcon.svg";
import youtubeIcon from "../assets/youtubeIcon.svg";
import instagramIcon from "../assets/instagramIcon.svg";

export const Footer = () => {
  return (
    <Container>
      <FooterCompany>@codeit - 2023</FooterCompany>
      <Support>
        <a href="https://www.privacy Policy">Privacy Policy</a>
        <a href="https://www.faq">FAQ</a>
      </Support>
      <SocialIcon>
        <a href="https://www.facebook.com/?locale=ko_KR" target="_blank" rel="noreferrer">
          <img src={facebookIcon} alt="facebook" />
        </a>
        <a href="https://twitter.com/?lang=ko" target="_blank" rel="noreferrer">
          <img src={twitterIcon} alt="twitter" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
          <img src={youtubeIcon} alt="youtube" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <img src={instagramIcon} alt="instagram" />
        </a>
      </SocialIcon>
    </Container>
  );
};

const Container = styled.footer`
  padding: 32px 104px 108px;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);
  background-color: ${({ theme }) => theme.color.Black};
  color: #676767;
  font-size: 16px;
  font-weight: 400;
  margin: 0 auto;
  position: relative;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 32px 104px 64px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    padding: 32px 32px;
  }
`;

const FooterCompany = styled.div`
  text-align: left;

  @media ${({ theme }) => theme.device.mobile} {
    grid-column: 1/3;
    grid-row: 3;
  }
`;

const Support = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  a {
    color: #cfcfcf;
  }

  @media ${({ theme }) => theme.device.mobile} {
    grid-column: 1/3;
    justify-content: flex-start;
    gap: 1.7rem;
  }
`;

const SocialIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  text-align: center;

  @media ${({ theme }) => theme.device.mobile} {
    grid-column: 3;
    grid-row: 1;
  }
`;
