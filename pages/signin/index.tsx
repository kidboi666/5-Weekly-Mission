import { useContext, useEffect, useState } from 'react';
import { FontSM, Relative } from '@/styles/commonStyle';
import { JoinBody, JoinAccessControlBox, JoinSocial, JoinTitle, JoinWrap } from '../../styles/loginStyle';
import { ErrorText, FormRowBox, FormWrap } from '@/components/join/formStyle';
import LinkButton from '@/components/common/atoms/LinkButton';
import Button from '@/components/common/atoms/Button';
import { loginForm } from '@/components/join/interfase';
import { joinInstance } from '@/lib/axios';
import { AuthContext } from '@/lib/auto.context';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import Loading from '@/components/loading/Loading';

const BASE_PAGE_URL = '/';
const SIGNIN_PAGE_URL = '/signin';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req, resolvedUrl } = context;
  if (!req) return { props: {} };

  const isSigninPage = resolvedUrl === SIGNIN_PAGE_URL;

  if (req.headers.referer) {
    // 내부 접속
    if (req.headers.cookie) {
      return {
        redirect: {
          destination: req.headers.referer,
          permanent: false,
        },
      };
    }
  }

  if (!req.headers.referer) {
    //외부 접속
    if (req.headers.cookie) {
      return {
        redirect: {
          destination: BASE_PAGE_URL,
          permanent: false,
        },
      };
    }
  }

  if (!req.headers.cookie && !isSigninPage) {
    return {
      redirect: {
        destination: SIGNIN_PAGE_URL,
        permanent: false,
      },
    };
  }

  return { props: {} };
}

export default function SignIn() {
  const router = useRouter();
  const { handleLogin } = useContext(AuthContext);
  const [IsVisibility, setIsVisibility] = useState(false);
  const [isStylesLoaded, setIsStylesLoaded] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<loginForm>({ mode: 'onBlur' });

  const handleLoginCheck = async (email: loginForm['email'], password: loginForm['password']) => {
    try {
      const res = await joinInstance.post('/sign-in', { email, password });
      const { data } = res;
      if (data) {
        handleLogin(data.data.accessToken);
        router.push('/folder');
      }
    } catch {
      setError('email', { message: '이메일을 확인해 주세요.' });
      setError('password', { message: '비밀번호를 확인해 주세요.' });
      return;
    }
  };

  const handleValid = (data: loginForm) => {
    const { email, password } = data;
    handleLoginCheck(email, password);
  };

  useEffect(() => {
    if (localStorage.getItem('linkbrary')) {
      alert('로그인한 상태입니다.');
      router.push('/folder');
    }
    setIsStylesLoaded(true);
  }, [router]);

  if (!isStylesLoaded) return <Loading />;

  return (
    <JoinWrap className='no-header--container signin__wrap'>
      <JoinBody>
        <JoinTitle>
          <LinkButton $link={`/`}>
            <Image
              src='/assets/logo/logo.svg'
              alt='linkbrary'
              width={202}
              height={38}
            />
          </LinkButton>
        </JoinTitle>
        <JoinAccessControlBox className='login__sign'>
          <span>회원이 아니신가요?</span>
          <LinkButton $link={`/signup`}>회원 가입하기</LinkButton>
        </JoinAccessControlBox>
        <FormWrap>
          <form onSubmit={handleSubmit(handleValid)}>
            <FormRowBox className='input__id'>
              <label
                htmlFor='input__id-element'
                className='input__id-label'>
                이메일
              </label>
              <input
                {...register('email', {
                  required: '이메일을 입력해 주세요.',
                  pattern: {
                    value: /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/,
                    message: '올바른 이메일 주소가 아닙니다',
                  },
                })}
                type='email'
                name='email'
                id='input__id-element'
                className={errors.email ? 'error' : ''}
              />
              <ErrorText className='error__text'>{errors.email?.message}</ErrorText>
            </FormRowBox>
            <FormRowBox className='input__password'>
              <label
                htmlFor='input__password-element'
                className='input__password-label'>
                비밀번호
              </label>
              <Relative>
                <input
                  {...register('password', {
                    required: '비밀번호를 입력해 주세요',
                    pattern: {
                      value: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                      message: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
                    },
                  })}
                  type={IsVisibility ? 'text' : 'password'}
                  name='password'
                  id='input__password-element'
                  className={errors.password ? 'error' : ''}
                />
                <Button
                  $btnClass={'button--input-password'}
                  onclick={() => setIsVisibility((prev) => !prev)}>
                  <Image
                    src={`/assets/icon/icon-eye-${IsVisibility ? 'on' : 'off'}.svg`}
                    alt='비밀번호 보기'
                    width={16}
                    height={16}
                  />
                </Button>
              </Relative>
              <ErrorText className='error__text'>{errors.password?.message}</ErrorText>
            </FormRowBox>
            <Button
              $type='submit'
              $btnClass={`button--gradient large btn_login`}>
              로그인
            </Button>
          </form>
        </FormWrap>
        <JoinSocial>
          <FontSM as={'h6'}>소셜 로그인</FontSM>
          <div className='login__sns'>
            <LinkButton
              $link={'https://www.google.co.kr/?hl=ko'}
              $target='_blank'>
              <Image
                fill
                src='/assets/icon/icon_google.png'
                alt='구글로고'
                sizes='40px 40px'
              />
            </LinkButton>
            <LinkButton
              $link={'https://www.kakaocorp.com/page/'}
              $target='_blank'>
              <Image
                fill
                src='/assets/icon/icon_kakao.png'
                alt='카카오로고'
                sizes='40px 40px'
              />
            </LinkButton>
          </div>
        </JoinSocial>
      </JoinBody>
    </JoinWrap>
  );
}
