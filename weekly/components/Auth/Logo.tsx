import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import logoImage from '@/assets/logo.svg';

function Logo() {
  return (
    <LogoWrapper>
      <Link href="/">
        <Image className="logo" src={logoImage} alt="로고 이미지" />
      </Link>
      <SignupWrapper>
        <p>회원이 아니신가요?</p>
        <Link href="/signup">회원 가입하기</Link>
      </SignupWrapper>
    </LogoWrapper>
  );
}

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  .logo {
    width: 210px;
    height: 38px;
  }
`;

const SignupWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

export default Logo;
