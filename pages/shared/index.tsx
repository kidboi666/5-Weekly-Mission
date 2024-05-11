import styles from "@/styles/PageLayout.module.css";
import { useGetFolderInfo } from "../api/useGetFolderInfo";
import { Layout } from "@/components/Layout/Layout";

const SharedPage = () => {
  const { data } = useGetFolderInfo();
  const { folderName, links, ownerName, profileImage } = data || {};

  return <Layout isSticky={true}></Layout>;
};

export default SharedPage;
