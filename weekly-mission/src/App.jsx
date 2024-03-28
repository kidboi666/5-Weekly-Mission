//import "./App.css";
import { createGlobalStyle } from "styled-components";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Header from "./components/Header";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: "Pretendard";
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

      <Footer />
    </>
  );
}

export default App;
