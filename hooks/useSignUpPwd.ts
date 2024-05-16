import { useState } from 'react';

function useSignUpPwd() {
  const [password, setPassword] = useState<string>('');
  const [isPwdError, setIsPwdError] = useState<boolean>(false);
  const [pwdErrorMsg, setPwdErrorMsg] = useState<string>('');

  const handlePasswordChange = (newValue: string) => {
    setPassword(newValue);
  };

  const handlePwdBlur = () => {
    const hasNumber = /\d/.test(password);
    const hasAlphabet = /[a-z]/.test(password);
    const isLengthValid = password.length >= 8;

    if (!hasNumber || !hasAlphabet || !isLengthValid) {
      setIsPwdError(true);
      setPwdErrorMsg('비밀번호는 영문,숫자 조합 8자 이상 입력해 주세요.');
    } else {
      setIsPwdError(false);
      setPwdErrorMsg('');
    }
  };
  const handlePWdErrorOnSubmit = () => {
    setIsPwdError(true);
    setPwdErrorMsg('비밀번호를 확인해 주세요.');
  };

  return {
    password,
    isPwdError,
    pwdErrorMsg,
    handlePasswordChange,
    handlePwdBlur,
    handlePWdErrorOnSubmit,
  };
}

export default useSignUpPwd;
