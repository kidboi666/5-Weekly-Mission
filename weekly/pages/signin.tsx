import SignInput from '@/components/Auth/SignInput';
import SignLabel from '@/components/Auth/SignLabel';
import styled from 'styled-components';

function SignInPage() {
  return (
    <>
      <SignLabel>이메일</SignLabel>
      <SignInput type="email" placeholder="이메일을 입력해 주세요" />
      <SignLabel>비밀번호</SignLabel>
      <SignInput type="password" placeholder="비밀번호를 입력해 주세요" />
    </>
  );
}

export default SignInPage;
