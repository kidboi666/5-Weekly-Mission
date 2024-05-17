import Link from 'next/link';
import Image from 'next/image';
import * as S from '../../styles/Auth.styled';
import LogoIcon from '../../src/images/logo.svg';
import GoggleIcon from '../../src/images/login_google.svg';
import KakaotalkIcon from '../../src/images/login_kakaotalk.svg';

export default function SignInPage() {
  return (
    <S.Layout>
      <S.Inner>
        <Link href='/'>
          <Image src={LogoIcon} alt='Linkbrary logo' width='211' height='38' />
        </Link>
        <S.TextWrap>
          <S.Text>회원이 아니신가요?</S.Text>
          <S.SignLink href='/signup'>회원 가입하기</S.SignLink>
        </S.TextWrap>
        <S.Form>
          <S.FormField>
            <S.Label htmlFor='email'>이메일</S.Label>
            <S.Input id='email' type='email' />
            <S.ErrorMessage></S.ErrorMessage>
          </S.FormField>
          <S.FormField>
            <S.Label htmlFor='password'>비밀번호</S.Label>
            <S.PasswordWrap>
              <S.Input id='password' type='password' />
              <S.EyeButton type='button' id='passwordEyeButton'></S.EyeButton>
            </S.PasswordWrap>
            <S.ErrorMessage></S.ErrorMessage>
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
