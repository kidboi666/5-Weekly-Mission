import { useGetFolderInfo } from "../api/useGetFolderInfo";
import { Layout } from "../components/Layout/Layout";
import { FolderInfo } from "../components/FolderInfo/FolderInfo";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { CardList } from "../components/Card/CardList";
import { CardContainer } from "../components/Card/CardContainer";
import * as PageLayout from "./PageLayout.style";

function SharedPage() {
  const { data } = useGetFolderInfo();
  const { folderName, links, ownerName, profileImage } = data || {};

  return (
    <>
      <Layout isSticky={true}>
        <FolderInfo
          folderName={folderName}
          ownerName={ownerName}
          profileImage={profileImage}
        />
        <PageLayout.PageWrap>
          <SearchBar />
          <CardList>
            {links?.map((link) => (
              <CardContainer
                key={link?.id}
                {...link}
                isEdit={false}
              ></CardContainer>
            ))}
          </CardList>
        </PageLayout.PageWrap>
      </Layout>
    </>
  );
}

export default SharedPage;
