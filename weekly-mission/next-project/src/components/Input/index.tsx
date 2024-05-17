import React, { ChangeEvent, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import styles from "./InputField.module.css";

interface InputFieldProps {
  type: "email" | "password" | "confirmPassword";
  label: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: string;
  onFocus?: () => void;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  label,
  placeholder,
  register,
  error,
  onFocus,
}: InputFieldProps) => {
  return (
    <div className={styles.input_container}>
      <label htmlFor={type} className={styles.label}>
        {label}
      </label>
      <div
        className={`${styles.input_wrapper} ${
          error ? styles.error_wrapper : ""
        }`}
      >
        <input
          type={type === "confirmPassword" ? "password" : type}
          placeholder={placeholder}
          {...register}
          className={styles.input_form}
          onFocus={onFocus}
        />
      </div>
      {error && <p className={styles.input_error}>{error}</p>}
    </div>
  );
};

export default InputField;
