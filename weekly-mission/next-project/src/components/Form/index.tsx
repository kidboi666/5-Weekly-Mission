import React, { useEffect } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Image from "next/image";
import logoSrc from "../../images/Linkbrary.png";
import KaKaoImg from "../../images/kakao.png";
import GoogleImg from "../../images/google.png";
import InputField from "@components/Input";
import styles from "./Form.module.css";

interface FormValues {
  email: string;
  password: string;
  passwordConfirmation?: string;
}

interface FormProps {
  onSubmit: (data: FormValues) => void;
  checkEmailDuplication?: (email: string) => Promise<void>;
  headermessage: string;
  headerlink: string;
  buttonText: string;
  socialProvidersText: string;
  isPasswordConfirmation: boolean;
  isSignUp: boolean;
  errorMessage: { email?: string; password?: string };
}

const Form = ({
  onSubmit,
  checkEmailDuplication,
  headermessage,
  headerlink,
  buttonText,
  socialProvidersText,
  isPasswordConfirmation,
  isSignUp,
  errorMessage,
}: FormProps) => {
  const {
    handleSubmit,
    register,
    watch,
    setError,
    clearErrors,
    formState: { errors },
    trigger,
  } = useForm<FormValues>({ mode: "onBlur" });

  const password = watch("password");
  const passwordConfirmation = watch("passwordConfirmation");

  useEffect(() => {
    if (isPasswordConfirmation && passwordConfirmation !== undefined) {
      if (password !== passwordConfirmation) {
        setError("passwordConfirmation", {
          type: "validate",
          message: "비밀번호가 일치하지 않아요.",
        });
      } else {
        clearErrors("passwordConfirmation");
      }
    }
  }, [passwordConfirmation, setError, clearErrors, isPasswordConfirmation]);

  // focusin 이벤트 핸들러
  const onFocusIn = (fieldName: keyof FormValues) => {
    clearErrors(fieldName);
  };

  const handleEmailBlur = async (event: React.FocusEvent<HTMLInputElement>) => {
    const { value } = event.target;
    // 이메일 필드의 유효성 검사를 수행하고, 검사 결과를 확인
    const isValid = await trigger("email");

    // 이메일이 유효하지 않은 경우, 중복 검사를 수행하지 않고 함수 종료
    if (!isValid) {
      return;
    }

    if (checkEmailDuplication) {
      // 중복 검사를 수행
      await checkEmailDuplication(value);
    }
  };

  const handlePasswordBlur = async (
    event: React.FocusEvent<HTMLInputElement>
  ) => {
    // 비밀번호 필드의 유효성 검사를 수행하고, 검사 결과를 확인
    await trigger("password");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form_container}>
      <div className={styles.header_container}>
        <Image src={logoSrc} alt="Logo" width={210.58} height={38} />
        <div className={styles.header_content}>
          <span className={styles.header_message}>{headermessage}</span>
          <Link
            href={headerlink === "회원가입 하기" ? "/signup" : "/signin"}
            className={styles.header_link}
          >
            {headerlink}
          </Link>
        </div>
      </div>
      <div className={styles.input_container}>
        <InputField
          type="email"
          label="이메일"
          placeholder="이메일을 입력해주세요."
          register={register("email", {
            required: "이메일을 입력해주세요.",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "올바른 이메일 주소가 아닙니다.",
            },
          })}
          error={errors.email?.message || errorMessage}
          onFocus={() => onFocusIn("email")}
          onBlur={handleEmailBlur}
        />

        <InputField
          type="password"
          label="비밀번호"
          placeholder={
            isSignUp
              ? "영문, 숫자를 조합해 8자 이상 입력해 주세요."
              : "비밀번호를 입력해주세요."
          }
          register={register("password", {
            required: "비밀번호를 입력해주세요.",
            ...(isSignUp && {
              minLength: {
                value: 8,
                message: "비밀번호는 영문, 숫자 조합 8자 이상이어야 합니다.",
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
                message: "비밀번호는 영문, 숫자 조합이어야 합니다.",
              },
            }),
          })}
          error={errors.password?.message || errorMessage}
          onFocus={() => onFocusIn("password")}
          onBlur={handlePasswordBlur}
        />

        {isPasswordConfirmation && (
          <InputField
            type="confirmPassword"
            label="비밀번호 확인"
            placeholder="비밀번호와 일치하는 값을 입력해주세요."
            register={register("passwordConfirmation", {
              required: "비밀번호와 일치하는 값을 입력해주세요.",
            })}
            error={errors.passwordConfirmation?.message}
            onFocus={() => onFocusIn("passwordConfirmation")}
          />
        )}
      </div>
      <button type="submit" className={styles.signbutton}>
        {buttonText}
      </button>
      <div className={styles.socialProviders_container}>
        <p>{socialProvidersText}</p>
        <div className={styles.socialProviders_icon}>
          <Link href="https://www.google.com">
            <Image src={GoogleImg} alt="구글 아이콘" width={42} height={42} />
          </Link>
          <Link href="https://www.kakaocorp.com/page">
            <Image
              src={KaKaoImg}
              alt="카카오톡 아이콘"
              width={42}
              height={42}
            />
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Form;
