import styled from 'styled-components';
import Logo from '../asset/logo.svg';
import { GRAY5 } from './color';

const Heade = styled.header`
  position: ${({ $headerFixed }) => ($headerFixed ? 'fixed' : 'static')};
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  height: 93px;
  padding: 20px 200px;
  justify-content: center;
  background-color: ${GRAY5};
  z-index: 5;

  @media (max-width: 1199px) {
    padding: 20px 32px;
  }

  @media (max-width: 767px) {
    padding: 13px 32px;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  max-width: 1520px;

  @media (max-width: 1199px) {
    max-width: 800px;
  }

  @media (max-width: 767px) {
    padding: 13px 32px;
  }
`;

const Button = styled.button`
  display: flex;
  width: 128px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  color: #f5f5f5;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  text-decoration: none;

  @media (max-width: 767px) {
    padding: 13px 32px;
    width: 80px;
    padding: 10px 16px;
    font-size: 14px;
  }
`;

const H1Logo = styled.h1`
  width: 133px;
  height: 24px;

  @media (max-width: 767px) {
    width: 89px;
    height: 16px;
  }

  & .linkbararyLogo {
    width: 100%;
    height: 100%;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
  font-size: 14px;

  & .profileImg {
    height: 28px;
    width: 28px;
  }

  & .Span_email {
    @media (max-width: 767px) {
      display: none;
    }
  }
`;

const PorfileImage = styled.img`
  border-radius: 9999px;
  border: 0px;
`;

const UserProfile = ({ email, img }) => {
  return (
    <Profile>
      <PorfileImage
        className="profileImg"
        src={img}
        alt="프로필"
        width={28}
        height={28}
      />
      <span className="Span_email"> {email}</span>
    </Profile>
  );
};

const Header = ({ isLogIn, email, img, fixed }) => {
  return (
    <Heade $headerFixed={fixed}>
      <HeaderContent>
        <a href="https://www.naver.com/" target="blank">
          <H1Logo>
            <img
              className="linkbararyLogo"
              src={Logo}
              alt="Linkbrary"
              width={133}
              height={24}
            />
          </H1Logo>
        </a>
        {isLogIn ? (
          <UserProfile email={email} img={img} />
        ) : (
          <Button type="button">로그인</Button>
        )}
      </HeaderContent>
    </Heade>
  );
};

export default Header;
