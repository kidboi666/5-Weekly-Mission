import { useState } from 'react';

function useSignInPwd() {
  const [password, setPassword] = useState<string>('');

  const [isPwdError, setIsPwdError] = useState<boolean>(false);
  const [pwdErrorMsg, setPwdErrorMsg] = useState<string>('');

  const handlePasswordChange = (newValue: string) => {
    setPassword(newValue);
  };

  const handlePwdBlur = () => {
    if (password == '') {
      setIsPwdError(true);
      setPwdErrorMsg('비밀번호를 입력해 주세요.');
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

export default useSignInPwd;
