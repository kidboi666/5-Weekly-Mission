import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    visibility: hidden;
    opacity: 0;
  }
  to {
    visibility: visible;
    opacity: 1;
  }
`;

export const WrapModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: none;
  z-index: var(--z-index-modal);
  animation: ${fadeIn} 0.3s;

  background-color: rgba(0, 0, 0, 0.4);
`;
