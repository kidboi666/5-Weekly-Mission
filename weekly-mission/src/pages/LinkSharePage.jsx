import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Nav from "../components/shared/Nav";
import Header from "../components/linksharepage/Header";
import SearchAndCards from "../components/linksharepage/SearchAndCards";
import Footer from "../components/shared/Footer";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: 'Pretendard', sans-serif;
  margin: 0;
}

button {
  border: none;
  border-radius: 8px;
}
`;

const FixedNavContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: #f0f6ff;
  z-index: 2;
`;

function LinkShare() {
  return (
    <>
      <GlobalStyle />
      <FixedNavContainer>
        <Nav />
      </FixedNavContainer>
      <Header />
      <SearchAndCards />
      <Footer />
    </>
  );
}

export default LinkShare;
