import Nav from '../components/Nav/Nav';
import Folder from '../components/Folder/Folder';
import Search from '../components/Search/Search';
import CardList from '../components/CardList/CardList';
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
