import styled from "styled-components";

export const StyledTopWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px 33px 60px;
  background-color: var(--background-color);

  @media (max-width: 767px) {
    gap: 10px;
    padding: 10px 0 40px;
  }
`;

export const StyledSectionWrap = styled.section`
  max-width: 1060px;
  margin: 0 auto;
  padding: 0 32px 100px;

  @media (max-width: 767px) {
    padding-bottom: 60px;
  }
`;
