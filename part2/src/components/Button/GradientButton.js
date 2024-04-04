import styled from "styled-components";

const SIZES = {
  large: 350,
  medium: 128,
  small: 80,
};

const GradientButton = styled.button`
  width: ${({ size }) => SIZES[size ?? "medium"]}px;
  padding: 16px 20px;
  border: none;
  border-radius: 8px;
  background: var(--grad-purple-to-blue);
  color: var(--button-text-color);
  font-size: 18px;
  font-weight: 600;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export default GradientButton;
