import React, { useState } from "react";

export function PasswordInput() {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordBlur = () => {
    if (!password) {
      setPasswordError("비밀번호를 입력해 주세요.");
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className="input__section password-section">
      <label className="text">
        비밀번호
        <br />
      </label>
      <input
        id="password"
        className={`user-input ${passwordError ? "error-input" : ""}`}
        type="password"
        name="password"
        value={password}
        onChange={handlePasswordChange}
        onBlur={handlePasswordBlur}
      />
      <i className="fa fa-eye fa-lg"></i>
      <div
        id="password-errorText"
        className={`errortext ${passwordError ? "" : "error"}`}
      >
        {passwordError}
      </div>
    </div>
  );
}
