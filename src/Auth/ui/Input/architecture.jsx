import React from "react";
import {
  InputEntry,
  InputLabel,
  InputWrapper,
  InputBinder,
  InputField,
  ErrorMessage,
} from "./design";

export const Input = function ({
  type,
  label,
  value,
  onChange,
  onBlur,
  onFocus,
  errorMessage,
  password,
  togglePassword,
  visibility,
}) {
  const border = errorMessage === "" ? "Default" : "Error";
  const ToggleComponent = (
    <i
      onClick={togglePassword}
      className={`fa fa-${visibility ? "eye-slash" : "eye"} fa-lg`}
    ></i>
  );
  const TogglePassword = password ? ToggleComponent : <></>;
  return (
    <InputEntry>
      <InputLabel>{label}</InputLabel>
      <InputWrapper>
        <InputBinder>
          <InputField
            type={type}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            placeholder={label}
            border={border}
          />
          {TogglePassword}
        </InputBinder>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </InputWrapper>
    </InputEntry>
  );
};
