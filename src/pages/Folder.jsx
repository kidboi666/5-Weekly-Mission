import "./Folder.css";
import Nav from "../components/Nav";
import SearchInput from "../components/SearchInput";
import FolderList from "../components/FolderList";
import FolderTitle from "../components/FolderTitle";
import Footer from "../components/Footer";
import useData from "../hooks/useData";
import { getFolderListData } from "../api/Api";
import AddLinkInput from "../components/AddLinkInput";
import CardList from "../components/CardList";
import { getFolderLinkData } from "../api/Api";

function Folder() {
  const foldersData = useData(getFolderListData);
  const folders = foldersData?.data;

  const linksData = useData(getFolderLinkData);
  const links = linksData?.data;
  console.log(links);

  return (
    <>
      <Nav />
      <AddLinkInput />
      <section className="folderContent">
        <SearchInput />
        {folders && <FolderList folders={folders} />}
        <FolderTitle />
        {links && <CardList links={links} />}
      </section>
      <Footer />
    </>
  );
}

export default Folder;
