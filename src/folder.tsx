import FolderPlusLink from "./components/FolderPage/folderpluslink";
import Header from "./components/header";
import Footer from "./components/footer";
import FolderMain from "./components/FolderPage/foldermain";
import './folder.css';

function Folder() {
  return (
    <div>
      <Header />
      <FolderPlusLink />
      <div className="FolderMain">
        <FolderMain />
        <Footer />
      </div>
    </div>
  );
}

export default Folder;
