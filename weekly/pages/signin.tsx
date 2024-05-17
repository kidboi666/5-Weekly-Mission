import SignInput from '@/components/Auth/SignInput';
import styled from 'styled-components';

function SignInPage() {
  return (
    <>
      <SignInput type="email" placeholder="이메일을 입력해 주세요" />
      <SignInput type="password" placeholder="비밀번호를 입력해 주세요" />
    </>
  );
}

export default SignInPage;
