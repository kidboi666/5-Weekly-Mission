import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NavUserProfile from "./NavUserProfile";
import logoImg from "../assets/logo.svg";

// 로그인 확인
function Login(user) {
  const userCheck = user;

  if (!userCheck) {
    return (
      <Link to="/signin" style={linkStyle}>
        <Button>로그인</Button>
      </Link>
    );
  }

  // 유저가 있다면 표시
  if (userCheck) {
    return <NavUserProfile user={user} />;
  }
}

function NavigationBar({ user, folder }) {
  // 스타일 주는 방법 변경
  return (
    <NavigationBlock folder={folder}>
      <div>
        <Link to="/" style={{ display: "flex" }}>
          <img src={logoImg} alt="로고 이미지 Linkbrary" />
        </Link>
        <>{Login(user)}</>
      </div>
    </NavigationBlock>
  );
}

export default NavigationBar;

const NavigationBlock = styled.div`
  background: #f0f6ff;
  position: ${({ folder }) => (folder ? "sticky" : "fixed")}
  z-index: 1;
  left: 0;
  right: 0;

  div {
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 12rem;

    @media screen and (max-width: 1124px) {
      padding: 1.5rem 2.03125rem 1.5rem 2.03125rem;
    }

    @media screen and (max-width: 545px) {
      padding: 1.125rem 2rem 1.0625rem 2rem;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  padding: 0.8rem 1.05rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  border: 0 solid rgba(0, 0, 0, 0);
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);

  color: #f5f5f5;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
`;

const linkStyle = { textDecoration: "none" };
