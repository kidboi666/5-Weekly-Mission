import React, { useEffect } from 'react';
import styled from 'styled-components';
import useGetData from './hooks/useGetData';

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

const BASE_URL = 'https://bootcamp-api.codeit.kr/api/sample/folder';

function FolderInfo() {
  const [data, isLoading, error, fetchData] = useGetData(BASE_URL);

  useEffect(() => {
    fetchData(BASE_URL);
  }, [BASE_URL]);

  return (
    <>
      {data ? (
        <Container>
          <UserInfo>
            <Img src={data.folder.owner.profileImageSource} alt='유저 아바타' />
            <P className='folder__user-name'>@{data.folder.owner.name}</P>
          </UserInfo>
          <FolderName>{data.folder.name}</FolderName>
        </Container>
      ) : (
        <p>로딩중...</p>
      )}
    </>
  );
}

export default FolderInfo;
