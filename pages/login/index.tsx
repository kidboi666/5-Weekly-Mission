import { FontSM, Relative } from "@/styles/commonStyle";
import { JoinBody, JoinAccessControlBox, JoinSocial, JoinTitle, JoinWrap } from "./loginStyle";
import LinkButton from "@/components/common/atoms/LinkButton";
import Button from "@/components/common/atoms/Button";
import { ErrorText, FormRowBox, FormWrap } from "@/components/join/formStyle";

export default function Login() {
  
  return (
    <JoinWrap className="no-header--container login__wrap">
      <JoinBody>
        <JoinTitle>
          <LinkButton $link={`/`}>
            <img src="/assets/logo/logo.svg" alt="linkbrary" />
          </LinkButton>
        </JoinTitle>
        <JoinAccessControlBox className="login__sign">
          <span>회원이 아니신가요?</span>
          <LinkButton $link={`/signup`}>
            회원 가입하기
          </LinkButton>
        </JoinAccessControlBox>
        <FormWrap>
          <form>
            <FormRowBox className="input__id">
              <label htmlFor="input__id-element" className="input__id-label">이메일</label>
              <input type="text" name="email" id="input__id-element" />
              <ErrorText className="error__text"></ErrorText>
            </FormRowBox>
            <FormRowBox className="input__password">
              <label htmlFor="input__password-element" className="input__password-label">비밀번호</label>
              <Relative>
                <input type="password" name="password" id="input__password-element" />
                <button type="button" className="input__toggle btn__pw">
                  <img src="/assets/icon/icon-eye-on.svg" alt="비밀번호 보기" className="pw__on" />
                  {/* <img src="/assets/icon/icon-eye-off.svg" alt="비밀번호 숨기기" className="pw__off" /> */}
                </button>
              </Relative>
              <ErrorText className="error__text"></ErrorText>
            </FormRowBox>
            <Button $btnClass={`button--gradient large btn_login`}>로그인</Button>
          </form>
        </FormWrap>
        <JoinSocial>
          <FontSM as={'h6'}>소셜 로그인</FontSM>
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