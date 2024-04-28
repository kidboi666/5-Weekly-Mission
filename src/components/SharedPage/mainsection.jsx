import SearchBar from "./searchbar";
import CardList from "../cardlist";
import './mainsection.css';
function MainSection() {
  return (
    <div className="mainSection">
      <SearchBar />
      <CardList url ="https://bootcamp-api.codeit.kr/api/sample/folder"/>
    </div>
  );
}

export default MainSection;
