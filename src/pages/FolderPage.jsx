import { AddLink } from "../components/AddLink/AddLink";
import { Layout } from "../components/Layout/Layout";
import { SearchBar } from "../components/SearchBar/SearchBar";
import * as PageLayout from "./PageLayout.style";
import { useGetFolderList } from "../api/useGetFolderList";
import { FolderToolBar } from "../components/Folder/FolderToolBar";

function FolderPage() {
  const userId = "1";
  const { data: folderList } = useGetFolderList(userId);

  return (
    <Layout isSticky={false} userId={userId}>
      <AddLink />
      <PageLayout.PageWrap>
        <SearchBar />
        <FolderToolBar folderList={folderList} />
      </PageLayout.PageWrap>
    </Layout>
  );
}

export default FolderPage;
