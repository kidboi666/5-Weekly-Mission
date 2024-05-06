import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 600;

  @media (max-width: 767px) {
    font-size: 32px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
