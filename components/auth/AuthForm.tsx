import { useForm, SubmitHandler, FieldError } from "react-hook-form";
import styled from "styled-components";
import { GRAY3, PRIMARY, WHITE } from "../color";
import { Auth } from "./AuthTypes";
import { signUpApi, tryEmailCheck, tryUserCheck } from "../Api/Api";
import AuthButton from "./AuthButton";
import { FocusEvent, useState } from "react";

type Inputs = {
  Id: string;
  password: string;
  passwordCheck: string;
};

export default function AuthForm({ auth }: { auth: Auth }) {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ mode: "onBlur" });
  const [passShow, setPassShow] = useState<boolean>(false);
  const [passCheckShow, setPassCheckShow] = useState<boolean>(false);

  const IdRegforSignin = {
    required: "이메일을 입력해주세요",
    pattern: {
      value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/,
      message: "올바른 이메일 주소가 아닙니다",
    },
  };
  const IdRegforSignup = {
    required: "이메일을 입력해주세요",
    pattern: {
      value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/,
      message: "올바른 이메일 주소가 아닙니다",
    },
    onBlur: async (e: FocusEvent<HTMLInputElement>) => {
      if (!errors.Id) {
        try {
          await tryEmailCheck(e.target.value);
        } catch (err) {
          setError("Id", {
            type: "ExistedId",
            message: "이미 사용중인 이메일입니다",
          });
        }
      }
    },
  };
  const IdRegister = auth === "signin" ? IdRegforSignin : IdRegforSignup;
  const passwordRegForSignin = {
    required: "비밀번호를 입력해주세요",
  };
  const passwordRegForSignup = {
    required: "비밀번호를 입력해주세요",
    pattern: {
      value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/,
      message: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요",
    },
  };
  const passwordRegister =
    auth === "signin" ? passwordRegForSignin : passwordRegForSignup;
  const passCheckRegister = {
    onBlur: (e: FocusEvent<HTMLInputElement>) => {
      if (watch("password") !== e.target.value) {
        setError("passwordCheck", {
          type: "NotSame",
          message: "비밀번호가 다릅니다",
        });
      } else {
        clearErrors("passwordCheck");
      }
    },
  };
  const passPlaceholder =
    auth === "signin"
      ? "비밀번호를 입력해주세요"
      : "영문, 숫자를 조합해 8자 이상 입력해 주세요";
  const authType = auth === "signin" ? "로그인" : "회원가입";

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (auth === "signin") {
      try {
        await tryUserCheck(data);
      } catch (err) {
        setError("password", {
          type: "checkPassword",
          message: "비밀번호를 확인해주세요",
        });
        setError("Id", {
          type: "CheckId",
          message: "아이디를 확인해주세요",
        });
      }
    } else {
      try {
        await signUpApi(data);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="Id">아이디</Label>
      <Div>
        <Input
          id="Id"
          placeholder="이메일을 입력해주세요"
          type="text"
          className={errors.Id ? "err" : ""}
          aria-invalid={errors.Id ? "true" : "false"}
          {...register("Id", IdRegister)}
        />
        {errors.Id && <ErrorMessage>{errors?.Id?.message}</ErrorMessage>}
      </Div>
      <Label htmlFor="password">비밀번호</Label>
      <Div>
        <Input
          id="password"
          placeholder={passPlaceholder}
          type={passShow ? "text" : "password"}
          className={errors.password ? "err" : ""}
          aria-invalid={errors.password ? "true" : "false"}
          {...register("password", passwordRegister)}
        />
        <AuthButton target={setPassShow} />
        {errors.password && (
          <ErrorMessage>{errors?.password?.message}</ErrorMessage>
        )}
      </Div>
      {auth === "signup" && (
        <>
          <Label htmlFor="passwordCheck">비밀번호 확인</Label>
          <Div>
            <Input
              id="passwordCheck"
              placeholder="비밀번호와 일치하는 값을 입력해주세요"
              type={passCheckShow ? "text" : "password"}
              className={errors.passwordCheck ? "err" : ""}
              aria-invalid={errors.passwordCheck ? "true" : "false"}
              {...(register("passwordCheck"), passCheckRegister)}
            />
            <AuthButton target={setPassCheckShow} />
            {errors.passwordCheck && (
              <ErrorMessage>{errors?.passwordCheck?.message}</ErrorMessage>
            )}
          </Div>
        </>
      )}

      <SubmitButton value={authType} type="submit" />
    </Form>
  );
}

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;
const Input = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 18px 31px 18px 15px;
  border-radius: 8px;
  border: 1px solid ${GRAY3};
  background: ${WHITE};
  outline: none;
  color: #373740;
  font-size: 16px;
  line-height: 24px;

  &:focus {
    border-color: ${PRIMARY};
  }

  &.err {
    border-color: #ff5b56;
  }
`;

const SubmitButton = styled.input`
  display: flex;
  max-width: 400px;
  width: 100%;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  color: #f5f5f5;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin-top: 6px;
  cursor: pointer;
`;

const Label = styled.label`
  color: #000;
  font-size: 14px;
  line-height: normal;
  margin-bottom: 12px;
`;

const Div = styled.div`
  display: flex;
  max-width: 400px;
  width: 100%;
  flex-direction: column;
  row-gap: 6px;
  margin-bottom: 24px;
  position: relative;
`;

const ErrorMessage = styled.strong`
  color: #ff5b56;

  font-size: 14px;
  font-weight: 400;
  line-height: normal;
`;
