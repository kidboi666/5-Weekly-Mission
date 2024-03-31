import React, { useEffect } from 'react';
import logo from '../assets/Linkbrary.svg';
import styled from 'styled-components';
import useGetData from './hooks/useGetData';

const Wrapper = styled.div`
  top: 0;
  width: 100%;
  position: fixed;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f0f6ff;
  padding: 1rem 12.5rem;

  @media screen and (max-width: 1023px) {
    padding-right: 2rem;
    padding-left: 2rem;
  }
  @media screen and (max-width: 767px) {
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;

const Logo = styled.a`
  width: 8.5rem;
  @media screen and(max-width: 767px) {
    width: 5rem;
  }
`;

const UserProfile = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  & img {
    width: 1.7rem;
    border-radius: 50%;
  }

  & span {
  }

  @media screen and (max-width: 767px) {
    & p {
      display: none;
    }
  }
`;
const LoginButton = styled.a`
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right: 2rem;
  padding-left: 2rem;

  border: none;
  border-radius: 1rem;
  background-color: #eeeeee;
`;
const SAMPLE_USER_URL = 'https://bootcamp-api.codeit.kr/api/sample/user';

function Header() {
  const [data, isLoading, error, fetchData] = useGetData(SAMPLE_USER_URL);

  useEffect(() => {
    fetchData(SAMPLE_USER_URL);
  }, [SAMPLE_USER_URL]);

  return (
    <header>
      <Wrapper>
        <Container>
          <Logo href='../pages/main'>
            <img src={logo} alt='로고' />
          </Logo>
          {data ? (
            <UserProfile>
              <img src={data.profileImageSource} alt='유저 아이콘' />
              <span>{data.email}</span>
            </UserProfile>
          ) : (
            <LoginButton href='./login'>로그인</LoginButton>
          )}
        </Container>
      </Wrapper>
    </header>
  );
}

export default Header;
