import Logo from '@/components/Auth/Logo';
import SignInput from '@/components/Auth/SignInput';
import SignLabel from '@/components/Auth/SignLabel';
import Social from '@/components/Auth/Social';
import GradientButton from '@/components/Button/GradientButton';
import { useState } from 'react';
import styled from 'styled-components';

function SignInPage() {
  const [password, setPassword] = useState('');

  const handlePassword = (pw: string) => {
    setPassword(pw);
  };

  return (
    <SigninWrapper>
      <SignForm>
        <Logo href="/signin" message="이미 회원이신가요?" linkMessage="로그인 하기" />
        <div>
          <SignLabel>
            이메일
            <SignInput type="email" placeholder="이메일을 입력해 주세요" id="email" />
          </SignLabel>
          <SignLabel>
            비밀번호
            <SignInput type="password" placeholder="비밀번호를 입력해 주세요" id="password" handleChange={handlePassword} />
          </SignLabel>
          <SignLabel>
            비밀번호 확인
            <SignInput type="password" placeholder="비밀번호를 한번 더 입력해 주세요" id="passwordCheck" password={password} />
          </SignLabel>
        </div>
        <GradientButton size="auto">회원가입</GradientButton>
        <Social message="다른 방식으로 가입하기" />
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
