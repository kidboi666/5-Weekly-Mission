import styled from "styled-components";

export const AddLinkWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2.4rem 3.2rem 4rem;
  background-color: var(--Linkbrary-bg);

  @media (min-width: 768px) {
    padding: 6rem 3.2rem 9rem;
  }
`;

export const AddLinkForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 80rem;
  height: 5.3rem;
  column-gap: 1rem;
  padding: 0.1rem 1rem;
  border: 0.1rem solid var(--Linkbrary-primary-color);
  border-radius: 1.5rem;
  background-color: var(--Linkbrary-white);

  @media (min-width: 768px) {
    height: 6.9rem;
    column-gap: 2rem;
    padding: 0 2rem;
  }
`;

export const AddLinkInputBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  column-gap: 0.8rem;

  @media (min-width: 768px) {
    column-gap: 1.2rem;
  }
`;

export const AddLinkIcon = styled.img`
  width: 1.6rem;
  height: 1.6rem;

  @media (min-width: 768px) {
    width: 2rem;
    height: 2rem;
  }
`;

export const AddLinknInput = styled.input`
  width: 100%;
  height: 5.1rem;
  font-size: 1.4rem;
  line-height: 150%;

  @media (min-width: 768px) {
    height: 6.7rem;
    font-size: 1.6rem;
  }

  &::placeholder {
    color: var(--text-content-gray);
  }
`;

export const AddLinkButton = styled.button`
  width: 8rem;
  font-size: 1.4rem;
  padding: 1rem 1.6rem;
`;
