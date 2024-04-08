import { useGetFolders } from "./data-access/useGetFolders";
import { useGetLinks } from "./data-access/useGetLinks";
import Layout from "Layout";
import { FolderPageLayout } from "./page-frame";
import { SearchBar } from "./ui/SearchBar";
import { LinkForm } from "./ui/LinkForm";
import { FolderToolBar } from "./feature/FolderToolBar/FolderToolBar";
import { CardList } from "./feature/CardList";
import { useState } from "react";

const ALL_LINKS_ID = "all";

export const FolderPage = function () {
  const { data: folders } = useGetFolders();
  const [selectedFolderId, setSelectedFolderId] = useState(ALL_LINKS_ID);
  const { data: links, loading } = useGetLinks(selectedFolderId);

  return (
    <Layout position={"static"}>
      <FolderPageLayout
        linkForm={<LinkForm />}
        searchBar={<SearchBar />}
        folderToolBar={
          <FolderToolBar
            folders={folders}
            selectedFolderId={selectedFolderId}
            onFolderClick={setSelectedFolderId}
          />
        }
        cardList={loading ? null : <CardList links={links} />}
      />
    </Layout>
  );
};
