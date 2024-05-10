import React, { useState, ChangeEvent, FormEvent } from "react";
import "./SearchInput.css";
import SearchImg from "../assets/Search.svg";

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
    <form className="SearchForm">
      <div className="SearchForm__searchWrap">
        <img className="SearchForm__Img" src={SearchImg} alt="돋보기" />
        <input
          id="SearchForm__Input"
          type="text"
          placeholder="링크를 검색해 보세요."
          value={searchTerm}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button className="closeButton" onClick={handleClearInput}></button>
      </div>
    </form>
  );
};

export default SearchInput;
