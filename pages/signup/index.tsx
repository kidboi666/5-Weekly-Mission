import Link from 'next/link';
import Image from 'next/image';
import * as S from '../../styles/Auth.styled';
import LogoIcon from '../../src/images/logo.svg';
import GoggleIcon from '../../src/images/login_google.png';
import KakaotalkIcon from '../../src/images/login_kakaotalk.png';

export default function SignUpPage() {
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
          <S.FormField>
            <S.Label htmlFor='passwordConfirm'>비밀번호 확인</S.Label>
            <S.PasswordWrap>
              <S.Input id='passwordConfirm' type='password' />
              <S.EyeButton
                type='button'
                id='passwordConfirmEyeButton'
              ></S.EyeButton>
            </S.PasswordWrap>
            <S.ErrorMessage></S.ErrorMessage>
          </S.FormField>
          <S.SubmitButton text='회원가입' />
        </S.Form>
        <S.SnsWrap>
          <S.SnsTitle>다른 방식으로 가입하기</S.SnsTitle>
          <S.SnsList>
            <li>
              <Link href='https://www.google.com/'>
                <Image src={GoggleIcon} alt='구글 로그인' />
              </Link>
            </li>
            <li>
              <Link href='https://www.kakaocorp.com/page/'>
                <Image src={KakaotalkIcon} alt='카카오톡 로그인' />
              </Link>
            </li>
          </S.SnsList>
        </S.SnsWrap>
      </S.Inner>
    </S.Layout>
  );
}
