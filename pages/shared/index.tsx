import styles from "@/styles/PageLayout.module.css";
import { useGetFolderInfo } from "../api/useGetFolderInfo";
import { Layout } from "@/components/Layout/Layout";
import { FolderInfo } from "@/components/FolderInfo/FolderInfo";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { CardList } from "@/components/Card/CardList";
import { CardContainer } from "@/components/Card/CardContainer";

const SharedPage = () => {
  const { data } = useGetFolderInfo();
  const { folderName, ownerName, profileImage, links } = data || {};

  return (
    <Layout isSticky={true}>
      <FolderInfo
        folderName={folderName}
        ownerName={ownerName}
        profileImage={profileImage}
      />
      <div className={styles.wrapPageLayout}>
        <SearchBar />
        <CardList>
          {links?.map((link) => (
            <CardContainer
              key={link?.id}
              {...link}
              isEdit={false}
            ></CardContainer>
          ))}
        </CardList>
      </div>
    </Layout>
  );
};

export default SharedPage;
