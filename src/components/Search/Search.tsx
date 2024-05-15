import SearchIcon from "../../assets/icon/Search.png";
import styles from "@/src/components/Search/Search.module.css";
import Image from "next/image";

interface Props {
  searchInputValue: string;
  onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Search({ searchInputValue, onChangeValue }: Props) {
  return (
    <form className={styles.searchForm}>
      <button>
        <Image src={SearchIcon} alt="검색하기" />
      </button>
      <input
        type="text"
        placeholder="링크를 검색해 보세요."
        value={searchInputValue}
        onChange={onChangeValue}
      />
    </form>
  );
}

export default Search;
