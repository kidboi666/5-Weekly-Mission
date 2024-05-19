import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import isValidEmail from '@/utils/isValidEmail';

type Props = {
  type: string;
  placeholder: string;
  id: string;
  handleChange?: (pw: string) => void;
  password?: string;
};

function SignInput({ type, placeholder, id, handleChange, password }: Props) {
  const [iSInvalid, setIsInvalid] = useState(false);
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (id === 'password') {
      handleChange?.(value);
    }
  };

  const onBlur = () => {
    if (id === 'email') {
      if (value === '') {
        setIsInvalid(true);
        setMessage('이메일을 입력해주세요');
      } else if (!isValidEmail(value)) {
        setIsInvalid(true);
        setMessage('올바른 이메일 주소가 아닙니다.');
      } else {
        setIsInvalid(false);
      }
    } else if (id === 'password') {
      if (value === '') {
        setIsInvalid(true);
        setMessage('비밀번호를 입력해주세요');
      } else {
        setIsInvalid(false);
      }
    } else if (id === 'passwordCheck') {
      if (value === '') {
        setIsInvalid(true);
        setMessage('비밀번호를 입력해주세요');
      } else if (value !== password) {
        setIsInvalid(true);
        setMessage('비밀번호가 일치하지 않아요');
      } else {
        setIsInvalid(false);
      }
    }
  };

  return (
    <>
      <StyledInput type={type} placeholder={placeholder} onChange={onChange} onBlur={onBlur} data-isInvalid={iSInvalid} />
      {iSInvalid ? <ErrorMessage>{message}</ErrorMessage> : null}
    </>
  );
}

interface StyleProps {
  'data-isInvalid': boolean;
}

const StyledInput = styled.input<StyleProps>`
  width: 400px;
  padding: 18px 15px;
  border-radius: 8px;
  border: 1px solid ${(props) => (props['data-isInvalid'] ? 'var(--Linkbrary-red, #FF5B56)' : 'var(--Linkbrary-gray20, #ccd5e3)')};
  background: var(--Linkbrary-white, #fff);
  margin-top: 12px;

  &:focus {
    border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
    outline: none;
  }
`;

const ErrorMessage = styled.p`
  color: var(--Linkbrary-red, #ff5b56);
  font-size: 14px;
  margin-top: 6px;
`;

export default SignInput;
