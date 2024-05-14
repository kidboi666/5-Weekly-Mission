import React, { ChangeEvent, useState } from "react";
import styles from "./InputField.module.css";

interface InputFieldProps {
  type: "email" | "password";
  label: string;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  label,
  placeholder,
}: InputFieldProps) => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleBlur = () => {
    if (type === "email") {
      if (!value) {
        setError("이메일을 입력해주세요.");
        return;
      }
      if (!value.includes("@")) {
        setError("올바른 이메일 형식이 아닙니다.");
        return;
      }
    } else if (type === "password") {
      if (!value) {
        setError("비밀번호를 입력하세요.");
        return;
      }
    }
    setError("");
  };

  // 입력 필드에 포커스가 되었을 때 에러 상태 초기화
  const handleFocus = () => {
    setError("");
  };

  return (
    <>
      <label htmlFor={type} className={styles.label}>
        {label}
      </label>
      <div
        className={`${styles.input_wrapper} ${
          error ? styles.error_wrapper : ""
        }`}
      >
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          className={styles.input_form}
        />
      </div>
      {error && <p className={styles.input_error}>{error}</p>}
    </>
  );
};

export default InputField;
