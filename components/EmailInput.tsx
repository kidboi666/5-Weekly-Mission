import React, { useState } from "react";
import styles from "@/styles/signin.module.scss";

export function emailCheck(email) {
  const emailForm =
    /^[0-9a-zA-Z]([_\\.\\-]?[0-9a-zA-Z])*@[0-9a-zA-Z]([_\\.\\-]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return emailForm.test(email);
}

export function EmailInput() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailBlur = () => {
    if (!email) {
      setEmailError("이메일을 입력하세요.");
    } else {
      const emailChecked = emailCheck(email);
      if (emailChecked) {
        setEmailError("");
      } else {
        setEmailError("올바른 이메일 주소가 아닙니다.");
      }
    }
  };

  return (
    <div className="input__section">
      <label className="text">
        이메일
        <br />
      </label>
      <input
        id="email"
        className={`${styles["user-input"]} ${
          emailError ? styles["error-input"] : ""
        }`}
        type="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
      />
      <div
        id="email-errorText"
        className={`errortext ${emailError ? "" : "error"}`}
      >
        {emailError}
      </div>
    </div>
  );
}
