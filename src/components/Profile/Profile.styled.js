import styled from 'styled-components';

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

export const Wrap = styled.div`
  display: flex;
  flex-direction: ${({ $flextype }) => $flextype};
  align-items: center;
  gap: ${({ $flextype }) => ($flextype === 'row' ? 6 : 12)}px;

  @media (max-width: 767px) {
    gap: 6px;
  }
`;

export const Img = styled.img`
  border-radius: 50%;
  object-fit: cover;
  width: ${({ $size }) => SIZES[$size].pc}px;
  height: ${({ $size }) => SIZES[$size].pc}px;

  @media (max-width: 767px) {
    width: ${({ $size }) => SIZES[$size].mo}px;
    height: ${({ $size }) => SIZES[$size].mo}px;
  }
`;

export const Text = styled.p`
  font-$size: ${({ $flextype }) => ($flextype === 'row' ? 14 : 16)}px;
  color: ${({ $flextype }) => ($flextype === 'row' ? '#373740' : 'inherit')};

  @media (max-width: 767px) {
    display: ${({ $flextype }) => ($flextype === 'row' ? 'none' : 'block')};
    font-$size: 14px;
  }
`;
