import { SearchBar, SearchBarInput, Input, SearchImg } from '../styles/SearchStyled';
import SearchIconPath from '../assets/search.svg';

function Search() {
  return (
    <SearchBar>
      <SearchBarInput>
        <Input id="searchInput" type="search" placeholder="링크를 검색해 보세요" />
        <label htmlFor="searchInput">
          <SearchImg src={SearchIconPath} alt="SearchIcon" />
        </label>
      </SearchBarInput>
    </SearchBar>
  );
}

export default Search;
