import { createGlobalStyle } from "styled-components";
import Nav from "../components/Nav";
import Header from "../components/Header";
import SearchAndCards from "../components/SearchAndCards";
import Footer from "../components/Footer";

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

function LinkShare() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Header />
      <SearchAndCards />
      <Footer />
    </>
  );
}

export default LinkShare;
