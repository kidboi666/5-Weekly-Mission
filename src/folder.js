import FolderPlusLink from "./components/folderpluslink";
import Header from "./components/header";
import Footer from "./components/footer";
import FolderMain from "./components/foldermain";
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
