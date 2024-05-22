import styles from "./folder.module.css";
import Nav from "@/components/Nav";
import FolderList from "@/components/FolderList";
import Footer from "@/components/Footer";
import useData from "@/hooks/useData";
import { getFolderListData } from "@/api/Api";
import AddLinkInput from "@/components/AddLinkInput";

interface Folder {
  created_at: string;
  favorite: boolean;
  id: number;
  link: {
    count: number;
  };
  name: string;
  user_id: number;
}

interface FolderProps {
  folders: Folder[];
}

export async function getStaticProps() {
  const res = await getFolderListData();
  const folders = res.data ?? [];
  return {
    props: {
      folders,
    },
  };
}

function Folder({ folders }: FolderProps) {
  return (
    <>
      <Nav />
      <AddLinkInput />
      <section className={styles.folderContent}>
        {folders && <FolderList folders={folders} />}
      </section>
      <Footer />
    </>
  );
}

export default Folder;
