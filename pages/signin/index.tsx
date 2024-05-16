import IdInput from '@/components/IdInput';
import PasswordInput from '@/components/PasswordInput';
import LogoIcon from '@/public/logo.svg';
import Image from 'next/image';
import S from './index.module.css';
import Link from 'next/link';
import googleIcon from '@/public/googlesns.svg';
import kakaoIcon from '@/public/kakaosns.svg';
import { SIGN_IN_BASE_URL } from '../../constant/signin-constant';
import { useRouter } from 'next/router';
import useSignInId from '@/hooks/useSignInId';
import useSignInPwd from '@/hooks/useSignInPwd';
import { useEffect } from 'react';

export default function SignInPage() {
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
  } = useSignInId();

  const {
    password,
    isPwdError,
    pwdErrorMsg,
    handlePasswordChange,
    handlePwdBlur,
    handlePWdErrorOnSubmit,
  } = useSignInPwd();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch(SIGN_IN_BASE_URL, {
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
    }
  }
  return (
    <>
      <div className={S.signInPageWrapper}>
        <div className={S.flexContainer}>
          <div className={S.signLink}>
            <Link href="/">
              <Image src={LogoIcon} width={211} height={38} alt="로고 아이콘" />
            </Link>
            <br />
            <p>
              회원이 아니신가요?
              <Link className={S.signUpLink} href="/signup">
                회원 가입하기
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
                placeholder={'비밀번호를 입력해 주세요'}
                isError={isPwdError}
                ErrorMsg={pwdErrorMsg}
                onBlur={handlePwdBlur}
              />
            </div>
            <button type="submit" className={S.signInBtn}>
              로그인
            </button>
          </form>
          <div className={S.snsLink}>
            <p> 소셜 로그인</p>
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
