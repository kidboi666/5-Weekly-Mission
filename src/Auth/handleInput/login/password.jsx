import { Input } from "../../ui";
import { useState} from "react";

export const PasswordInput = function ({ password, setPassword, passwordError, setPasswordError, checkPassword }) {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value || "");
  };
  const validatePassword = () => {
	const message = checkPassword(password)
	setPasswordError(message)
  };
  const cancelPasswordError = () => {
    if (!password) {
      setPasswordError("");
    }
  };

  return (
    <Input
      type={passwordShown ? "text" : "password"}
      label={"비밀번호"}
      value={password}
      onChange={handlePasswordChange}
      onBlur={validatePassword}
      onFocus={cancelPasswordError}
      errorMessage={passwordError}
      password
      togglePassword={togglePasswordVisibility}
      visibility={passwordShown}
    />
  );
};
