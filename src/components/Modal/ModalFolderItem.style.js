import styled from "styled-components";

export const FolderItem = styled.div`
  display: flex;
  flex: 0 0 4rem;
  align-items: center;
  column-gap: 0.8rem;
  width: 100%;
  height: 4rem;
  padding: 0.8rem;
  border-radius: 0.8rem;
  cursor: pointer;
  background-color: ${({ isSelected }) =>
    isSelected ? "var(--color-light-blue)" : "initial"};

  &:hover {
    background-color: var(--color-light-blue);
  }

  img {
    margin-left: auto;
  }
`;

export const FolderName = styled.span`
  font-size: 1.6rem;
  color: ${({ isSelected }) =>
    isSelected ? "var(--Linkbrary-primary-color)" : "var(--Linkbrary-gray100)"};
`;

export const FolderCount = styled.span`
  font-size: 1.4rem;
  color: var(--Linkbrary-gray60);
`;
