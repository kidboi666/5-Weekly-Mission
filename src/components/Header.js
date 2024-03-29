import React from "react";
import styled from "styled-components";

const HeaderBlock = styled.div`
  background: #f0f6ff;

  div {
    padding: 1.25rem 39rem;
  }

  p {
    margin: 0;
  }
`;

function Header() {
  return (
    <>
      <HeaderBlock>
        <div>
          <p>프로필</p>
          <p>@코드잇</p>
          <p>즐겨찾기</p>
        </div>
      </HeaderBlock>
    </>
  );
}

export default Header;
