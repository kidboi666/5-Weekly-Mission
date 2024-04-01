import { Input } from "../ui";

export const EmailInput = function ({
  email,
  setEmail,
  emailError,
  setEmailError,
  checkEmail,
}) {
  const handleEmailChange = (e) => {
    setEmail(e.target.value || "");
  };
  const validateEmail = () => {
    const message = checkEmail(email);
    setEmailError(message);
  };
  const cancelEmailError = () => {
    if (!email) {
      setEmailError("");
    }
  };

  return (
    <Input
      type={"email"}
      label={"이메일"}
      value={email}
      onChange={handleEmailChange}
      onBlur={validateEmail}
      onFocus={cancelEmailError}
      errorMessage={emailError}
    />
  );
};
