import { useGetFolderInfo } from "../api/useGetFolderInfo";
import { Layout } from "../components/Layout/Layout";
import { FolderInfo } from "../components/FolderInfo/FolderInfo";
import { SearchBar } from "../components/SearchBar";
import { styled } from "styled-components";

const SharedPageItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 112.4rem;
  row-gap: 3.2rem;
  padding: 0 3.2rem;

  @media (min-width: 768px) {
    row-gap: 4rem;
  }
`;

function SharedPage() {
  const { data } = useGetFolderInfo();
  const { folderName, links, ownerName, profileImage } = data || {};

  return (
    <>
      <Layout isFixed={true}>
        <FolderInfo
          folderName={folderName}
          ownerName={ownerName}
          profileImage={profileImage}
        />
        <SharedPageItems>
          <SearchBar />
        </SharedPageItems>
      </Layout>
    </>
  );
}

export default SharedPage;
