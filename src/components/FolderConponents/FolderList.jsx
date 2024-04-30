import styled from 'styled-components';
import useFetch from '../hooks/useFetch';
import { useState } from 'react';

const FolderContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 106rem;
  margin: 0 auto;
`;

const FolderItem = styled.button`
  display: flex;
  align-items: flex-start;
  height: 35px;
  border: 1px solid var(--primary);
  padding: 8px 12px;
  border-radius: 5px;
  margin-right: 8px;
  font-size: 16px;
  background-color: ${({ isActive }) => (isActive ? 'yellow' : 'transparent')};
`;

const AddFolderButton = styled.div`
  display: flex;
  align-items: flex-start;
  height: 35px;
  padding: 8px 12px;
  margin-left: auto;
  font-size: 16px;
  font-weight: 500;
  color: var(--primary);
`;

function FolderList() {
  const { data, isLoading, error } = useFetch('api/users/1/folders');
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (folderId) => {
    setActiveButton(folderId);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data || !data.data || !Array.isArray(data.data)) {
    return <div>Error: Data is not an array</div>;
  }

  return (
    <>
      <FolderContainer>
        <FolderItem isActive={!activeButton} onClick={() => handleButtonClick(null)}>
          전체
        </FolderItem>
        {data.data.map((folder) => (
          <FolderItem
            key={folder.id}
            isActive={folder.id === activeButton}
            onClick={() => handleButtonClick(folder.id)}
          >
            {folder.name}
          </FolderItem>
        ))}
        <AddFolderButton>폴더 추가 +</AddFolderButton>
      </FolderContainer>
      <div>유용한 글</div>
    </>
  );
}

export default FolderList;
