import { ReactNode } from "react";
import styled from "styled-components";

const BlueButton = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: (...prams: any[]) => void;
}) => {
  return (
    <Button onClick={onClick} type="button">
      {children}
    </Button>
  );
};

export default BlueButton;

const Button = styled.button`
  display: flex;
  width: 280px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  color: #f5f5f5;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
`;
