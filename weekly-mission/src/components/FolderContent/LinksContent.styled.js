import styled from "styled-components";

export const FolderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  margin-top: 20px;
  padding: 0 32px;

  @media (max-width: 1199px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 1124px;
  }

  @media (max-width: 769px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FoldermenuToolbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 32px;
`;

export const SelectedFolder = styled.div`
  font-size: 24px;
  font-weight: 600;
`;
