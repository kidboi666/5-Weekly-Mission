import React from 'react';
import styled from 'styled-components';
import facebook from '../assets/icon/Facebook.svg';
import twitter from '../assets/icon/Twitter.svg';
import youtube from '../assets/icon/Youtube.svg';
import instagram from '../assets/icon/Instagram.svg';

const Container = styled.div`
  background-color: black;
  height: 160px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #676767;

  margin: 100px;
`;

const Info = styled.div`
  text-decoration: none;
`;

const PrivacyPolicy = styled.a`
  color: #676767;
  text-decoration: none;
  margin-right: 30px;
`;

const Faq = styled.a`
  color: #676767;
  text-decoration: none;
`;

const Sns = styled.div`
  display: flex;
  gap: 12px;
`;

function Footer() {
  return (
    <footer>
      <Container>
        <Wrapper>
          <p>@codeit - 2023</p>
          <Info>
            <PrivacyPolicy href='../pages/PrivacyPolicy'>
              Privacy Policy
            </PrivacyPolicy>
            <Faq href='../pages/FaQ'>FAQ</Faq>
          </Info>
          <Sns>
            <a href='https://www.facebook.com/'>
              <img src={facebook} alt='페이스북 아이콘' />
            </a>
            <a href='https://twitter.com/?lang=en'>
              <img src={twitter} alt='트위터 아이콘' />
            </a>
            <a href='https://www.youtube.com/'>
              <img src={youtube} alt='유튜브 아이콘' />
            </a>
            <a href='https://www.instagram.com/'>
              <img src={instagram} alt='인스타그램 아이콘' />
            </a>
          </Sns>
        </Wrapper>
      </Container>
    </footer>
  );
}

export default Footer;
