import { styled } from "styled-components";
import searchIcon from "../assets/searchIcon.svg";

export const SearchBar = () => {
  return (
    <Container>
      <StyledSearchIcon src={searchIcon} />
      <SearchInput placeholder="링크를 검색해 보세요." />
    </Container>
  );
};

const Container = styled.div`
  background-color: #f5f5f5;
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 15px 16px;
  font-size: 16px;
  font-weight: 400;
  color: #666;
`;

const StyledSearchIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const SearchInput = styled.input`
  color: ${({ theme }) => theme.color.Text};
  font-size: 16px;
  font-weight: 400;
  width: 100%;
  border: none;
  background-color: transparent;
  outline: none;
`;
