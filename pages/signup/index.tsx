import Link from 'next/link';
import Image from 'next/image';
import * as S from '../../styles/Auth.styled';
import LogoIcon from '../../src/images/logo.svg';
import GoggleIcon from '../../src/images/login_google.svg';
import KakaotalkIcon from '../../src/images/login_kakaotalk.svg';
import EyeOnIcon from '../../src/images/eye_on.svg';
import EyeOffIcon from '../../src/images/eye_off.svg';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { postSignUp } from '@/apis/api';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConform, setPasswordConform] = useState('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlePasswordConformChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordConform(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const result = await postSignUp('dssdsdf@sdfs.sdf', 'sd3fsdfsdf');
  };

  return (
    <S.Layout>
      <S.Inner>
        <Link href='/'>
          <Image src={LogoIcon} alt='Linkbrary logo' width='211' height='38' />
        </Link>
        <S.TextWrap>
          <S.Text>이미 회원이신가요?</S.Text>
          <S.SignLink href='/signin'>로그인 하기</S.SignLink>
        </S.TextWrap>
        <S.Form onSubmit={handleSubmit} method='POST'>
          <S.FormField>
            <S.Label htmlFor='email'>이메일</S.Label>
            <S.Input
              id='email'
              type='email'
              placeholder='이메일을 입력해 주세요.'
              value={email}
              onChange={handleEmailChange}
            />
            <S.ErrorMessage></S.ErrorMessage>
          </S.FormField>
          <S.FormField>
            <S.Label htmlFor='password'>비밀번호</S.Label>
            <S.PasswordWrap>
              <S.Input
                id='password'
                type='password'
                placeholder='영문, 숫자를 조합해 8자 이상 입력해 주세요.'
                value={password}
                onChange={handlePasswordChange}
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
            <S.ErrorMessage></S.ErrorMessage>
          </S.FormField>
          <S.FormField>
            <S.Label htmlFor='passwordConfirm'>비밀번호 확인</S.Label>
            <S.PasswordWrap>
              <S.Input
                id='passwordConfirm'
                type='password'
                placeholder='비밀번호와 일치하는 값을 입력해 주세요.'
                value={passwordConform}
                onChange={handlePasswordConformChange}
              />
              <S.EyeButton type='button' id='passwordConfirmEyeButton'>
                <Image
                  src={EyeOffIcon}
                  alt='안 보이기'
                  width='16'
                  height='16'
                />
              </S.EyeButton>
            </S.PasswordWrap>
            <S.ErrorMessage></S.ErrorMessage>
          </S.FormField>
          <S.SubmitButton text='회원가입' type='submit' />
        </S.Form>
        <S.SnsWrap>
          <S.SnsTitle>다른 방식으로 가입하기</S.SnsTitle>
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
