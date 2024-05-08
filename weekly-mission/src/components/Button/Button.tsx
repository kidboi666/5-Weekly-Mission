import React from "react";
import { StyledButtonProps } from "./Button.styled";
import { StyledButton } from "./Button.styled";

interface ButtonProps extends StyledButtonProps {
  text?: string;
  onClick?: () => void;
}

const Button = ({ text, buttontype, onClick }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} buttontype={buttontype}>
      {text}
    </StyledButton>
  );
};

export default Button;
