import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import facebookIcon from "../assets/facebookIcon.svg";
import twitterIcon from "../assets/twitterIcon.svg";
import youtubeIcon from "../assets/youtubeIcon.svg";
import instagramIcon from "../assets/instagramIcon.svg";

const FooterBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #111322;
  color: #ffffff;
  margin-top: 6.25rem;
  padding: 2rem 6.5rem 4rem 6.5rem;

  div {
    display: flex;
    gap: 1.875rem;
  }

  p {
    flex-basis: 120px;
    color: #676767;
  }
`;

const ImageBlock = styled.span`
  display: flex;
  gap: 0.75rem;
`;

const linkStyle = { textDecoration: "none", color: "#676767" };
const facebook = "https://www.facebook.com/";
const twitter = "https://twitter.com/?lang=ko";
const youtube = "https://www.youtube.com/?app=desktop&hl=ko&gl=KR";
const instagram = "https://www.instagram.com/";

function Footer() {
  return (
    <FooterBlock>
      <p>©codeit - 2023</p>
      <div>
        <Link to="PrivacyPolicy" style={linkStyle}>
          <span>Privacy Policy</span>
        </Link>
        <Link to="FAQ" style={linkStyle}>
          <span>FAQ</span>
        </Link>
      </div>
      <p>
        <ImageBlock>
          <Link to={facebook} target="_blank">
            <img src={facebookIcon} alt="페이스북 아이콘" />
          </Link>
          <Link to={twitter} target="_blank">
            <img src={twitterIcon} alt="트위터 아이콘" />
          </Link>
          <Link to={youtube} target="_blank">
            <img src={youtubeIcon} alt="유튜브 아이콘" />
          </Link>
          <Link to={instagram} target="_blank">
            <img src={instagramIcon} alt="인스타그램 아이콘" />
          </Link>
        </ImageBlock>
      </p>
    </FooterBlock>
  );
}

export default Footer;
