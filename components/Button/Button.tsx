import React from 'react';
import * as S from './Button.styled';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  width?: string;
  selected?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  width,
  selected,
  className,
  disabled,
  type = 'button',
  onClick,
  children,
  ...restProps
}) => {
  return (
    <S.ButtonLayout
      $variant={variant}
      $width={width}
      $isActive={selected === children}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={className}
      {...restProps}
    >
      <S.ButtonContainer>{children}</S.ButtonContainer>
    </S.ButtonLayout>
  );
};

export default Button;
