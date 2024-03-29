import React from 'react';

function Footer() {
  return (
    <footer>
      <div className='footer__container'>
        <div className='footer__site'>
          <p>@codeit - 2023</p>
          <div className='footer__information'>
            <a href='../pages/PrivacyPolicy'>Privacy Policy</a>
            <a href='../pages/FaQ'>FAQ</a>
          </div>
          <div className='footer__sns'>
            <img src='../../public/' alt='페이스북 아이콘' />
            <img alt='트위터 아이콘' />
            <img alt='유튜브 아이콘' />
            <img alt='인스타그램 아이콘' />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
