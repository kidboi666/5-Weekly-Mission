import { Input } from "../ui";
import { useState } from "react";

export const PasswordCheckInput = function ({
  passwordCheck,
  setPasswordCheck,
  passwordCheckError,
  setPasswordCheckError,
  checkPasswordCheck,
}) {
  const [passwordCheckShown, setPasswordCheckShown] = useState(false);
  const togglePasswordCheckVisibility = () => {
    setPasswordCheckShown(!passwordCheckShown);
  };
  const handlePasswordCheckChange = (e) => {
    setPasswordCheck(e.target.value || "");
  };
  const validateCheckPassword = () => {
    const message = checkPasswordCheck(passwordCheck);
    setPasswordCheckError(message);
  };
  const cancelPasswordCheckError = () => {
    if (!passwordCheck) {
      setPasswordCheckError("");
    }
  };

  return (
    <Input
      type={passwordCheckShown ? "text" : "password"}
      label={"비밀번호"}
      value={passwordCheck}
      onChange={handlePasswordCheckChange}
      onBlur={validateCheckPassword}
      onFocus={cancelPasswordCheckError}
      errorMessage={passwordCheckError}
      password
      togglePassword={togglePasswordCheckVisibility}
      visibility={passwordCheckShown}
    />
  );
};
