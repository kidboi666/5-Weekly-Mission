import React from 'react';

function Header() {
  return (
    <header>
      <a href='../pages/main'>
        <img src='../../public/Linkbrary.svg' alt='로고' />
      </a>
      <div>
        <img src='../../public/Vector_1.svg' alt='유저 프로필 아이콘'></img>
        <p>유저 이메일</p>
      </div>
    </header>
  );
}

export default Header;
