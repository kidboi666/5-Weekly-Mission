import styled from 'styled-components';
import SocialIcon from './SocialIcon';
import kakaoIcon from '@/assets/icon-kakaotalk.svg';
import googleIcon from '@/assets/icon-google.svg';

type Props = {
  message: string;
};

function Social({ message }: Props) {
  return (
    <SocialWrapper>
      <p>{message}</p>
      <IconWrapper>
        <SocialIcon imgUrl={googleIcon} />
        <SocialIcon imgUrl={kakaoIcon} />
      </IconWrapper>
    </SocialWrapper>
  );
}

const SocialWrapper = styled.div`
  display: flex;
  width: 400px;
  padding: 12px 24px;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--Linkbrary-gray20, #ccd5e3);
  background: var(--Linkbrary-gray10, #e7effb);
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export default Social;
