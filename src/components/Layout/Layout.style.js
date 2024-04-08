import styled from "styled-components";

export const MainWrap = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  row-gap: 2rem;
  padding-bottom: 2rem;

  @media (min-width: 768px) {
    row-gap: 4rem;
    padding-bottom: 6rem;
  }
`;
