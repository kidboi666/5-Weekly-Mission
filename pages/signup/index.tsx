import { FontSM, Relative } from "@/styles/commonStyle";
import LinkButton from "@/components/common/atoms/LinkButton";
import Button from "@/components/common/atoms/Button";
import { ErrorText, FormRowBox, FormWrap } from "@/components/join/formStyle";
import { JoinAccessControlBox, JoinBody, JoinTitle, JoinWrap, JoinSocial } from "../login/loginStyle";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { joinInstance } from "@/lib/axios";
import { useRouter } from "next/router";

interface IFormValues {
  signUpEmail: string;
  signUpPassword:string;
  signUpPasswordConfirm:string;
}

type fomInitial = keyof IFormValues;

export default function SignUp() {
  const router = useRouter();
  const [pwVisibility, setPwVisibility] = useState<Boolean>(false)
  const [pwConfirmVisibility, setPwConfirmVisibility] = useState<Boolean>(false)
  const {register, handleSubmit, formState: {errors}, setError, setValue} = useForm<IFormValues>({mode:'onBlur'})

  const handleEmailCheck = async (data:IFormValues['signUpEmail']) => {
    let response ;
    try {
      response = await joinInstance.post('/check-email', { email: data });
      if(response?.status === 200 ) {
        return true;
      } 
    } catch {
      setError("signUpEmail", { message :  "사용중인 이메일 입니다." },{ shouldFocus:true });
      return ;
    }
  }

  const handlePassWordCheck = (password:IFormValues['signUpPassword'], passwordConfirm:IFormValues['signUpPasswordConfirm']) => {
    if(password !== passwordConfirm) {
      setError("signUpPasswordConfirm", { message :  "비밀번호가 다릅니다." },{ shouldFocus:true });
    }
  }

  const onValid =  (data:IFormValues) => {
    const reset = Object.keys(data);

    // 비밀번호 같은지 확인
    handlePassWordCheck(data.signUpPassword, data.signUpPasswordConfirm)

    // input 초기화
    for (let key of reset) {
      setValue(key as fomInitial , '')  ;
    }

    router.push('/folder')
  }
  return   (
    <JoinWrap className="no-header--container login__wrap">
      <JoinBody>
        <JoinTitle>
          <LinkButton $link={`/`}>
            <img src="/assets/logo/logo.svg" alt="linkbrary" />
          </LinkButton>
        </JoinTitle>
        <JoinAccessControlBox className="login__sign">
          <span>이미 회원이신가요?</span>
          <LinkButton $link={`/login`}>
            로그인 하기
          </LinkButton>
        </JoinAccessControlBox>
        <FormWrap>
          <form onSubmit={handleSubmit(onValid)}>
              {/* 이메일 */}
            <FormRowBox className="input__id">
              <label htmlFor="input__id-element" className="input__id-label">이메일</label>
              <input {...register("signUpEmail", { 
                required:'이메일을 입력해 주세요.',
                pattern: {
                  value:/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/,
                  message:'올바른 이메일 주소가 아닙니다'
                },
                validate: (value) => !value.includes('no'),
                onBlur: (e) => handleEmailCheck(e.target.value),
              })} 
              type="text" id="input__id-element" placeholder="이메일을 입력해 주세요." />
              {/* onBlur: (e) => handleEmailCheck(e.target.value) == undefined || '있는 아이디', */}
              <ErrorText className="error__text">{errors.signUpEmail?.message}</ErrorText>
            </FormRowBox>
            {/* 비밀번호 */}
            <FormRowBox className="input__password">
              <label htmlFor="input__password-element" className="input__password-label">비밀번호</label>
              <Relative>
              <input {...register("signUpPassword", { 
                required:'비밀번호를 입력해 주세요', 
                pattern: {
                  value:/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                  message:'비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.'
                },
                })} 
                type={pwVisibility ? 'text' : 'password'} id="input__password-element" placeholder="비밀번호를 입력해 주세요." />
                <Button $btnClass={'button--input-password'} onclick={() => setPwVisibility((prev) => !prev)}>
                  <img src={`/assets/icon/icon-eye-${pwVisibility ? 'on' : 'off'}.svg`} alt="비밀번호 보기" />
                </Button>
              </Relative>
              <ErrorText className="error__text">{errors.signUpPassword?.message}</ErrorText>
            </FormRowBox>
            {/* 비밀번호 확인*/}
            <FormRowBox className="input__password__confilrm">
              <label htmlFor="input__password-confilrm" className="input__password-label">비밀번호 확인</label>
              <Relative>
              <input {...register("signUpPasswordConfirm", { 
                required:'비밀번호를 다시 한번 입력해 주세요', 
                pattern: {
                  value:/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                  message:'비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.'
                },
                })} 
                type={pwConfirmVisibility ? 'text' : 'password'} id="input__password-confilrm" placeholder="비밀번호 확인을 입력해 주세요." />
                <Button $btnClass={'button--input-password'} onclick={() => setPwConfirmVisibility((prev) => !prev)}>
                  <img src={`/assets/icon/icon-eye-${pwConfirmVisibility ? 'on' : 'off'}.svg`} alt="비밀번호 보기" />
                </Button>
              </Relative>
              <ErrorText className="error__text">{errors.signUpPasswordConfirm?.message}</ErrorText>
            </FormRowBox>
            <Button $type="submit" $btnClass={`button--gradient large btn_login`}>회원가입</Button>
          </form>
        </FormWrap>
        <JoinSocial>
          <FontSM as={'h6'}>다른 방식으로 가입하기</FontSM>
          <div className="login__sns">
            <LinkButton $link={'https://www.google.co.kr/?hl=ko'}>
              <img src="/assets/icon/icon_google.png" alt="구글로고" />
            </LinkButton>
            <LinkButton $link={'https://www.kakaocorp.com/page/'}>
              <img src="/assets/icon/icon_kakao.png" alt="카카오로고" />
            </LinkButton>
          </div>
        </JoinSocial>
      </JoinBody>
    </JoinWrap>
  )
}