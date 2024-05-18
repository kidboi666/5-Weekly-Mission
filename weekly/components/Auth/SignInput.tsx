import { ChangeEvent } from 'react';
import styled from 'styled-components';

type Props = {
  type: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  isValid: boolean;
  message: string;
};

function SignInput({ type, placeholder, onChange, onBlur, isValid, message }: Props) {
  return (
    <>
      <StyledInput type={type} placeholder={placeholder} onChange={onChange} onBlur={onBlur} data-isValid={isValid} />
      {isValid ? <ErrorMessage>{message}</ErrorMessage> : null}
    </>
  );
}

interface StyleProps {
  'data-isValid': boolean;
}

const StyledInput = styled.input<StyleProps>`
  width: 400px;
  padding: 18px 15px;
  border-radius: 8px;
  border: 1px solid ${(props) => (props['data-isValid'] ? 'var(--Linkbrary-red, #FF5B56)' : 'var(--Linkbrary-gray20, #ccd5e3)')};
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
