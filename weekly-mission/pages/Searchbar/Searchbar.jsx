import Image from "next/image";
import searchIcon from "../../public/images/Search.png";
import clearButton from "../../public/images/_close.svg";
import styles from "./Searchbar.module.css";

const SearchBar = ({ value, onChange }) => {
  const handleClear = () => {
    onChange({ target: { value: "" } });
  };

  return (
    <div className={styles.searchbarcontainer}>
      <div className={styles.searchimage}>
        <Image src={searchIcon} alt="Search Icon" />
      </div>
      <input
        className={styles.searchinput}
        type="text"
        placeholder="링크를 검색해 보세요."
        value={value}
        onChange={onChange}
      />
      <div className={styles.clearbutton}>
        <Image src={clearButton} alt="Clear Button" onClick={handleClear} />
      </div>
    </div>
  );
};

export default SearchBar;
