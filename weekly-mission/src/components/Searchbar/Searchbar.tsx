import React from "react";
import * as S from "./Searchbar.styled";
import searchIcon from "../../../image/Search.png";
import clearButton from "../../../image/_close.svg";

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
    <S.SearchbarContainer>
      <S.Image src={searchIcon} alt="Search Icon" />
      <S.Input
        type="text"
        placeholder="링크를 검색해 보세요."
        value={value}
        onChange={onChange}
      />
      <S.ClearButton
        src={clearButton}
        alt="Clear Button"
        onClick={handleClear}
      />
    </S.SearchbarContainer>
  );
};

export default SearchBar;
