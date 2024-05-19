import { useEffect, useState } from 'react';
import { getLinkList } from '../api';
import Nav from '../components/Common/Nav';
import AddLink from '../components/AddLink';
import Search from '../components/FolderPage/Search';
import FolderToolBar from '../components/FolderToolBar';
import NoLink from '../components/Common/NoLink';
import CardList from '../components/FolderPage/CardList';
import Footer from '../components/Footer/Footer';
import styles from '@/styles/MainContent.module.css';

function FolderPage({ userInfo, folderList }) {
  const id = 1;
  const [folderId, setFolderId] = useState(0);
  const [linkList, setLinkList] = useState({});

  useEffect(() => {
    (async function loadData() {
      const result = await getLinkList(id, folderId);
      if (!result) return;

      const { data } = result;
      setLinkList({ data });
    })();
  }, [folderId]);
  if (!linkList.data) return;

  return (
    <>
      <Nav userInfo={userInfo} isfixed="false" />
      <AddLink />
      <div className={styles.mainContent - wrapper}>
        <div className={styles.mainContent}>
          <Search />
          <FolderToolBar folderList={folderList.data} setFolderId={setFolderId} />
          {linkList.data.length === 0 ? <NoLink /> : <CardList links={linkList.data} isFolderPage={true} />}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FolderPage;
