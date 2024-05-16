import IdInput from '@/components/IdInput';
import PasswordInput from '@/components/PasswordInput';
import LogoIcon from '@/public/logo.svg';
import Image from 'next/image';
import S from './index.module.css';
import Link from 'next/link';
import googleIcon from '@/public/googlesns.svg';
import kakaoIcon from '@/public/kakaosns.svg';
import useSignUpId from '@/hooks/useSignUpId';
import useSignUpPwd from '@/hooks/useSignUpPwd';
import useSignUpPwdCheck from '@/hooks/useSignUpPwdCheck';
import { useRouter } from 'next/router';
import { SIGN_UP_BASE_URL } from '@/constant/signup-constant';
import { useEffect } from 'react';

export default function SignUpPage() {
  const router = useRouter();
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      router.push('/folder');
    }
  }, []);
  const {
    email,
    isIdError,
    idErrorMsg,
    handleEmailChange,
    handleIdBlur,
    handleIdErrorOnSubmit,
  } = useSignUpId();

  const {
    password,
    isPwdError,
    pwdErrorMsg,
    handlePasswordChange,
    handlePwdBlur,
    handlePWdErrorOnSubmit,
  } = useSignUpPwd();

  const {
    passwordCheck,
    isPwdCheckError,
    pwdCheckErrorMsg,
    handlePasswordCheckChange,
    handlePwdCheckBlur,
    handlePWdCheckErrorOnSubmit,
  } = useSignUpPwdCheck({ password });

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch(SIGN_UP_BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('로그인에 실패했습니다.');
      }
      const data = await response.json();
      const { accessToken, refreshToken } = data;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      router.push('/folder');
    } catch (error) {
      console.error('Error:', error);
      handleIdErrorOnSubmit();
      handlePWdErrorOnSubmit();
      handlePWdCheckErrorOnSubmit;
    }
  }

  return (
    <>
      <div className={S.signUpPageWrapper}>
        <div className={S.flexContainer}>
          <div className={S.signLink}>
            <Link href="/">
              <Image src={LogoIcon} width={211} height={38} alt="로고 아이콘" />
            </Link>
            <br />
            <p>
              이미 회원이신가요?
              <Link className={S.signUpLink} href="/signin">
                로그인 하기
              </Link>
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={S.idInputWrapper}>
              <label className={S.idInputLabel}>이메일</label>
              <IdInput
                value={email}
                onChange={handleEmailChange}
                placeholder={'이메일을 입력해 주세요'}
                isError={isIdError}
                ErrorMsg={idErrorMsg}
                onBlur={handleIdBlur}
              />
            </div>
            <div className={S.pwdInputWrapper}>
              <label className={S.pwdInputLabel}>비밀번호</label>
              <PasswordInput
                value={password}
                onChange={handlePasswordChange}
                placeholder={'영문,숫자를 조합해 8자 이상 입력해 주세요.'}
                isError={isPwdError}
                ErrorMsg={pwdErrorMsg}
                onBlur={handlePwdBlur}
              />
            </div>
            <div className={S.pwdCheckInputWrapper}>
              <label className={S.pwdCheckInputLabel}>비밀번호 확인</label>
              <PasswordInput
                value={passwordCheck}
                onChange={handlePasswordCheckChange}
                placeholder={'비밀번호와 일치하는 값을 입력해 주세요.'}
                isError={isPwdCheckError}
                ErrorMsg={pwdCheckErrorMsg}
                onBlur={handlePwdCheckBlur}
              />
            </div>
            <button className={S.signInBtn}> 회원가입</button>
          </form>
          <div className={S.snsLink}>
            <p> 다른 방식으로 가입하기</p>
            <div className={S.snsLinkIcon}>
              <Link href="https://www.google.com">
                <Image src={googleIcon} alt="구글 아이콘" />
              </Link>
              <Link href="https://www.kakaocorp.com/page">
                <Image src={kakaoIcon} alt="카카오 아이콘" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
