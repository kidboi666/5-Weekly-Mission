import styled from 'styled-components';
import SearchIconPath from '../assets/search.svg';

const CommonStyles = styled.div`
  position: relative;
  width: 100%;
`;

const SearchBar = styled(CommonStyles)`
  margin-top: 40px;
  padding: 0 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchBarInput = styled(CommonStyles)`
  max-width: 106rem;
  height: 4.3rem;
  padding-left: 3.8rem;
  padding-right: 1.6rem;
  border-radius: 1rem;
  background-color: var(--gray-light);
  font-size: 1.4rem;
  border: none;
  @media (min-width: 768px) {
    height: 5.4rem;
    padding-left: 4.2rem;
    font-size: 1.6rem;
    line-height: 150%;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  padding-left: 1.6rem;
`;

const SearchImg = styled.img`
  cursor: pointer;
  border: none;
  position: absolute;
  top: 50%;
  left: 1.6rem;
  transform: translateY(-50%);
`;

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
