import Card from "./Card";
import SearchBar from "./Searchbar";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px;

  .main {
    display: flex;
    flex-direction: column;
  }
`;

const Main = () => {
  return (
    <MainContainer>
      <div className="main">
        <div className="searchbar">
          <SearchBar />
        </div>
        <Card />
      </div>
    </MainContainer>
  );
};

export default Main;
