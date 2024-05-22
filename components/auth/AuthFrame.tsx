import styled from "styled-components";
import { GRAY3, GRAY5, PRIMARY, WHITE } from "../color";
import { ReactNode } from "react";

const AuthFrame = ({ children }: { children: ReactNode }) => {
  return <Div>{children}</Div>;
};

export default AuthFrame;

const Div = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${GRAY5};
`;
