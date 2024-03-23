import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoImgSrc from "../images/Linkbrary.svg";
import {Button, ButtonLabel} from "./button";

const Nav = function () {
  return (
    <NavTemplate>
      <ContentsFrame>
        <Logo href="/">
          <Image src={LogoImgSrc} />
        </Logo>
        <LoginButton href="/login" as="a">
          <ButtonLabel>로그인</ButtonLabel>
        </LoginButton>
      </ContentsFrame>
    </NavTemplate>
  );
};

const ContentsFrame = styled.div``;
const Logo = styled(Link)``;
const LoginButton = styled(Button)``;
const Image = styled.img``;

const NavTemplate = styled.nav`
  width: 100%;
  height: 93px;
  padding: 20px 200px 20px 200px;
  background-color: #f0f6ff;
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1199px) {
    padding: 20px 32px 20px 32px;
  }

  @media (max-width: 767px) {
    height: 63px;
    padding: 13px 32px 13px 32px;
  }

  ${ContentsFrame} {
    width: 100%;
    max-width: 1520px;
    height: 53px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1199px) {
      width: 100%;
      max-width: 799px;
    }

    @media (max-width: 767px) {
      height: 37px;
    }

    ${Logo} {
      ${Image} {
        max-width: 133px;
        width: 100%;
        height: 24px;
        @media (max-width: 767px) {
          max-width: 89px;
          width: 100%;
          height: 24px;
        }
      }
    }

    ${LoginButton} {
      max-width: 128px;
      width: 100%;
      height: 100%;

      gap: 10px;

      @media (max-width: 767px) {
        max-width: 80px;
        width: 100%;
      }

    }
  }
`;

export default Nav;
