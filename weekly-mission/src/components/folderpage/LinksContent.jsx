import Card from "../linksharepage/Card";
import NoLink from "./NoLinks";
import styled from "styled-components";
import ActionButtons from "./buttons/ActionButtons";

const FolderContainer = styled.div`
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

const FoldermenuToolbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 32px;
`;

const SelectedFolder = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

const LinksContent = ({ linksData, activeFolderName, activeFolderId }) => {
  const isEmpty = !linksData || linksData.data.length === 0;

  return (
    <>
      <FoldermenuToolbar>
        <SelectedFolder>{activeFolderName}</SelectedFolder>
        {activeFolderId !== null && <ActionButtons />}
      </FoldermenuToolbar>

      <FolderContainer>
        {isEmpty ? (
          <NoLink />
        ) : (
          linksData.data.map((link) => <Card key={link.id} link={link} />)
        )}
      </FolderContainer>
    </>
  );
};

export default LinksContent;
