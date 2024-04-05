import { useGetFolderInfo } from "../api/useGetFolderInfo";
import { Layout } from "../components/Layout/Layout";
import { FolderInfo } from "../components/FolderInfo/FolderInfo";

function SharedPage() {
  const { data } = useGetFolderInfo();
  const { folderName, ownerName, profileImage } = data || {};
  //   const { folderName, links, ownerName, profileImage } = data || {};

  return (
    <>
      <Layout isFixed={true}>
        <FolderInfo
          folderName={folderName}
          ownerName={ownerName}
          profileImage={profileImage}
        />
      </Layout>
    </>
  );
}

export default SharedPage;
