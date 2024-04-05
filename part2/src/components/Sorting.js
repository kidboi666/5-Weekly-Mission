import styled from "styled-components";
import FolderSortingButton from "./Button/FolderSortingButton";

function SortingButton({ setFolderId, folderId, folderName }) {
  const handleOnClick = () => {
    setFolderId(folderId);
  };

  return <FolderSortingButton onClick={handleOnClick}>{folderName}</FolderSortingButton>;
}

function Sorting({ folderList, setFolderId }) {
  if (!folderList) return;

  const handelOnClickTotal = () => {
    setFolderId(null);
  };

  return (
    <SortingWrap>
      <FolderSortingButton onClick={handelOnClickTotal}>전체</FolderSortingButton>
      {Object.values(folderList).map((folder) => {
        return <SortingButton key={folder.id} setFolderId={setFolderId} folderId={folder.id} folderName={folder.name} />;
      })}
    </SortingWrap>
  );
}

const SortingWrap = styled.div`
  display: flex;
  gap: 8px;
`;

export default Sorting;
