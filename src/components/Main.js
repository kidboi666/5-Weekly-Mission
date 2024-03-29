import FolderData from "./Folderdata/Folderdata";
import Nav from "./Navigation/Nav";
import { SearchBar } from "./SearchBar/SearchBar";
import "./Main.css";

function App() {
  return (
    <>
      <Nav />
      <FolderData />
      <div className="PageDisplay">
        <SearchBar />
      </div>
    </>
  );
}

export default App;
