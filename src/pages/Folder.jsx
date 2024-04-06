import Nav from "../components/Nav";
import SearchInput from "../components/SearchInput";
import FolderList from "../components/FolderList";
import Footer from "../components/Footer";
import useData from "../hooks/useData";
import { getFolderListData } from "../api/Api";
import AddLinkInput from "../components/AddLinkInput";

function Folder() {
  const foldersData = useData(getFolderListData);
  const folders = foldersData?.data;

  return (
    <>
      <Nav />
      <AddLinkInput />
      <SearchInput />
      {folders && <FolderList folders={folders} />}
      <Footer />
    </>
  );
}

export default Folder;
