import { useGetFolder } from "@/components-FolderPage/data-access-folder";
import { Layout } from "@/common/feature-layout";
import { SharedLayout } from "@/page-layout/SharedLayout";
import { CardList } from "@/components-SharedPage/ui-card-list";
import { FolderInfo } from "@/components-SharedPage/ui-folder-info";
import { ReadOnlyCard } from "@/components-SharedPage/ui-read-only-card";
import { SearchBar } from "@/components-SharedPage/ui-search-bar";

export const SharedPage = () => {
  const { data } = useGetFolder();
  const { profileImage, ownerName, folderName, links } = data || {};

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
        searchBar={<SearchBar />}
        cardList={
          <CardList>
            {links?.map((link) => (
              <ReadOnlyCard key={link?.id} {...link} />
            ))}
          </CardList>
        }
      />
    </Layout>
  );
};
