import styled from "styled-components";
import FolderSortingButton from "../Button/FolderSortingButton";

function SortingButton({ folderName }) {
  return <FolderSortingButton>{folderName}</FolderSortingButton>;
}

function Sorting({ folderList }) {
  // console.log(folderList);
  if (!folderList) return;
  return (
    <SortingWrap>
      <FolderSortingButton>전체</FolderSortingButton>
      {Object.values(folderList).map((folder) => {
        return <SortingButton key={folder.id} folderName={folder.name} />;
      })}
    </SortingWrap>
  );
}

const SortingWrap = styled.div`
  display: flex;
  gap: 8px;
`;

export default Sorting;
