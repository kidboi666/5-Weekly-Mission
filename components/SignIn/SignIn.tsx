import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import * as S from './SignIn.styled';
import { facebookIcon, googleIcon, logo } from '@/assets/icons';

interface Inputs {
  email: string;
  password: string;
  passwordConfirm: string;
}

const SignIn: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (data.email && data.password) {
      setIsLoggedIn(true);
      router.push('/folderPage');
    }
  };

  useEffect(() => {
    if (isLoggedIn) router.push('/folderPage');
  }, [isLoggedIn]);

  return (
    <S.SignInLayout>
      <S.SignInContainer>
        <S.HeaderContainer>
          <Link href='/'>
            <S.ImgBox>
              <Image fill src={logo} alt='Linkbrary' />
            </S.ImgBox>
          </Link>
          <p>
            회원이 아니신가요?
            <Link href='/signup'>
              <Button variant='underBar'>회원 가입하기</Button>
            </Link>
          </p>
        </S.HeaderContainer>
        <S.SignContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <S.EmailContainer>
              <label htmlFor='email'>이메일</label>
              <Controller
                name='email'
                control={control}
                rules={{
                  required: '이메일을 입력해주세요.',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: '올바른 이메일 주소가 아닙니다.',
                  },
                  validate: async (value) => {
                    const res = await fetch('/api/check-email', {
                      method: 'POST',
                      body: JSON.stringify({ email: value }),
                    });
                    const data = await res.json();
                    if (!res.ok) {
                      throw new Error(data.message || '서버 오류입니다.');
                    }
                    if (!data.available) {
                      throw new Error('이미 사용 중인 이메일입니다.');
                    }
                  },
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    type='email'
                    placeholder='이메일을 입력해 주세요.'
                    error={errors.email?.message}
                  />
                )}
              />
            </S.EmailContainer>
            <S.PasswordContainer>
              <label htmlFor='password'>비밀번호</label>
              <Controller
                name='password'
                control={control}
                rules={{
                  required: '비밀번호를 입력해주세요.',
                  minLength: {
                    value: 8,
                    message:
                      '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
                  },
                  pattern: {
                    value: /^(?=.*[a-zA-Z])(?=.*\d)/,
                    message:
                      '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
                  },
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    type='password'
                    placeholder='******'
                    error={errors.password?.message}
                  />
                )}
              />
            </S.PasswordContainer>
            <S.PasswordContainer>
              <label htmlFor='passwordConfirm'>비밀번호 확인</label>
              <Controller
                name='passwordConfirm'
                control={control}
                rules={{
                  required: '비밀번호를 다시 한 번 입력해주세요.',
                  validate: (value) =>
                    value === control.getValues('password') ||
                    '비밀번호가 일치하지 않아요.',
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    type='password'
                    placeholder='******'
                    error={errors.passwordConfirm?.message}
                  />
                )}
              />
            </S.PasswordContainer>
            <Button variant='default' type='submit'>
              로그인
            </Button>
          </form>
        </S.SignContainer>
        <S.SnsContainer>
          <div>
            <p>소셜 로그인</p>
            <div>
              <Link href='https://www.google.com/'>
                <Image src={googleIcon} alt='google' />
              </Link>
              <Link href='https://www.kakaocorp.com/page/'>
                <Image src={facebookIcon} alt='kakao' />
              </Link>
            </div>
          </div>
        </S.SnsContainer>
      </S.SignInContainer>
    </S.SignInLayout>
  );
};

export default SignIn;
