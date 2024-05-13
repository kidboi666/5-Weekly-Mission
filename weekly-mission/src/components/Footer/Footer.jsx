import { Link } from "react-router-dom";
import * as S from "./Footer.styled";
import FooterIcons from "../Footer/FooterIcon";

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterBox>
        <S.CodeitLogo>©codeit - 2023</S.CodeitLogo>
        <S.Info>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/faq">FAQ</Link>
        </S.Info>
        <FooterIcons />
      </S.FooterBox>
    </S.FooterContainer>
  );
};

export default Footer;
