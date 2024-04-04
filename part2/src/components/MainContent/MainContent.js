import CardList from "../CardList/CardList";
import Search from "../Search/Search";
import "./MainContent.css";

function MainContent({ links }) {
  return (
    <div className="mainContent-wrapper">
      <div className="mainContent">
        <Search />
        <CardList links={links} />
      </div>
    </div>
  );
}

export default MainContent;
