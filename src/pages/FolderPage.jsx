import { AddLink } from "../components/AddLink/AddLink";
import { Layout } from "../components/Layout/Layout";
import { SearchBar } from "../components/SearchBar/SearchBar";
import * as PageLayout from "./PageLayout.style";

function FolderPage() {
  return (
    <Layout isSticky={false} userId="1">
      <AddLink></AddLink>
      <PageLayout.PageWrap>
        <SearchBar />
      </PageLayout.PageWrap>
    </Layout>
  );
}

export default FolderPage;
