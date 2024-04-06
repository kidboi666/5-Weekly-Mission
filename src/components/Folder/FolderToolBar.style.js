import styled from "styled-components";
import { ReactComponent as AddIcon } from "./add.svg";

export const FolderToolBarWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 1.2rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-areas:
      "folderList folderList add-button"
      "folder-name folder-name buttons";
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
    height: 3.7rem;
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

export const AddFolderButtonWrap = styled.div`
  grid-area: add-button;
  position: fixed;
  bottom: 10.1rem;
  left: 50%;
  transform: transLateX(-50%);
  z-index: var(--z-index-fab);

  @media (min-width: 768px) {
    justify-self: flex-end;
    position: static;
    transform: none;
  }
`;
export const AddFolderButton = styled.button`
  display: flex;
  align-items: center;
  column-gap: 0.4rem;
  fon-size: 1.6rem;
  font-weight: 500;
  height: 3.5rem;
  padding: 0 2.4rem;
  border-radius: 2rem;
  border: 0.1rem solid var(--Linkbrary-white);
  background-color: var(--Linkbrary-primary-color);
  color: var(--Linkbrary-gray10);

  @media (min-width: 768px) {
    padding: 0;
    background-color: transparent;
    color: var(--Linkbrary-primary-color);
  }
`;

export const AddFolderSvg = styled(AddIcon)`
  fill: var(--Linkbrary-gray10);

  @media (min-width: 768px) {
    fill: var(--Linkbrary-primary-color);
  }
`;

export const FolderName = styled.h2`
  gird-area: folder-name;
  margin-top: 1.6rem;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 0.02rem;

  @media (min-width: 768px) {
    margin-top: 0;
    font-size: 2.4rem;
  }
`;

export const IconButtonWrap = styled.div`
  display: flex;
  justify-self: flex-start;
  grid-area: buttons;
  column-gap: 1.2rem;

  @media (min-width: 768px) {
    justify-end: flex-end;
  }
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  column-gap: 0.4rem;
`;

export const IconImage = styled.img`
  widht: 1.8rem;
  height: 1.8rem;
`;

export const IconText = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--Linkbrary-gray60);
`;
