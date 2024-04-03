import styled from "styled-components";
import Button from "../Button/Button";

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  padding: 20px 200px;
  background: var(--background-color);
  z-index: 1;

  @media (max-width: 1199px) {
    padding: 20px 32px;
  }
`;

export const StyledInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1520px;
  margin: 0 auto;

  @media (max-width: 1199px) {
    width: 100%;
  }
`;

export const StyledLogo = styled.h1`
  width: 133px;

  @media (max-width: 767px) {
    width: 89px;
  }
`;

export const StyledButton = styled(Button)`
  width: 128px;

  @media (max-width: 767px) {
    width: 80px;
  }
`;
