import validateEmail from '@/utils/emailRegrex';
import { useState } from 'react';

function useSignInId() {
  const [email, setEmail] = useState<string>('');
  const [isIdError, setIsIdError] = useState<boolean>(false);
  const [idErrorMsg, setIdErrorMsg] = useState<string>('');

  const handleEmailChange = (newValue: string) => {
    setEmail(newValue);
  };

  const handleIdBlur = () => {
    if (email == '') {
      setIsIdError(true);
      setIdErrorMsg('이메일을 입력해 주세요.');
    } else if (!validateEmail(email)) {
      setIsIdError(true);
      setIdErrorMsg('올바른 이메일 주소가 아닙니다.');
    } else {
      setIsIdError(false);
      setIdErrorMsg('');
    }
  };
  const handleIdErrorOnSubmit = () => {
    setIsIdError(true);
    setIdErrorMsg('이메일을 확인해 주세요.');
  };

  return {
    email,
    isIdError,
    idErrorMsg,
    handleEmailChange,
    handleIdBlur,
    handleIdErrorOnSubmit,
  };
}

export default useSignInId;
