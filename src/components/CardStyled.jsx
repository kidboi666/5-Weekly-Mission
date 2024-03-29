import styled from 'styled-components';

export const CardImage = styled.img`
  width: 100%;
  min-height: 19.2rem;
  height: 19.2rem;
  border-radius: 1.5rem 1.5rem 0 0;
  background-position: center;
  background-size: 100%;
  transition: background-size 0.3s ease-in-out;

  @media (min-width: 768px) {
    min-height: 20rem;
    height: 20rem;
  }
`;

export const CardContent = styled.article`
  height: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;

export const CardContentText = styled.p`
  font-size: ${(props) => props.size}px;
  color: ${(props) => `var(--${props.color})`};
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 32.5rem;
  height: 32.7rem;
  box-shadow: 0 0.5rem 2.5rem 0 rgba(0, 0, 0, 0.08);
  border-radius: 1.5rem;

  @media (min-width: 768px) {
    width: 34rem;
    height: 33.4rem;
  }
`;

export const Sort = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(32.5rem);
  justify-content: center;
  width: 100%;
  max-width: 106rem;
  row-gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, 34rem);
    row-gap: 2.5rem;
    column-gap: 2rem;
  }
`;
