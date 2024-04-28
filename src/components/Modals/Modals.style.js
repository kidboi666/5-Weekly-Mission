import styled from "styled-components";

export const ModalTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  row-gap: 0.8rem;

  h2 {
    color: var(--Linkbrary-gray100);
    font-size: 2rem;
    font-weight: 700;
  }

  p {
    color: var(--Linkbrary-gray60);
    font-size: 1.6rem;
    line-height: 2.2rem;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  row-gap: 2.4rem;

  button {
    width: 100%;
    font-size: 1.6rem;
  }
`;

export const WrapFolderList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 0;
  max-height: 17.2rem;
  overflow-y: auto;
  row-gap: 0.4rem;
`;

export const ModalInput = styled.input`
  width: 100%;
  border: 0.1rem solid var(--Linkbrary-gray20);
  border-radius: 0.8rem;
  font-size: 1.6rem;
  color: var(--Linkbrary-gray100);
  padding: 1.8rem 1.5rem;
  transition: border-color 0.2s ease-in-out;

  &::placeholder {
    color: var(--Linkbrary-gray60);
  }

  &:focus {
    border-color: var(--Linkbrary-primary-color);
  }
`;
