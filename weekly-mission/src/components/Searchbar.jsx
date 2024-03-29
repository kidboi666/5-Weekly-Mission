import searchIcon from "../../image/Search.png";
import styled from "styled-components";

const SearchbarContainer = styled.div`
  position: relative;
  margin: 0 16px;

  input {
    width: 100%;
    height: 54px;
    padding: 15px 20px 15px 40px;
    border-radius: 10px;
    background-color: #f5f5f5;
    border: none;
  }

  img {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
  }
`;

const SearchBar = () => {
  return (
    <SearchbarContainer>
      <img src={searchIcon} alt="Search Icon" />
      <input type="text" placeholder="링크를 검색해 보세요." />
    </SearchbarContainer>
  );
};

export default SearchBar;
