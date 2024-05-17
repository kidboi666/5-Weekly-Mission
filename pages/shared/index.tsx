import FolderData from '@/components/Folderdata';
import Navigation from '@/components/Navigation';
import SearchBar from '@/components/SearchBar';
import ShareCards from '@/components/ShareCards';
import styles from './index.module.css';
import Footer from '@/components/Footer';
import { BASE_URL_FOLDER_SAMPLE } from '@/constant/shared-constant';

/*테블릿 1124 이상 모바일 최소여백 32       테블릿 768~1199 모바일 375 ~767    */

function SharedPage() {
  return (
    <>
      <Navigation />
      <FolderData />
      <div className={styles.pageDisplay}>
        <SearchBar />
        <ShareCards url={BASE_URL_FOLDER_SAMPLE} />
      </div>
      <Footer />
    </>
  );
}

export default SharedPage;
