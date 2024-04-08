import styled from "styled-components";
import AllButton from "./buttons/AllButton";

const FolderButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const FoldermenuToolbarButton = styled.button`
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

const FolderList = ({ folders, activeButton, handleButtonClick }) => {
  return (
    <FolderButtonWrapper>
      <AllButton
        active={activeButton === null}
        onClick={() => handleButtonClick(null, "전체")}
      />
      {folders.map((folder) => (
        <FoldermenuToolbarButton
          active={activeButton === folder.id}
          key={folder.id}
          onClick={() => handleButtonClick(folder.id, folder.name)}
        >
          {folder.name}
        </FoldermenuToolbarButton>
      ))}
    </FolderButtonWrapper>
  );
};

export default FolderList;
