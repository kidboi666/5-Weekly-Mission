import * as S from "../Searchbar/Searchbar.styled";
import searchIcon from "../../../image/Search.png";
import clearButton from "../../../image/_close.svg";

const SearchBar = ({ value, onChange }) => {
  const handleClear = () => {
    onChange({ target: { value: "" } });
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
