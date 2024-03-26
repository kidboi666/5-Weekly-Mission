import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import FacebookLogo from '../images/facebook_logo.svg'
import TwitterLogo from '../images/twitter_logo.svg'
import YoutubeLogo from '../images/youtube_logo.svg'
import InstagramLogo from '../images/instagram_logo.svg'

const FooterFrame = styled.div``;
const ContentsFrame = styled.div``;
const Codeit = styled(Link)``;
const Linkbox = styled.div``;
const Iconbox = styled.div``;
const StyledLink = styled(Link)``

const Footer = function () {
  return (
    <FooterTemplate>
      <FooterFrame>
        <ContentsFrame>
          <Codeit>©codeit - 2023</Codeit>
          <Linkbox>
		    <StyledLink href="/"> Privacy Policy </StyledLink>
            <StyledLink href="/"> FAQ </StyledLink>
		  </Linkbox>
          <Iconbox>
            <Link href="https://www.facebook.com/" target="_blank">
              <img src={FacebookLogo} alt="Facebook Logo"/>
            </Link>
            <Link href="https://twitter.com/?lang=ko" target="_blank">
              <img src={TwitterLogo} alt="Twitter Logo"/>
            </Link>
            <Link href="https://www.youtube.com/" target="_blank">
              <img src={YoutubeLogo} alt="Youtube Logo"/>
            </Link>
            <Link href="https://www.instagram.com/" target="_blank">
              <img src={InstagramLogo} alt="Instagram Logo"/>
            </Link>
          </Iconbox>
        </ContentsFrame>
      </FooterFrame>
    </FooterTemplate>
  );
};

const FooterTemplate = styled.footer`
  width: 100%;
  height: 280px;
  padding-top: 120px;

  @media (max-width: 767px) {
    height: 200px;
    padding-top: 40px;
  }

  ${FooterFrame} {
    width: 100%;
    max-width: 1920px;
    height: 160px;
    background-color: #111322;
    padding: 32px 104px 64px 104px;

    @media (max-width: 767px) {
      padding: 32px 32px 32px 32px;
    }

    ${ContentsFrame} {
      height: 20px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 30px 60px;
      font-family: "Acme";
      font-size: 16px;
      font-weight: 400;

      @media (max-width: 767px) {
        height: 96px;
        position: relative;
        font-family: "Acme";
        font-size: 16px;
        font-weight: 400;
      }

      ${Codeit} {
        height: 20px;
        color: #676767;

        @media (max-width: 767px) {
          position: absolute;
          bottom: 0;
          left: 0;
        }
      }

      ${Linkbox} {
        display: flex;
        height: 20;
        gap: 30px;

        @media (max-width: 767px) {
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          height: 20;
          gap: 30px;
        }

        ${StyledLink} {
          color: #cfcfcf;
          text-decoration-line: none;
        }
      }

      ${Iconbox} {
        display: flex;
        gap: 12px;

        @media (max-width: 767px) {
          position: absolute;
          top: 0;
          right: 0;
        }
      }
    }
  }
`;

export default Footer