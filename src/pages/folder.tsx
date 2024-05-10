import { useGetFolders } from "@/folder/data-access-folder";
import { useGetLinks } from "@/link/data-access-link";
import { Layout } from "@/sharing/feature-layout";
import { FolderLayout } from "@/page-layout/FolderLayout";
import { FolderToolBar } from "@/folder/feature-folder-tool-bar";
import { SearchBar } from "@/link/ui-search-bar";
import { useState } from "react";
import { ALL_LINKS_ID } from "@/link/data-access-link/constant";
import { LinkForm } from "@/link/feature-link-form";
import { CardList } from "@/link/feature-card-list";

export const FolderPage = () => {
  const { data: folders } = useGetFolders();
  const [selectedFolderId, setSelectedFolderId] = useState(ALL_LINKS_ID);
  const { data: links, loading } = useGetLinks(selectedFolderId);
  const [keyword, setKeyword] = useState("");

  const filteredLinks = links?.filter(({ id, alt, description }) => {
    return [id, alt, description].join("").includes(keyword);
  });

  return (
    <Layout isSticky={false}>
      <FolderLayout
        linkForm={<LinkForm />}
        searchBar={<SearchBar onKeywordSubmit={setKeyword} />}
        folderToolBar={
          <FolderToolBar
            folders={folders}
            selectedFolderId={selectedFolderId}
            setSelectedFolderId={setSelectedFolderId}
            setKeyword={setKeyword}
          />
        }
        cardList={loading ? null : <CardList links={filteredLinks} />}
      />
    </Layout>
  );
};
