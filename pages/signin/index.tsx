import Link from 'next/link';
import Image from 'next/image';
import * as S from '../../styles/Auth.styled';
import LogoIcon from '../../src/images/logo.svg';
import GoggleIcon from '../../src/images/login_google.svg';
import KakaotalkIcon from '../../src/images/login_kakaotalk.svg';
import EyeOnIcon from '../../src/images/eye_on.svg';
import EyeOffIcon from '../../src/images/eye_off.svg';
import { ChangeEvent, FocusEvent, FormEvent, useState } from 'react';
import { postSignIn } from '@/apis/api';
import { useRouter } from 'next/router';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState({
    email: { error: false, message: '' },
    password: { error: false, message: '' },
  });
  const router = useRouter();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const result = await postSignIn(email, password);
    localStorage.setItem('accessToken', result?.accessToken);
    router.push('/folder');
  };

  const handleEmailBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setShowError((prev) => ({
        ...prev,
        email: { error: true, message: '이메일을 입력해 주세요.' },
      }));
      return;
    }
    const emailPattern: RegExp =
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    if (!emailPattern.test(e.target.value)) {
      setShowError((prev) => ({
        ...prev,
        email: { error: true, message: '올바른 이메일 주소가 아닙니다.' },
      }));
      return;
    }
    setShowError((prev) => ({
      ...prev,
      email: { error: false, message: '' },
    }));
  };

  const handlePasswordBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setShowError((prev) => ({
        ...prev,
        password: { error: true, message: '비밀번호를 입력해 주세요.' },
      }));
      return;
    }
    setShowError((prev) => ({
      ...prev,
      password: { error: false, message: '' },
    }));
  };

  return (
    <S.Layout>
      <S.Inner>
        <S.LogoLink href='/'>
          <Image src={LogoIcon} alt='Linkbrary logo' width='211' height='38' />
        </S.LogoLink>
        <S.TextWrap>
          <S.Text>회원이 아니신가요?</S.Text>
          <S.SignLink href='/signup'>회원 가입하기</S.SignLink>
        </S.TextWrap>
        <S.Form onSubmit={handleSubmit}>
          <S.FormField>
            <S.Label htmlFor='email'>이메일</S.Label>
            <S.Input
              id='email'
              type='email'
              placeholder='이메일을 입력해 주세요.'
              onBlur={handleEmailBlur}
              iserror={showError.email.error.toString()}
            />
            {showError.email.error && (
              <S.ErrorMessage>{showError.email.message}</S.ErrorMessage>
            )}
          </S.FormField>
          <S.FormField>
            <S.Label htmlFor='password'>비밀번호</S.Label>
            <S.PasswordWrap>
              <S.Input
                id='password'
                type='password'
                placeholder='비밀번호를 입력해 주세요.'
                onBlur={handlePasswordBlur}
                iserror={showError.password.error.toString()}
              />
              <S.EyeButton type='button' id='passwordEyeButton'>
                <Image
                  src={EyeOffIcon}
                  alt='안 보이기'
                  width='16'
                  height='16'
                />
              </S.EyeButton>
            </S.PasswordWrap>
            {showError.password.error && (
              <S.ErrorMessage>{showError.password.message}</S.ErrorMessage>
            )}
          </S.FormField>
          <S.SubmitButton text='로그인' />
        </S.Form>
        <S.SnsWrap>
          <S.SnsTitle>소셜 로그인</S.SnsTitle>
          <S.SnsList>
            <li>
              <Link href='https://www.google.com/'>
                <Image
                  src={GoggleIcon}
                  alt='구글 로그인'
                  width='42'
                  height='42'
                />
              </Link>
            </li>
            <li>
              <Link href='https://www.kakaocorp.com/page/'>
                <Image
                  src={KakaotalkIcon}
                  alt='카카오톡 로그인'
                  width='42'
                  height='42'
                />
              </Link>
            </li>
          </S.SnsList>
        </S.SnsWrap>
      </S.Inner>
    </S.Layout>
  );
}
