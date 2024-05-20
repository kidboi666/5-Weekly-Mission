import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  id: string;
  type: string;
  placeholder?: string;
  className?: string;
  register: UseFormRegisterReturn;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

const Input = ({ id, type, placeholder, className, register, ...rest }: InputProps) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className={className}
      {...register}
      {...rest}
    />
  );
};

export default Input;
