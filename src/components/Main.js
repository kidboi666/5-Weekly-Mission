import FolderData from "./Folderdata/Folderdata";
import Nav from "./Navigation/Nav";
import { SearchBar } from "./SearchBar/SearchBar";
import "./Main.css";
import Cards from "./Cards/Cards";

function App() {
  return (
    <>
      <Nav />
      <FolderData />
      <div className="PageDisplay">
        <SearchBar />
      </div>
      <Cards />
    </>
  );
}

export default App;
