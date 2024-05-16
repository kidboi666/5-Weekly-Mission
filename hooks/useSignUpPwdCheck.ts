import { useState } from 'react';
import useSignUpPwd from './useSignUpPwd';

function useSignUpPwdCheck({ password }: { password: string }) {
  const [passwordCheck, setPasswordCheck] = useState<string>('');
  const [isPwdCheckError, setIsPwdCheckError] = useState<boolean>(false);
  const [pwdCheckErrorMsg, setPwdCheckErrorMsg] = useState<string>('');

  const handlePasswordCheckChange = (newValue: string) => {
    setPasswordCheck(newValue);
  };

  const handlePwdCheckBlur = () => {
    console.log(password);
    if (passwordCheck === '') {
      setIsPwdCheckError(true);
      setPwdCheckErrorMsg('비밀번호를 입력해 주세요.');
    } else if (passwordCheck !== password) {
      setIsPwdCheckError(true);
      setPwdCheckErrorMsg('비밀번호가 일치하지 않아요.');
    } else {
      setIsPwdCheckError(false);
      setPwdCheckErrorMsg('');
    }
  };

  const handlePWdCheckErrorOnSubmit = () => {
    setIsPwdCheckError(true);
    setPwdCheckErrorMsg('비밀번호를 확인해 주세요.');
  };

  return {
    passwordCheck,
    isPwdCheckError,
    pwdCheckErrorMsg,
    handlePasswordCheckChange,
    handlePwdCheckBlur,
    handlePWdCheckErrorOnSubmit,
  };
}

export default useSignUpPwdCheck;
