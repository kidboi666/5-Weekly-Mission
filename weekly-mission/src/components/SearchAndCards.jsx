import Cards from "./Cards";
import SearchBar from "./Searchbar";
import styled from "styled-components";

const SearchAndCardsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px;
`;

const SearchAndCardsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SearchAndCards = () => {
  return (
    <SearchAndCardsContainer>
      <SearchAndCardsContent>
        <SearchBar />
        <Cards />
      </SearchAndCardsContent>
    </SearchAndCardsContainer>
  );
};

export default SearchAndCards;
