import styled from "styled-components";

export const FolderButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const FoldermenuToolbarButton = styled.button`
  height: auto;
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid #6d6afe;
  background-color: ${(props) => (props.active ? "#6d6afe" : "#ffffff")};
  color: ${(props) => (props.active ? "#ffffff" : "#000000")};
  font-size: 16px;
  font-weight: 400;
  max-width: 150px;
  white-space: nowrap;
`;
