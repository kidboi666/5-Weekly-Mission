import "./reset.css";
import "./globalStyle.css";
import { createContext } from "react";
import Footer from "./component/footer";
import Header from "./component/header";
import Main from "./component/main";

export const userContext = createContext();

function App() {
  return (
    <div className="App">
        <Header />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
