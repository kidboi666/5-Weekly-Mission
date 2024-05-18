import Logo from '@/components/Auth/Logo';
import SignInput from '@/components/Auth/SignInput';
import SignLabel from '@/components/Auth/SignLabel';
import Social from '@/components/Auth/Social';
import GradientButton from '@/components/Button/GradientButton';
import styled from 'styled-components';

function SignInPage() {
  return (
    <SigninWrapper>
      <SignForm>
        <Logo />
        <div>
          <SignLabel>
            이메일
            <SignInput type="email" placeholder="이메일을 입력해 주세요" id="email" />
          </SignLabel>
          <SignLabel>
            비밀번호
            <SignInput type="password" placeholder="비밀번호를 입력해 주세요" id="password" />
          </SignLabel>
        </div>
        <GradientButton size="auto">로그인</GradientButton>
        <Social />
      </SignForm>
    </SigninWrapper>
  );
}

const SignForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  gap: 30px;
`;

const SigninWrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: var(--Linkbrary-bg, #f0f6ff);
`;

export default SignInPage;
