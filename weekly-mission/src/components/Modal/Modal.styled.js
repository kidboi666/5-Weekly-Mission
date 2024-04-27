import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
`;

export const ModalContent = styled.div`
  position: relative;
  width: 360px;
  height: 238px;
  background-color: white;
  padding: 32px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 15px;
  border: 1px solid #ccd5e3;
`;

export const CloseButton = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

export const ModalName = styled.h4`
  font-size: 20px;
  font-weight: 700;
`;

export const ModalInput = styled.input`
  width: 280px;
  height: 60px;
  padding: 18px 15px;
  border-radius: 8px;
  border: 1px solid #ccd5e3;
`;
