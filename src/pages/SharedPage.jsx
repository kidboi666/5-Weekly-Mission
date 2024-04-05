import { useGetFolderInfo } from "../api/useGetFolderInfo";
import { Layout } from "../components/Layout/Layout";
import { FolderInfo } from "../components/FolderInfo/FolderInfo";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { styled } from "styled-components";
import { CardList } from "../components/CardList/CardList";

function SharedPage() {
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

  const { data } = useGetFolderInfo();
  const { folderName, ownerName, profileImage } = data || {};
  //   const { folderName, links, ownerName, profileImage } = data || {};

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
        <CardList></CardList>
      </Layout>
    </>
  );
}

export default SharedPage;
