import styled from "styled-components";

export const FolderToolBarWrap = styled.div`
  display: lfex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 1.2rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-areas:
      "folderList folderList add-button"
      "folder-name buttons buttons";
    justify-content: space-between;
    align-items: center;
    row-gap: 2.4rem;
    column-gap: 1.2rem;
  }
`;

export const FolderToolBarButtonWrap = styled.div`
  grid-area: folderList;
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.8rem;
  row-gap: 1.2rem;
  flex-grow: 1;
`;

export const FolderToolBarButton = styled.button`
  display: flex;
  align-items: center;
  height: 3.1rem;
  padding: 0.1rem;
  border-radius: 0.5rem;
  border: 0.1rem solid var(--Linkbrary-primary-color);
  font-size: 1.4rem;
  transition: all 0.3s ease-in-out;

  @media (min-width: 768px) {
    hheight: 3.7rem;
    padding: 0 1.2rem;
    font-size: 1.6rem;
  }

  &:hover {
    background-color: var(--Linkbrary-gray10);
  }

  &.selected {
    background-color: var(--Linkbrary-primary-color);
    color: var(--Linkbrary-white);
  }
`;
