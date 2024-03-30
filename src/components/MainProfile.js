import React from "react";
import styled from "styled-components";

const MainProfileBlock = styled.div`
  background: #f0f6ff;

  div {
    padding: 1.25rem 39rem;
  }

  p {
    margin: 0;
  }
`;

function MainProfile({ profile }) {
  return (
    <>
      <MainProfileBlock>
        <div>
          <p>프로필</p>
          <p>@코드잇</p>
          <p>즐겨찾기</p>
        </div>
      </MainProfileBlock>
    </>
  );
}

export default MainProfile;
