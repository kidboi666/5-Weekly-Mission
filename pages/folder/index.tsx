import { useState } from "react";
import { useGetFolders, FolderToolBar, SelectedFolderId } from "@/src/folder";
import {
  SearchBar,
  CardList,
  UILinkForm,
  ALL_LINKS_ID,
  useGetLinks,
  useSearchLink,
} from "@/src/link";
import { Layout } from "@/src/ui-component";
import { FolderLayout } from "@/src/page-layout/FolderLayout";
import { useIntersectionObserver } from "@/src/util";

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
        linkForm={<UILinkForm hideFixedLinkForm={isIntersecting} />}
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
