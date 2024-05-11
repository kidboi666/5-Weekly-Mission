import styled from 'styled-components';

const FolderListButton = styled.button`
  display: flex;
  padding: 8px 12px;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  background: ${({ $isSelected }) => ($isSelected ? 'var(--Linkbrary-primary-color, #6d6afe)' : '#fff')};
  color: ${({ $isSelected }) => ($isSelected ? '#fff' : '#000')};
  cursor: pointer;
`;

export default FolderListButton;
