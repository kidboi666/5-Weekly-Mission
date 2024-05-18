import React, { ChangeEvent, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import styles from "./InputField.module.css";

interface InputFieldProps {
  type: "email" | "password" | "confirmPassword";
  label: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: string | { email?: string; password?: string };
  onFocus?: () => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  label,
  placeholder,
  register,
  error,
  onFocus,
  onBlur,
}: InputFieldProps) => {
  const renderErrorMessage = () => {
    if (!error) return null;
    if (typeof error === "string") {
      return <p className={styles.input_error}>{error}</p>;
    } else {
      // 에러 객체가 전달된 경우 email과 password에 따라 다른 에러 메시지를 표시
      return (
        <>
          {type === "email" && error.email && (
            <p className={styles.input_error}>{error.email}</p>
          )}
          {type === "password" && error.password && (
            <p className={styles.input_error}>{error.password}</p>
          )}
        </>
      );
    }
  };

  const handleBlur = async (event: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      await onBlur(event); // 외부에서 전달된 onBlur 이벤트 핸들러 실행
    }
  };

  return (
    <div className={styles.input_container}>
      <label htmlFor={type} className={styles.label}>
        {label}
      </label>
      <div
        className={`${styles.input_wrapper} ${
          (typeof error === "string" && error) ||
          (typeof error === "object" &&
            ((type === "email" && error.email) ||
              (type === "password" && error.password)))
            ? styles.error_wrapper
            : ""
        }`}
      >
        <input
          type={type === "confirmPassword" ? "password" : type}
          placeholder={placeholder}
          {...register}
          className={styles.input_form}
          onFocus={onFocus}
          onBlur={handleBlur}
        />
      </div>
      {renderErrorMessage()}
    </div>
  );
};

export default InputField;
