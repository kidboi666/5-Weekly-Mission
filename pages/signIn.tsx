import facebookIcon from "@/assets/icons/facebook_icon.svg";
import googleIcon from "@/assets/icons/google_icon.svg";
import logo from "@/assets/icons/logo.svg";
import { Input, Button } from "@/components";
import { ALPHANUMERIC_REGX, EMAIL_REGX, INPUT_MSG } from "@/constants/strings";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { loginAccess, userInfoAccess } from "@/redux/actions/auth";
import { openToast } from "@/redux/reducers/toast";
import * as S from "@/styles/signIn.styled";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface Inputs {
  email: string;
  password: string;
}

const SignInPage = () => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { handleSubmit, control } = useForm<Inputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (value) => {
    if (value.email && value.password) {
      const res = await dispatch(
        loginAccess({ email: value.email, password: value.password }),
      );
      if (res.meta.requestStatus === "fulfilled") {
        return dispatch(userInfoAccess());
      }
      return dispatch(openToast("wrongAccount"));
    }
  };

  useEffect(() => {
    if (isLoggedIn) router.push("/folder");
  }, [isLoggedIn]);

  return (
    <S.SignInLayout>
      <S.SignInContainer>
        <S.HeaderContainer>
          <Link href="/">
            <S.ImgBox>
              <Image fill src={logo} alt="Linkbrary" />
            </S.ImgBox>
          </Link>
          <p>
            회원이 아니신가요?
            <Link href="/signup">
              <Button variant="underBar" text="회원 가입하기" />
            </Link>
          </p>
        </S.HeaderContainer>
        <S.SignContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <S.EmailContainer>
              <label htmlFor="email">이메일</label>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: { value: true, message: INPUT_MSG.inputEmail },
                  maxLength: { value: 30, message: INPUT_MSG.emailLength },
                  pattern: {
                    value: EMAIL_REGX,
                    message: INPUT_MSG.wrongEmailForm,
                  },
                }}
                render={({ field, fieldState: { error } }) => (
                  <Input
                    {...field}
                    type="email"
                    placeholder="codeit@codeit.kr"
                    error={error}
                  />
                )}
              />
            </S.EmailContainer>
            <S.PasswordContainer>
              <label htmlFor="password">비밀번호</label>
              <Controller
                name="password"
                control={control}
                rules={{
                  required: { value: true, message: INPUT_MSG.inputPw },
                  maxLength: { value: 20, message: INPUT_MSG.pwLength },
                  pattern: {
                    value: ALPHANUMERIC_REGX,
                    message: INPUT_MSG.wrongPwForm,
                  },
                }}
                render={({ field, fieldState: { error } }) => (
                  <Input
                    {...field}
                    type="password"
                    placeholder="******"
                    error={error}
                  />
                )}
              />
            </S.PasswordContainer>
            <Button variant="default" type="submit" text="로그인" />
          </form>
        </S.SignContainer>
        <S.SocialContainer>
          <div>
            <p>소셜 로그인</p>
            <div>
              <Link href="https://www.google.com/">
                <Image src={googleIcon} alt="google" />
              </Link>
              <Link href="https://www.kakaocorp.com/page/">
                <Image src={facebookIcon} alt="kakao" />
              </Link>
            </div>
          </div>
        </S.SocialContainer>
      </S.SignInContainer>
    </S.SignInLayout>
  );
};

export default SignInPage;
