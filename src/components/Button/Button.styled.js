import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 5px;
  background: linear-gradient(
    90.99deg,
    var(--primary-color) 0.12%,
    #6ae3fe 101.84%
  );
  border-radius: 8px;
  color: var(--white-color);
  font-weight: 600;
  font-size: 1.125rem;

  @media (max-width: 767px) {
    padding: 10px 0;
    font-size: 0.875rem;
  }
`;
