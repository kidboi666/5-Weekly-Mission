import SearchBar from "./searchbar";
import CardList from "./cardlist";
import './mainsection.css';
function MainSection() {
  return (
    <div className="mainSection">
      <SearchBar />
      <CardList />
    </div>
  );
}

export default MainSection;
