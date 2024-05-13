import { useGetFolder } from 'folder/data-access-folder';
import { Layout } from 'sharing/feature-layout';
import { SharedLayout } from 'page-layout/SharedLayout';
import { CardList } from 'link/ui-card-list';
import { FolderInfo } from 'folder/ui-folder-info';
import { ReadOnlyCard } from 'link/ui-read-only-card';
import { SearchBar } from 'link/ui-search-bar';

interface DataType {
  profileImage: string;
  ownerName: string;
  folderName: string;
  links: (number | string)[];
}

export const SharedPage = () => {
  const { data } = useGetFolder();
  const { profileImage, ownerName, folderName, links }: DataType = data;

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
