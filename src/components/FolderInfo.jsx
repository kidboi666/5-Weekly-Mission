import React from 'react';
import Avartar from '../assets/Avatar.svg';
import styled from 'styled-components';

function FolderInfo() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 99px;
    background-color: #f0f6ff;

    @media screen and (max-width: 767px) {
      padding-top: 59.5px;
    }
  `;

  const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const Img = styled.img`
    width: 3.7rem;

    @media screen and (max-width: 767px) {
      width: 3rem;
    }
  `;

  const P = styled.p`
    font-size: 1rem;

    @media screen and (max-width: 767px) {
      font-size: 0.8rem;
    }
  `;

  const FolderName = styled.p`
    font-size: 2.5rem;
    padding: 0;
    margin-top: 0;

    @media screen and (max-width: 767px) {
      font-size: 2rem;
      margin-top: 0.7rem;
    }
  `;

  return (
    <Container>
      <UserInfo>
        <Img src={Avartar} alt='유저 아바타' />
        <P className='folder__user-name'>@코드잇</P>
      </UserInfo>
      <FolderName>⭐️ 즐겨찾기</FolderName>
    </Container>
  );
}

export default FolderInfo;
