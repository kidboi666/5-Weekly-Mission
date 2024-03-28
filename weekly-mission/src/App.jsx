//import "./App.css";
import { createGlobalStyle } from "styled-components";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

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

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
