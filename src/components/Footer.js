import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import facebookIcon from "../assets/facebookIcon.svg";
import twitterIcon from "../assets/twitterIcon.svg";
import youtubeIcon from "../assets/youtubeIcon.svg";
import instagramIcon from "../assets/instagramIcon.svg";

const facebook = "https://www.facebook.com/";
const twitter = "https://twitter.com/?lang=ko";
const youtube = "https://www.youtube.com/?app=desktop&hl=ko&gl=KR";
const instagram = "https://www.instagram.com/";

const iconItems = [
  {
    id: 1,
    image: facebookIcon,
    link: facebook,
    text: "페이스북 바로가기 아이콘",
  },
  {
    id: 2,
    image: twitterIcon,
    link: twitter,
    text: "트위터 바로가기 아이콘",
  },
  {
    id: 3,
    image: youtubeIcon,
    link: youtube,
    text: "유튜브 바로가기 아이콘",
  },
  {
    id: 4,
    image: instagramIcon,
    link: instagram,
    text: "인스타그램 바로가기 아이콘",
  },
];

const linkStyle = { textDecoration: "none", color: "#676767" };

function Footer() {
  return (
    <FooterBlock>
      <p>©codeit - 2023</p>
      <LinkBlock>
        <Link to="PrivacyPolicy" style={linkStyle}>
          <span>Privacy Policy</span>
        </Link>
        <Link to="FAQ" style={linkStyle}>
          <span>FAQ</span>
        </Link>
      </LinkBlock>
      <p>
        <ImageBlock>
          {iconItems.map((item) => {
            return (
              <Link key={item?.id} to={item.link} target="_blank">
                <img src={item.image} alt={item.text} />
              </Link>
            );
          })}
        </ImageBlock>
      </p>
    </FooterBlock>
  );
}

export default Footer;

const FooterBlock = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  background: #111322;
  color: #ffffff;
  margin-top: 6.25rem;
  padding: 2rem 6.5rem 4rem 6.5rem;

  @media screen and (max-width: 545px) {
    padding: 2rem 2rem 4rem 2rem;
  }

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

const LinkBlock = styled.div`
  @media screen and (max-width: 545px) {
    position: absolute;
    top: 90px;
  }
`;
