import styled from "styled-components";
import { GRAY5 } from "./color";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  headerfixed: boolean;
}

const SubHeader = ({ children, headerfixed = true }: Props) => {
  return <Container $headerfixed={headerfixed}>{children}</Container>;
};

export default SubHeader;

const Container = styled.div<{ $headerfixed: boolean }>`
  padding: 113px 32px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${GRAY5};
  margin-top: ${({ $headerfixed }) => ($headerfixed ? `0px` : "-93px")};

  @media (max-width: 767px) {
    padding: 103px 32px 60px;
  }
`;
