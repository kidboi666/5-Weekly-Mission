import React from 'react';
import logo from '../assets/Linkbrary.svg';
import userProfile from '../assets/profile_img.svg';
import styled from 'styled-components';

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

  & img {
    width: 1.6rem;
  }

  @media screen and (max-width: 767px) {
    & p {
      display: none;
    }
  }
`;

function Header() {
  return (
    <header>
      <Wrapper>
        <Container>
          <Logo href='../pages/main'>
            <img src={logo} alt='로고' />
          </Logo>
          <UserProfile>
            <img src={userProfile} alt='유저 아이콘' />
            {/* TODO : 이메일은 api를 통해서 가져온 결과여야 함. */}
            <p>유저 이메일</p>
          </UserProfile>
        </Container>
      </Wrapper>
    </header>
  );
}

export default Header;
