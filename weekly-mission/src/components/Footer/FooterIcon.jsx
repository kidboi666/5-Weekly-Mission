import { Link } from "react-router-dom";
import {
  BiLogoFacebookCircle,
  BiLogoTwitter,
  BiLogoYoutube,
  BiLogoInstagramAlt,
} from "react-icons/bi";
import styled from "styled-components";

const Icons = styled.div`
  display: flex;
  column-gap: 12px;
  height: 20px;

  a {
    gap: 30px;
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

const FooterIcons = () => {
  return (
    <Icons>
      <Link to="https://www.facebook.com/?locale=ko_KR" target="_blank">
        <BiLogoFacebookCircle />
      </Link>
      <Link to="https://twitter.com/?lang=ko" target="_blank">
        <BiLogoTwitter />
      </Link>
      <Link to="https://www.youtube.com/?gl=KR&hl=ko" target="_blank">
        <BiLogoYoutube />
      </Link>
      <Link to="https://www.instagram.com/" target="_blank">
        <BiLogoInstagramAlt />
      </Link>
    </Icons>
  );
};

export default FooterIcons;
