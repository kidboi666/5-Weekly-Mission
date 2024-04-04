import searchIcon from "../../../image/Search.png";
import styled from "styled-components";

const SearchbarContainer = styled.div`
  position: relative;
  padding: 0 32px;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  height: 54px;
  padding: 15px 20px 15px 40px;
  border-radius: 10px;
  background-color: #f5f5f5;
  border: none;
`;

const Image = styled.img`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 45px;
  transform: translateY(-50%);
`;

const SearchBar = () => {
  return (
    <SearchbarContainer>
      <Image src={searchIcon} alt="Search Icon" />
      <Input type="text" placeholder="링크를 검색해 보세요." />
    </SearchbarContainer>
  );
};

export default SearchBar;
