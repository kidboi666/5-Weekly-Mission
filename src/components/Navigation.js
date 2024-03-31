import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import User from "./User";
import logoImg from "../assets/logo.svg";

const NavigationBlock = styled.div`
  background: #f0f6ff;
  position: fixed;
  z-index: 1;
  left: 0;
  right: 0;

  div {
    display: flex;
    justify-content: space-between;
    padding: 1.25rem 16rem;
  }
`;

const Button = styled.button`
  display: flex;
  width: 7rem;
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

// 로그인 확인
function Login(user) {
  const userCheck = user;

  if (!userCheck) {
    return (
      <Link to="signin" style={linkStyle}>
        <Button>로그인</Button>
      </Link>
    );
  }

  // 유저가 있다면 표시
  if (userCheck) {
    return <User user={user} />;
  }
}

function Navigation({ user }) {
  // 스타일 주는 방법 변경
  return (
    <NavigationBlock>
      <div>
        <Link to="/" style={{ display: "flex" }}>
          <img src={logoImg} alt="로고 이미지 Linkbrary" />
        </Link>
        <>{Login(user)}</>
      </div>
    </NavigationBlock>
  );
}

export default Navigation;
