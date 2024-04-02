import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Contatiner = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 5.8125rem;
  background-color: ${theme.color.grayf};
  @media screen and (max-width: ${theme.screenSize.pc}) {
    padding-top: 3.9375rem;
  }
`;
