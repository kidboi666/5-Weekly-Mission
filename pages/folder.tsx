import "./folder.css";
import Nav from "@/components/Nav";
import FolderList from "@/components/FolderList";
import Footer from "@/components/Footer";
import useData from "@/hooks/useData";
import { getFolderListData } from "@/api/Api";
import AddLinkInput from "@/components/AddLinkInput";

function Folder() {
  const foldersData = useData(getFolderListData);
  const folders = foldersData?.data;
  return (
    <>
      <Nav />
      <AddLinkInput />
      <section className="folderContent">
        {folders && <FolderList folders={folders} />}
      </section>
      <Footer />
    </>
  );
}

export default Folder;
