import React from "react";
import Image from "next/image";
import searchIcon from "../../images/Search.png";
import clearButton from "../../images/_close.svg";
import styles from "./Searchbar.module.css";

interface SearchBarProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  const handleClear = () => {
    if (onChange) {
      onChange({
        target: { value: "" },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <div className={styles.searchbarcontainer}>
      <Image
        className={styles.searchimage}
        src={searchIcon}
        alt="Search Icon"
        width={20}
        height={20}
      />

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
