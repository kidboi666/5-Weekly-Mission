import { SEARCH_IMAGE } from "./constant";
import styles from "./SearchBar.module.css";

export const SearchBar = () => {
  return (
    <div className={styles.wrapSearchBar}>
      <input
        type="text"
        placeholder="링크를 검색해 보세요."
        className={styles.searchBarInput}
      />
      <img
        src={SEARCH_IMAGE}
        alt="돋보기 아이콘"
        className={styles.searchBarIcon}
      />
    </div>
  );
};
