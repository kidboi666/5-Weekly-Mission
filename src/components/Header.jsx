import React, { useEffect } from 'react';
import logo from '../assets/linkbrary.svg';
import styled from 'styled-components';
import useGetData from '../hooks/useFetchData';
import { EX_IMG, HEADER_BASE_URL } from '../contants/constant';

const Wrapper = styled.div`
  top: 0;
  width: 100%;
  z-index: 1;
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
`;

const Logo = styled.a`
  width: 8.5rem;
  @media screen and (max-width: 767px) {
    width: 6rem;
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

  @media screen and (max-width: 767px) {
    & span {
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
// function Profile({user}) {
//   return <div>{user.}</div>;
// }
function Header({ position, url = HEADER_BASE_URL }) {
  const { data, fetchData } = useGetData(url);

  useEffect(() => {
    fetchData(url);
  }, []);

  console.log(data);

  return (
    <header>
      <Wrapper style={{ position: position }}>
        <Container>
          <Logo href='../pages/main'>
            <img src={logo} alt='로고' />
          </Logo>
          {data ? (
            <UserProfile>
              <img src={data[0]} alt='유저 아이콘' />
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
