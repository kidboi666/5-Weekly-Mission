import IdInput from '@/components/IdInput';
import PasswordInput from '@/components/PasswordInput';
import LogoIcon from '@/public/logo.svg';
import Image from 'next/image';
import S from './index.module.css';
import Link from 'next/link';
import googleIcon from '@/public/googlesns.svg';
import kakaoIcon from '@/public/kakaosns.svg';

export default function SignUpPage() {
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
          <div className={S.idInputWrapper}>
            <label className={S.idInputLabel}>이메일</label>
            <IdInput placeholder={'이메일을 입력해 주세요'} />
          </div>
          <div className={S.pwdInputWrapper}>
            <label className={S.pwdInputLabel}>비밀번호</label>
            <PasswordInput
              placeholder={'영문, 숫자를 조합해 8자 이상 입력해 주세요.'}
            />
          </div>
          <div className={S.pwdCheckInputWrapper}>
            <label className={S.pwdCheckInputLabel}>비밀번호 확인</label>
            <PasswordInput
              placeholder={'비밀번호와 일치하는 값을 입력해 주세요'}
            />
          </div>
          <button className={S.signInBtn}> 회원가입</button>
          <div className={S.snsLink}>
            <p> 다른 방식으로 가입하기</p>
            <div className={S.snsLinkIcon}>
              <button>
                <Image src={googleIcon} alt="구글 아이콘" />
              </button>
              <button>
                <Image src={kakaoIcon} alt="카카오 아이콘" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
