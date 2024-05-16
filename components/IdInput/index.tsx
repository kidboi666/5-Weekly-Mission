import { ChangeEvent, useState } from 'react';
import styles from '@/components/IdInput/index.module.css';

export interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  isError: boolean;
  ErrorMsg: string;
  onBlur: () => void;
}

function IdInput({
  value,
  onChange,
  placeholder,
  isError,
  ErrorMsg,
  onBlur,
}: InputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
  };

  return (
    <>
      <div className={styles.input__wrapper}>
        <input
          type="text"
          placeholder={placeholder}
          alt="아이디 인풋 폼"
          value={value}
          onChange={handleChange}
          onBlur={onBlur}
          className={`${styles.input__form} ${isError ? styles.error : ''}`}
        />
      </div>
      {isError && <p className={styles.error__msg}>{ErrorMsg}</p>}
    </>
  );
}

export default IdInput;
