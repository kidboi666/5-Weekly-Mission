import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "./SearchInput.module.css";
import SearchImg from "@/public/Search.svg";
import Image from "next/image";

interface SearchInputProps {
  onSearch: (term: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const term = e.target.value;
    setSearchTerm(term);
  };

  const handleClearInput = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    setSearchTerm("");
    onSearch("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSearch(searchTerm);
    }
  };

  return (
    <form className={styles.SearchForm}>
      <div className={styles.SearchForm__searchWrap}>
        <Image
          className={styles.SearchForm__Img}
          src={SearchImg}
          alt="돋보기"
        />
        <input
          id={styles.SearchForm__Input}
          type="text"
          placeholder="링크를 검색해 보세요."
          value={searchTerm}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button
          className={styles.closeButton}
          onClick={handleClearInput}
        ></button>
      </div>
    </form>
  );
};

export default SearchInput;
