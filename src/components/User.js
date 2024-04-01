import React from "react";
import styled from "styled-components";

const UserBlock = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;
  padding: 0;

  img {
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 100px;
  }

  p {
    margin: 0;
    color: var(--Linkbrary-gray100, #373740);
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

function User({ user }) {
  return (
    <UserBlock>
      <>
        <img src={user.profileImageSource} alt={user.name} />
        <p>{user.email}</p>
      </>
    </UserBlock>
  );
}

export default User;
