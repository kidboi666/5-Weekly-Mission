import styled from "styled-components";

const SIZES = {
  s: {
    pc: 28,
    mo: 28,
  },
  m: {
    pc: 60,
    mo: 40,
  },
};

export const StyledImg = styled.img`
  border-radius: 50%;
  object-fit: cover;
  width: ${({ size }) => SIZES[size].pc}px;
  height: ${({ size }) => SIZES[size].pc}px;

  @media (max-width: 767px) {
    width: ${({ size }) => SIZES[size].mo}px;
    height: ${({ size }) => SIZES[size].mo}px;
  }
`;
