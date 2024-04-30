import Layout from "feature/Layout/Layout";
import "./global.css";
import { SharedPage } from "page-layout/SharedPage";
import { FolderInfo } from "ui/FoldedInfo/FolderInfo";
import { SearchBar } from "ui/SearchBar/SearchBar";
import { CardList } from "ui/CardList/CardList";
import { useGetFolder } from "data-access/useGetFolder";
import { ReadCardOnly } from "ui/ReadCardOnly/ReadCardOnly";

export default function App(params) {
  const { folderData } = useGetFolder();
  const { profileImage, ownerName, folderName, links } = folderData || [];

  return (
    <Layout>
      <SharedPage
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
              <ReadCardOnly key={link?.id} {...link} />
            ))}
          </CardList>
        }
      />
    </Layout>
  );
}
