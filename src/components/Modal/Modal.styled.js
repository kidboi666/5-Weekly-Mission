import styled from 'styled-components';
import Button from '../Button/Button';

export const Layout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

export const Modal = styled.div`
  position: relative;
  width: ${({ width }) => (width ? width : 360)}px;
  padding: 32px 40px;
  border-radius: 15px;
  border: 1px solid var(--Linkbrary-gray20);
  background: var(--Linkbrary-white);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const Title = styled.h2`
  color: var(--Linkbrary-gray100);
  font-size: 20px;
  font-weight: 700;
  color: var(--Linkbrary-gray100);
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  margin-top: 24px;
  padding: 18px 15px;
  border-radius: 8px;
  border: 1px solid var(--Linkbrary-gray20);
  outline: none;
  background: var(--Linkbrary-white);
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: var(--Linkbrary-gray100);

  &::placeholder {
    color: var(--Linkbrary-gray60);
  }

  &:focus {
    border: 1px solid var(--Linkbrary-primary);
  }
`;

export const StyledButton = styled(Button)`
  width: 100%;
  height: 51px;
  margin-top: 15px;
  font-size: 16px;
`;
