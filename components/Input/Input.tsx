import { InputHTMLAttributes, useEffect, useState } from 'react';
import * as S from './Input.styled';
import Eye from '../Eye/Eye';
import React from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: string;
  width?: string;
}

const Input = ({
  variant,
  width = '100%',
  value,
  name,
  type = 'text',
  placeholder,
  className,
  disabled,
  onBlur,
  onChange,
}: InputProps) => {
  const [error, setError] = useState<string>('');
  const [isEye, setEye] = useState(false);
  const [transformedType, setTransformedType] = useState(type);

  const processEye = () => {
    if (type === 'password') {
      setEye(true);
    } else {
      setEye(false);
    }
  };

  const changeInputType = () => {
    setTransformedType((prevType) =>
      prevType === 'password' ? 'text' : 'password'
    );
  };

  useEffect(() => {
    processEye();
  }, [type]);

  return (
    <S.InputLayout>
      <S.InputContainer
        $width={width}
        $error={!!error}
        value={value}
        name={name}
        type={transformedType}
        placeholder={placeholder}
        className={className}
        disabled={disabled}
        onBlur={onBlur}
        onChange={onChange}
      />
      {isEye && (
        <S.EyeContainer>
          <Eye onClick={changeInputType} />
        </S.EyeContainer>
      )}
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.InputLayout>
  );
};

export default Input;
