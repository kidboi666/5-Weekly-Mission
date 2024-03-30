import Cards from "./Cards";
import SearchBar from "./Searchbar";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = () => {
  return (
    <MainContainer>
      <MainContent>
        <div className="searchbar">
          <SearchBar />
        </div>
        <Cards />
      </MainContent>
    </MainContainer>
  );
};

export default Main;
