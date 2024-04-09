import styled from 'styled-components';
import searchIcon from '../asset/Search.svg';

const BAR_COLOR = '#f5f5f5';
const BAR_BORDER_RADIUS = '10px';

const BarOfSearch = styled.form`
  display: flex;
  padding: 15px 16px;
  border-radius: ${BAR_BORDER_RADIUS};
  background-color: ${BAR_COLOR};
  overflow: hidden;

  &::before {
    content: '';
    background-image: url(${searchIcon});
    background-size: cover;
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 10px;
  }
`;
const SearchInput = styled.input`
  flex-grow: 1;
  background-color: ${BAR_COLOR};
  border: 0px;
  outline: none;
`;

const HiddenButton = styled.button`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  border: 0;
  clip: rect(0 0 0 0);
`;

const HiddenLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  border: 0;
  clip: rect(0 0 0 0);
`;

const SearchBar = ({ palceholder }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchingLink = document.querySelector(`#search`);
    console.log(searchingLink.value);
  };

  return (
    <BarOfSearch onSubmit={handleSubmit}>
      <HiddenLabel htmlFor="search">검색</HiddenLabel>
      <SearchInput type="text" id="search" placeholder={palceholder} />
      <HiddenButton type="submit">검색하기</HiddenButton>
    </BarOfSearch>
  );
};

export default SearchBar;
