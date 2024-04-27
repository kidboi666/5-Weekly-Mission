import StyledButton from "./Button.styled";

const Button = ({ text, type, onClick }) => {
  return (
    <StyledButton onClick={onClick} type={type}>
      {text}
    </StyledButton>
  );
};

export default Button;
