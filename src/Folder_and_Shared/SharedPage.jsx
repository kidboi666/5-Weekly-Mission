import Layout from "Layout";
import { SharedPageLayout } from "./page-frame";
import { FolderInfo } from "./ui/FolderInfo";
import { SearchBar } from "./ui/SearchBar";
import { CardList } from "./ui/CardList";
import { useGetFolder } from "./data-access/useGetFolder";
import { ReadOnlyCard } from "./ui/ReadOnlyCard";

export function SharedPage() {
  const { data } = useGetFolder();
  const { profileImage, ownerName, folderName, links } = data || {};

  return (
    <Layout position={"static"}>
      <SharedPageLayout
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
}
