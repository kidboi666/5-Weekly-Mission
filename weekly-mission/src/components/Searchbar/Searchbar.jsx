import * as S from "../Searchbar/Searchbar.styled";
import searchIcon from "../../../image/Search.png";

const SearchBar = () => {
  return (
    <S.SearchbarContainer>
      <S.Image src={searchIcon} alt="Search Icon" />
      <S.Input type="text" placeholder="링크를 검색해 보세요." />
    </S.SearchbarContainer>
  );
};

export default SearchBar;
