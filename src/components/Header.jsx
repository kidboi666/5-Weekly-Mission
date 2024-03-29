import React from 'react';
import logo from '../assets/Linkbrary.svg';
import userProfile from '../assets/profile_img.svg';
import styled from 'styled-components';

const container = styled.div`
  
`;
function Header() {
  return (
    <header>
      <div className={container}>
        <a className={}href='../pages/main'>
          <img src={logo} alt='로고' />
        </a>
        <div>
          <img src={userProfile} alt='유저 프로필 아이콘'></img>
          <p>유저 이메일</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
