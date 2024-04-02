import Card from "./Card";
import "../css/Cards.css";

function Cards() {
  return (
    <div className="wrap-cards">
      <div className="cards">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => {
          return <Card />;
        })}
      </div>
    </div>
  );
}

export default Cards;
