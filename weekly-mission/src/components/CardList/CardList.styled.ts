import styled from "styled-components";

export const CardListWrapper = styled.div`
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1124px;
  gap: 40px;
  margin-bottom: 50px;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  margin: 20px auto;
  padding: 0 32px;

  @media (max-width: 1124px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 769px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
