import React from "react";
import styled from "styled-components";
import logoImg from "../assets/logo.svg";

const NavigationBlock = styled.div`
  background: #f0f6ff;

  div {
    display: flex;
    justify-content: space-between;
    padding: 0rem 12.5rem;
  }
`;

function Navigation() {
  return (
    <NavigationBlock>
      <div>
        <img src={logoImg} alt="로고 이미지 Linkbrary" />
        <p>로그인</p>
      </div>
    </NavigationBlock>
  );
}

export default Navigation;
