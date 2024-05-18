import SignInput from '@/components/Auth/SignInput';
import SignLabel from '@/components/Auth/SignLabel';
import Social from '@/components/Auth/Social';
import GradientButton from '@/components/Button/GradientButton';
import styled from 'styled-components';

function SignInPage() {
  return (
    <SigninWrapper>
      <SignForm>
        <div>
          <SignLabel>
            이메일
            <SignInput type="email" placeholder="이메일을 입력해 주세요" />
          </SignLabel>
          <SignLabel>
            비밀번호
            <SignInput type="password" placeholder="비밀번호를 입력해 주세요" />
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
  width: 400px;
`;

const SigninWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SignInPage;
