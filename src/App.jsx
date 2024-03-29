import "./App.css";
import Body from "./components/Body";
import Folder from "./components/Folder";
import Header from "./components/Header";
import Nav from "./components/Navigation";
import SearchBar from "./components/SearchBar";
import CardImage from "./components/CardImage";
import CardContent from "./components/CardContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Folder />
      <Body />
      <SearchBar />
      <CardImage />
      <CardContent />
      <Footer />
      <div className="search-form"></div>
      {/* <div>
        <div>card '반복문 map'</div>
      </div>
      <div>footer</div> */}
    </div>
  );
}

export default App;
