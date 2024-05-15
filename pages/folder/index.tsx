import { useState } from "react";
import { CardList, FolderToolBar, LinkForm } from "@/src/feature";
import { Layout, SearchBar } from "@/src/ui";
import { FolderLayout } from "@/src/page-layout/FolderLayout";
import { useIntersectionObserver, useSearchLink, ALL_LINKS_ID } from "@/src/util";
import { SelectedFolderId } from "@/src/type";
import { useGetLinks, useGetFolders } from "@/src/data-access";

const FolderPage = () => {
  const { data: folders } = useGetFolders();
  const [selectedFolderId, setSelectedFolderId] =
    useState<SelectedFolderId>(ALL_LINKS_ID);
  const { data: links, loading } = useGetLinks(selectedFolderId);
  const { searchValue, handleChange, handleCloseClick, result } =
    useSearchLink(links);
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>();

  return (
    <Layout isSticky={false} footerRef={ref}>
      <FolderLayout
        linkForm={<LinkForm hideFixedLinkForm={isIntersecting} />}
        searchBar={
          <SearchBar
            value={searchValue}
            onChange={handleChange}
            onCloseClick={handleCloseClick}
          />
        }
        folderToolBar={
          <FolderToolBar
            folders={folders}
            selectedFolderId={selectedFolderId}
            onFolderClick={setSelectedFolderId}
          />
        }
        cardList={loading ? null : <CardList links={result} />}
      />
    </Layout>
  );
};

export default FolderPage;
