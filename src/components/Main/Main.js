import FolderData from "../Folderdata/Folderdata";
import Nav from "../Navigation/Nav";
import searchIcon from "../../assets/Search.svg";
import "./Main.css";

function App() {
  return (
    <>
      <Nav />
      <FolderData />
      <section>
        <div className="searchBox">
          <img src={searchIcon} alt="검색 돋보기 아이콘" />
          <input className="searchInput" placeholder="링크를 검색해보세요" />
        </div>
      </section>
    </>
  );
}

export default App;
