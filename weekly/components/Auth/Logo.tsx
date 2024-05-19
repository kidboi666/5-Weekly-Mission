import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import logoImage from '@/assets/logo.svg';

type Props = {
  href: string;
  message: string;
  linkMessage: string;
};

function Logo({ href, message, linkMessage }: Props) {
  return (
    <LogoWrapper>
      <Link href="/">
        <Image className="logo" src={logoImage} alt="로고 이미지" />
      </Link>
      <SignupWrapper>
        <p>{message}</p>
        <Link href={href}>{linkMessage}</Link>
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
