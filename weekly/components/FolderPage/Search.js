import searchIcon from '../../assets/Search.svg';
import styles from '@/styles/Search.module.css';

function Search() {
  return (
    <div className={styles.searchBar}>
      <img className={styles.searchIcon} src={searchIcon} alt="검색" />
      <input className={styles.searchInput} placeholder="링크를 검색해 보세요"></input>
    </div>
  );
}

export default Search;
