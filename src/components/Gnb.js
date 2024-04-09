import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Logo from './logo';
import CTA from './cta';
import { Link } from 'react-router-dom';
import profileImg from '../assets/profile.svg';
import { getProfile } from '../api/api';

const GNB = ({ isStickyDisabled }) => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProfile();
        setData(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Header>
      <HeaderContainer>
        <Link to="/">
          <Logo />
        </Link>
        {data ? (
          <HeaderProfile>
            <img src={profileImg} alt="프로필" />
            <p>{data.email}</p>
          </HeaderProfile>
        ) : (
          <Link to="/sign-in">
            <CTA text={'로그인'} />
          </Link>
        )}
      </HeaderContainer>
    </Header>
  );
};

export default GNB;

const Header = styled.header`
  display: flex;
  padding: 20px 200px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: #f0f6ff;
  position: ${(isStickyDisabled) => (isStickyDisabled ? 'sticky' : 'static')};
  top: 0;

  @media screen and (max-width: 1200px) {
    padding: 33px 32.5px 32px 32.5px;
  }

  @media screen and (max-width: 768px) {
    padding: 33px 32.5px 32px 32.5px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  width: 100%;
`;

const HeaderProfile = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
