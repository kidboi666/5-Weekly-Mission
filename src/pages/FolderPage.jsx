import { AddLink } from "../components/AddLink/AddLink";
import { Layout } from "../components/Layout/Layout";
import { SearchBar } from "../components/SearchBar/SearchBar";
import * as PageLayout from "./PageLayout.style";
import { useGetFolderList } from "../api/useGetFolderList";
import { FolderToolBar } from "../components/Folder/FolderToolBar";
import { CardList } from "../components/Card/CardList";
import { CardContainer } from "../components/Card/CardContainer";
import { useState } from "react";
import { ALL_LINKS_ID } from "../api/constant";
import { useGetLinkList } from "../api/useGetLinkList";

function FolderPage() {
  const userId = "1"; // 임시로 1번으로 주기
  const { data: folderList } = useGetFolderList(userId);
  const [selectedFolderId, setSelectedFolderId] = useState(ALL_LINKS_ID);
  const { data: links } = useGetLinkList(selectedFolderId, userId);
  console.log(links);

  return (
    <Layout isSticky={false} userId={userId}>
      <AddLink />
      <PageLayout.PageWrap>
        <SearchBar />
        <PageLayout.FolderBox>
          <FolderToolBar folderList={folderList} />
          <CardList>
            {links?.map((link) => (
              <CardContainer key={link?.id} {...link}></CardContainer>
            ))}
          </CardList>
        </PageLayout.FolderBox>
      </PageLayout.PageWrap>
    </Layout>
  );
}

export default FolderPage;
