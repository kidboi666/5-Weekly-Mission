import styled from "styled-components";

export const WrapModalContent = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 36rem;
  height: fit-content;
  padding: 3.2rem 4rem;
  border-radius: 1.5rem;
  background-color: var(--Linkbrary-white);
`;

export const CloseImage = styled.img`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
`;

export const WrapContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  row-gap: 2.4rem;
`;
