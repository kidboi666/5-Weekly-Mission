import { SearchBar, SearchBarInput, Input, SearchImg } from '../../styles/SearchStyled';
import SearchIconPath from '../assets/search.svg';

function Search() {
  return (
    <SearchBar>
      <SearchBarInput>
        <Input id="searchInput" type="search" placeholder="Search..." />
        <label htmlFor="searchInput">
          <SearchImg src={SearchIconPath} alt="SearchIcon" />
        </label>
      </SearchBarInput>
    </SearchBar>
  );
}

export default Search;
