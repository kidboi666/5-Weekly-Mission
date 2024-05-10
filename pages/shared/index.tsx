import { useGetFolder, FolderInfo } from "@/src/folder";
import { Layout } from "@/src/ui-component";
import { SharedLayout } from "@/src/page-layout/SharedLayout";
import { UICardList, useSearchLink, SearchBar, ReadOnlyCard } from "@/src/link";

const SharedPage = () => {
  const { data } = useGetFolder();
  const { profileImage, ownerName, folderName, links } = data || {};
  const { searchValue, handleChange, handleCloseClick, result } =
    useSearchLink(links);

  return (
    <Layout>
      <SharedLayout
        folderInfo={
          <FolderInfo
            profileImage={profileImage}
            ownerName={ownerName}
            folderName={folderName}
          />
        }
        searchBar={
          <SearchBar
            value={searchValue}
            onChange={handleChange}
            onCloseClick={handleCloseClick}
          />
        }
        cardList={
          <UICardList>
            {result?.map((link) => (
              <ReadOnlyCard key={link?.id} {...link} />
            ))}
          </UICardList>
        }
      />
    </Layout>
  );
};

export default SharedPage;
