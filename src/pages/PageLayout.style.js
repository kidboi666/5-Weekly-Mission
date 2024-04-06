import styled from "styled-components";

export const PageWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 112.4rem;
  row-gap: 3.2rem;
  padding: 0 3.2rem;

  @media (min-width: 768px) {
    row-gap: 4rem;
  }
`;
