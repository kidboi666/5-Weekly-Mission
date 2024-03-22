import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoImgSrc from './Images/Linkbrary.svg'

const Nav = function () {
  return (
    <NavTemplate>
      <ContentsFrame>
        <Logo href="/">
          <Image src={LogoImgSrc} />
        </Logo>
        <LoginButton href="/" as="a">
          <Label>로그인</Label>
        </LoginButton>
      </ContentsFrame>
    </NavTemplate>
  );
};

const ContentsFrame = styled.div``
const Logo = styled(Link)``
const LoginButton = styled(Link)``
const Image = styled.img``
const Label = styled.p``

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
      border-radius: 8px;
      border-style: none;
      gap: 10px;
      background-image: linear-gradient(90deg, #6d6afe, #6ae3fe);
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration-line: none;

      @media (max-width: 767px) {
        max-width: 80px;
        width: 100%;
      }

      ${Label} {
        font-size: 18px;
        font-weight: 600;
        color: #f5f5f5;
        font-family: "Pretendard";
      }
    }
  }
`;


export default Nav;
