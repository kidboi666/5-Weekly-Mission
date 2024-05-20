import React, { ChangeEvent } from "react";
import styles from "./input.module.css";

interface InputProps {
  label: string;
  type: string;
  placeholder?: string;
  errMsg?: string;
  focusOut?: () => void;
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
  register?: any;
}

const Input = ({
  label,
  type,
  placeholder,
  errMsg,
  focusOut,
  onChange,
  register,
}: InputProps) => {
  return (
    <div className={styles.wrap}>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        className={errMsg ? styles.styledErrInput : styles.styledInput}
        type={type}
        placeholder={placeholder}
        onBlur={focusOut}
        onChange={onChange}
        {...register}
      />
    </div>
  );
};

export default Input;
