import React from "react";
import styled from "styled-components";

const MainProfileBlock = styled.div`
  background: #f0f6ff;

  div {
    padding: 1.25rem 39rem 3.75rem 39rem;
    text-align: center;
  }

  img {
    height: 3.75rem;
  }

  p {
    margin-top: 0.75rem;
    margin-bottom: 0;

    color: var(--text-color-light-mode, #000);
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
  }

  h2 {
    margin-top: 1.25rem;
    margin-bottom: 0;

    color: #000;
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Pretendard;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

function test(a = "비회원") {
  return a;
}

function MainProfile({ profile }) {
  // 에러 방지
  if (!profile || !profile.owner) {
    console.log("데이터가 없습니다.");
    return <div>로딩중</div>;
  }

  const folderUserImage = profile.owner.profileImageSource;
  const folderUserName = profile.owner.name;
  const folderName = profile.name;

  return (
    <>
      <MainProfileBlock>
        <div>
          <img src={folderUserImage} alt="profile" />
          <p>{test(folderUserName)}</p>
          {/* <p>{folderUserName}</p> */}
          <h2>{folderName}</h2>
        </div>
      </MainProfileBlock>
    </>
  );
}

export default MainProfile;
