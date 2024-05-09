import SearchIcon from "../../assets/icon/Search.png";
import styles from "@/src/components/Search/Search.module.css";
import Image from "next/image";

function Search() {
  return (
    <form className={styles.searchForm}>
      <button>
        <Image src={SearchIcon} alt="검색하기" />
      </button>
      <input type="text" placeholder="링크를 검색해 보세요." />
    </form>
  );
}

export default Search;
