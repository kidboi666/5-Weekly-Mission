import styled from "styled-components";

export const StyledButton = styled.button`
  height: 35px;
  padding: 0 12px;
  background-color: #fff;
  border: 1px solid var(--primary-color);
  border-radius: 5px;

  &:active {
    background: var(--primary-color);
    color: white;
  }

  @media (max-width: 767px) {
    height: 29px;
    padding: 0 10px;
    font-size: 14px;
  }
`;
