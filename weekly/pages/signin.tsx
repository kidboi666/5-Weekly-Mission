import SignInput from '@/components/Auth/SignInput';
import SignLabel from '@/components/Auth/SignLabel';
import styled from 'styled-components';

function SignInPage() {
  return (
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
    </SignForm>
  );
}

const SignForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export default SignInPage;
