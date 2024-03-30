import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logoImg from "../assets/logo.svg";

const NavigationBlock = styled.div`
  background: #f0f6ff;

  div {
    display: flex;
    justify-content: space-between;
    padding: 1.25rem 14.5rem;
  }
`;

const Button = styled.button`
  display: flex;
  width: 8rem;
  padding: 1rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.5rem;
  border: 0 solid rgba(0, 0, 0, 0);
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);

  color: var(--Grey-Light, #f5f5f5);
  font-family: Pretendard;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  cursor: pointer;
`;

const linkStyle = { textDecoration: "none" };

function Navigation() {
  return (
    <NavigationBlock>
      <div>
        <Link to="/">
          <img src={logoImg} alt="로고 이미지 Linkbrary" />
        </Link>
        <Link to="signin" style={linkStyle}>
          <Button>로그인</Button>
        </Link>
      </div>
    </NavigationBlock>
  );
}

export default Navigation;
