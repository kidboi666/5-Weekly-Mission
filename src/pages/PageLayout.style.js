import styled from "styled-components";

export const PageWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 112.4rem;
  row-gap: 3.2rem;
  padding: 0 3.2rem;

  @media (min-width: 768px) {
    row-gap: 4rem;
  }
`;

export const FolderBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  width: 100%;

  @media (min-width: 768px) {
    row-gap: 2.4rem;
  }
`;

export const NoLinkWrap = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3.4rem;

  @media (min-width: 768px) {
    padding-top: 4.1rem;
  }
`;

export const NoLinkText = styled.span`
  font-size: 1.4rem;
  line-height: 150%;

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;
