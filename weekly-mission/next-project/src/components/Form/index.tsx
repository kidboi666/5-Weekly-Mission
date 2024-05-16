import React from "react";
import Link from "next/link";

import { useForm } from "react-hook-form";
import Image from "next/image";
import logoSrc from "../../images/Linkbrary.png";
import KaKaoImg from "../../images/kakao.png";
import GoogleImg from "../../images/google.png";
import InputField from "@components/Input";
import styles from "./Form.module.css";

interface FormProps {
  onSubmit: (data: any) => void;
  headermessage: string;
  headerlink: string;
  buttonText: string;
  socialProvidersText: string;
  isPasswordConfirmation: boolean;
}

const Form = ({
  onSubmit,
  headermessage,
  headerlink,
  buttonText,
  socialProvidersText,
  isPasswordConfirmation,
}: FormProps) => {
  const { handleSubmit, register } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form_container}>
      <div className={styles.header_container}>
        <Image src={logoSrc} alt="Logo" width={210.58} height={38} />
        <div className={styles.header_content}>
          <span className={styles.header_message}>{headermessage}</span>
          {headerlink === "회원가입 하기" && (
            <Link href="/signup" className={styles.header_link}>
              {headerlink}
            </Link>
          )}
          {headerlink === "로그인 하기" && (
            <Link href="/signin" className={styles.header_link}>
              {headerlink}
            </Link>
          )}
        </div>
      </div>
      <div className={styles.input_container}>
        <InputField
          type="email"
          label="이메일"
          placeholder="이메일을 입력해주세요."
          {...register("email")}
        />
        <InputField
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          {...register("password")}
        />
        {isPasswordConfirmation && (
          <InputField
            type="confirmPassword"
            label="비밀번호 확인"
            placeholder="비밀번호와 일치하는 값을 입력해주세요."
            {...register("passwordConfirmation")}
          />
        )}
      </div>
      <button type="submit" className={styles.signbutton}>
        {buttonText}
      </button>
      <div className={styles.socialProviders_container}>
        <p>{socialProvidersText}</p>
        <div className={styles.socialProviders_icon}>
          <button>
            <Image src={GoogleImg} alt="구글 아이콘" width={42} height={42} />
          </button>
          <button>
            <Image
              src={KaKaoImg}
              alt="카카오톡 아이콘"
              width={42}
              height={42}
            />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
