import React from "react";
import { Link } from "react-router-dom";
import { StyledButton } from "./Button.styled";

export default function Button({ text, className = "", link }) {
  return (
    <StyledButton className={className}>
      {link ? <Link to={link}>{text}</Link> : { text }}
    </StyledButton>
  );
}
