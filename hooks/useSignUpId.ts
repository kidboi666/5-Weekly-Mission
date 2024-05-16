import validateEmail from '@/utils/emailRegrex';
import { useState } from 'react';
import { CHECK_DUPLICATE_BASE_URL } from '@/constant/signup-constant';

function useSignUpId() {
  const [email, setEmail] = useState<string>('');
  const [isIdError, setIsIdError] = useState<boolean>(false);
  const [idErrorMsg, setIdErrorMsg] = useState<string>('');

  const handleEmailChange = (newValue: string) => {
    setEmail(newValue);
  };

  const handleIdBlur = async () => {
    if (email == '') {
      setIsIdError(true);
      setIdErrorMsg('이메일을 입력해 주세요.');
      return;
    }

    if (!validateEmail(email)) {
      setIsIdError(true);
      setIdErrorMsg('올바른 이메일 주소가 아닙니다.');
      return;
    }

    try {
      const response = await fetch(CHECK_DUPLICATE_BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        const data = await response.json();

        if (!data.isUsableNickname) {
          setIsIdError(false);
          setIdErrorMsg('');
        }
      } else {
        if (response.status === 409) {
          setIsIdError(true);
          setIdErrorMsg('이미 사용 중인 이메일입니다.');
        } else {
          throw new Error('이메일 중복 확인에 실패했습니다.');
        }
      }
    } catch (error) {
      console.error('Error:', error);
      setIsIdError(true);
      setIdErrorMsg('이메일 중복 확인에 실패했습니다.');
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

export default useSignUpId;
