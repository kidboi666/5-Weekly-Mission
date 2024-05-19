import Nav from '../components/Common/Nav';
import Folder from '../components/FolderPage/Folder';
import Search from '../components/FolderPage/Search';
import CardList from '../components/FolderPage/CardList';
import Footer from '../components/Footer/Footer';
import styles from '@/styles/MainContent.module.css';
import queryString from 'query-string';

function SharedPage({ queryParam }) {
  const parsedQuery = queryString.parse(queryParam);

  const userInfo = parsedQuery.userInfo;
  const folderInfo = parsedQuery.folderInfo;

  return (
    <>
      <Nav userInfo={userInfo} />
      <Folder owner={folderInfo.owner} folderName={folderInfo.name} />
      <div className={styles.mainContent - wrapper}>
        <div className={styles.mainContent}>
          <Search />
          <CardList links={folderInfo.links} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SharedPage;
