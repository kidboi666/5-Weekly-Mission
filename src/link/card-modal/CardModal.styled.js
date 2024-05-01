import styled from 'styled-components';

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.56);
  z-index: 5;
`;

export const ModalWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 24px;
  width: 360px;
  height: 238px;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
  gap: 0.6rem;

  & span {
    font-size: 2rem;
    font-weight: 700;
    color: rgba(55, 55, 64, 1);
    margin-bottom: 10px;
  }
`;

export const XButton = styled.button`
  color: red;
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  gap: 15px;
`;

export const InputBox = styled.input`
  display: flex;
  width: 100%;
  height: 60px;
  border-radius: 8px;
  background-color: white;
  border: 1px solid rgba(109, 106, 254, 1);
  padding: 18px, 15px, 18px, 15px;
  color: black;

  :focus {
    outline: none;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 51px;
  border-radius: 8px;
  background: linear-gradient(90.99deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
  border: none;
  transition: 0.3s;
  :focus {
    outline: none;
  }

  :hover {
    background: linear-gradient(90.99deg, #6d6afe 0.12%, #6ae3fe 101.84%);
    background-clip: padding-box;
    background-origin: padding-box;
    background-size: 200% 200%;
    animation: gradientAnimation 1s infinite;
  }

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
