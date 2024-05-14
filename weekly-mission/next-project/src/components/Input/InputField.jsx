import { useState } from "react";
import styles from "./InputField.module.css";

const InputField = ({ type, label, placeholder }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  // 이메일 유효성 검사 함수
  const validateEmail = (value) => {
    if (!value) {
      setError("이메일을 입력해주세요.");
    } else if (!value.includes("@")) {
      setError("올바른 이메일 형식이 아닙니다.");
    } else {
      setError("");
    }
  };

  // 비밀번호 유효성 검사 함수
  const validatePassword = (value) => {
    if (!value) {
      setError("비밀번호를 입력하세요.");
    } else {
      setError("");
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // 입력 필드를 벗어날 때 유효성 검사 수행
  const handleBlur = () => {
    if (type === "email") {
      validateEmail(value);
    } else if (type === "password") {
      validatePassword(value);
    }
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
