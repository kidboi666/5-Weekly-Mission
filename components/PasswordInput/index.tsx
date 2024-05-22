import { ChangeEvent, useState } from 'react';
import styles from '@/components/PasswordInput/index.module.css';
import eyeOnIcon from '@/public/eye-on.svg';
import eyeOffIcon from '@/public/eye-off.svg';
import Image from 'next/image';
import type { InputProps } from '@/components/IdInput';

function PasswordInput({
  value,
  onChange,
  placeholder,
  isError,
  ErrorMsg,
  onBlur,
}: InputProps) {
  const [isEyeOn, setIsEyeOn] = useState<boolean>(false);

  const toggleEyeButton = () => {
    setIsEyeOn(!isEyeOn);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
  };

  return (
    <>
      <div className={styles.input__wrapper}>
        <input
          type={isEyeOn ? 'text' : 'password'}
          placeholder={placeholder}
          alt="인풋 폼"
          value={value}
          onChange={handleChange}
          onBlur={onBlur}
          className={`${styles.input__form}  ${isError ? styles.error : ''}`}
        />
        <button
          type="button"
          className={styles.eye__button}
          onClick={toggleEyeButton}
        >
          <Image
            src={!isEyeOn ? eyeOnIcon : eyeOffIcon}
            alt="eye-on-off-button"
          />
        </button>
      </div>
      {isError && <p className={styles.error__msg}>{ErrorMsg}</p>}
    </>
  );
}

export default PasswordInput;
