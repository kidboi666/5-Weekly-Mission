import Search from '../components/Search';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import LinkAdd from '../components/FolderConponents/LinkAdd';
import FolderLink from '../components/FolderConponents/FolderLink';
import FolderList from '../components/FolderConponents/FolderList';
function Folder() {
  return (
    <>
      <Nav />
      <LinkAdd />
      <Search />
      <FolderList />
      <FolderLink />
      <Footer />
    </>
  );
}

export default Folder;
